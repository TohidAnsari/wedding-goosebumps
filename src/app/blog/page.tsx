import React from "react";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/prisma";
import Navigation from "@/components/sections/navigation";

export const dynamic = "force-dynamic";

export default async function BlogListingPage() {
  const posts = await prisma.blogPost.findMany({
    where: { status: "Published" },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="bg-ivory text-charcoal min-h-screen">
      <div className="relative z-50">
        <Navigation />
      </div>

      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-7">
          <div className="text-center mb-16">
            <h1 className="font-epicene-display font-light text-[32px] sm:text-[42px] md:text-[50px] leading-[1.1] mb-4">
              Journal
            </h1>
            <p className="font-lora text-[15px] sm:text-[17px] text-charcoal/80 max-w-2xl mx-auto">
              Stories, inspiration, and insights from our latest celebrations around the world.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20 text-charcoal/60 font-lora">
              No journal entries published yet. Check back soon.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog${post.slug.startsWith('/') ? post.slug : `/${post.slug}`}`} className="group block">
                  <div className="relative w-full aspect-[4/3] mb-5 bg-[#efe9df] overflow-hidden">
                    {post.coverImage ? (
                      <Image 
                        src={post.coverImage} 
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-[#B5A484]/30 font-epicene-display text-4xl">
                        WG
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-commuter-sans text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-charcoal/50 mb-2">
                      {post.publishDate ? new Date(post.publishDate).toLocaleDateString() : new Date(post.createdAt).toLocaleDateString()}
                    </p>
                    <h2 className="font-epicene-display text-[22px] sm:text-[24px] leading-[1.2] mb-3 group-hover:text-[#C2A770] transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="font-lora text-[14px] leading-[1.6] text-charcoal/80 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Journal | Wedding Goosebumps",
  description: "Stories, inspiration, and insights from our latest celebrations around the world.",
};

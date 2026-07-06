import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import Navigation from "@/components/sections/navigation";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Use a transaction or single query depending on relations (author, etc)
  const post = await prisma.blogPost.findUnique({
    where: { slug: slug.startsWith('/') ? slug : `/${slug}` },
  });

  // If not found by exact slug, try with/without leading slash
  const finalPost = post || await prisma.blogPost.findUnique({
    where: { slug: slug.startsWith('/') ? slug.substring(1) : slug },
  });

  if (!finalPost) {
    notFound();
  }

  // SEO mapping could be done via generateMetadata but for now we just render
  return (
    <main className="bg-ivory text-charcoal min-h-screen">
      <div className="relative z-50">
        <Navigation />
      </div>

      <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-7">
          <div className="text-center mb-10">
            <h1 className="font-epicene-display font-light text-[32px] sm:text-[42px] md:text-[50px] leading-[1.1] mb-6">
              {finalPost.title}
            </h1>
            <p className="font-commuter-sans text-[10px] sm:text-[12px] uppercase tracking-[0.2em] text-charcoal/60">
              {finalPost.publishDate ? new Date(finalPost.publishDate).toLocaleDateString() : new Date(finalPost.createdAt).toLocaleDateString()}
            </p>
          </div>

          {finalPost.coverImage && (
            <div className="relative w-full aspect-[16/9] mb-12 bg-[#efe9df] overflow-hidden">
              <Image 
                src={finalPost.coverImage} 
                alt={finalPost.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <article className="prose prose-lg prose-headings:font-epicene-display prose-headings:font-light prose-p:font-lora prose-p:text-charcoal/90 prose-a:text-[#B5A484] max-w-none mx-auto text-justify leading-[1.8]" dangerouslySetInnerHTML={{ __html: finalPost.body || finalPost.excerpt || "" }} />
        </div>
      </section>

      {/* Decorative divider */}
      <div className="bg-ivory py-12">
        <div className="flex items-center gap-3 sm:gap-4 max-w-2xl mx-auto px-6">
          <div className="h-px flex-1 bg-charcoal/20" />
          <span className="text-2xl sm:text-3xl text-[#B5A484]">∞</span>
          <div className="h-px flex-1 bg-charcoal/20" />
        </div>
      </div>
      
      <section className="pb-20 text-center">
        <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-[#C2A770] text-[#C2A770] hover:bg-[#C2A770] hover:text-white transition-colors tracking-[0.2em] uppercase text-[10px] sm:text-xs font-lora"
          >
            Back to Journal
          </Link>
      </section>
    </main>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug: slug.startsWith('/') ? slug : `/${slug}` },
  }) || await prisma.blogPost.findUnique({
    where: { slug: slug.startsWith('/') ? slug.substring(1) : slug },
  });

  if (!post) return {};

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: post.canonicalUrl,
    },
    openGraph: {
      title: post.ogTitle || post.metaTitle || post.title,
      description: post.ogDescription || post.metaDescription || post.excerpt,
      images: post.ogImage || post.coverImage ? [post.ogImage || post.coverImage] : [],
    },
    robots: post.robots,
  };
}

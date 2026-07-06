import { Metadata } from "next";
import prisma from "@/lib/prisma";

export async function getPageMetadata(slug: string): Promise<Metadata> {
  const page = await prisma.page.findUnique({
    where: { slug }
  });

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription,
    alternates: {
      canonical: page.canonicalUrl || undefined,
    },
    robots: page.robots || "index, follow",
    openGraph: {
      title: page.ogTitle || page.metaTitle || page.title,
      description: page.ogDescription || page.metaDescription || undefined,
      images: page.ogImage ? [{ url: page.ogImage }] : [],
    }
  };
}

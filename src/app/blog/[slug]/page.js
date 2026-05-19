// src/app/blog/[slug]/page.js
import { notFound } from "next/navigation";
import Image from "next/image";
import { HeroAllSection } from "../../components/HeroAllSection";
import Footer from "../../components/Footer";

async function getBlog(slug) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/blog?slug=${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data.blog;
}

function cleanHtml(html = "") {
  return html
    .replace(/&nbsp;/g, " ")
    .replace(/<p><br><\/p>/g, "")
    .replace(/undefined/g, "");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = await getBlog(slug);

  if (!post) {
    return {
      title: "Blog Not Found",
      description: "This blog could not be found.",
    };
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.shortDesc,
    keywords: Array.isArray(post.targetKeywords) ? post.targetKeywords : [],

    alternates: {
      canonical: `/blog/${post.slug}`,
    },

    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.shortDesc,
      images: post.featuredImage ? [post.featuredImage] : [],
      url: `/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function SingleBlogPage({ params }) {
  const { slug } = await params;

  const post = await getBlog(slug);

  if (!post) return notFound();

  return (
    <>
      <div className="blog-single-header">
        <HeroAllSection title1={post.title} />
      </div>

      <main className="blog-single">
        <div className="container">
          {post.featuredImage && (
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={800}
              height={500}
            />
          )}

          <article
            className="blog-content"
            dangerouslySetInnerHTML={{
              __html: cleanHtml(post.content),
            }}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

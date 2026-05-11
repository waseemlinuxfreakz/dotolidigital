// ✅ src/app/blog/page.jsx
"use client";

import { useEffect, useState } from "react";
import PopupForm from "../components/PopupForm";
import Link from "next/link";
import Image from "next/image";
import { HeroAllSection } from "../components/HeroAllSection";
import Footer from "../components/Footer";

export default function BlogPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBlogs(data);
        }
      })
      .catch((err) => console.error("Failed to fetch blogs:", err));
  }, []);

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroAllSection
        title1="Insights, Ideas,"
        title2="and Industry Trends"
        description={`Explore our latest thoughts on digital marketing, branding, web development,<br/> and innovation. Stay informed, stay inspired.`}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
        id="team-hero"
      />

      <div id="team-hero"></div>

      <main className="blog-layout">
        <div className="container">
          <div className="blog-content">
            <div className="blog-main">
              {blogs.length === 0 ? (
                <p>No blogs found.</p>
              ) : (
                blogs.map((post) => (
                  <div key={post._id} className="blog-card">
                    <Link href={`/blog/${post.slug}`}>
                      {post.featuredImage && (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          width={600}
                          height={400}
                        />
                      )}

                      <h2>{post.title}</h2>
                      <span className="blog-date">{post.date}</span>
                      <p>{post.shortDesc}</p>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

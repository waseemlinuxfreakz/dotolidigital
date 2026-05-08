"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

export default function CreateBlogPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "2-digit",
  });

  const uploadImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setFeaturedImage(data.url);
    } else {
      alert(data.error || data.message || "Image upload failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !shortDesc || !content) {
      alert("Please fill Title, Short Description and Content.");
      return;
    }

    setSubmitting(true);

    const payload = {
      date: today,
      adminName: "Admin",
      title,
      slug: slug?.trim(),
      shortDesc,
      content,
      featuredImage,
    };

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/admin/blog");
      } else {
        alert(data.details || data.error || "Blog submission failed");
      }
    } catch (err) {
      alert(err.message || "Blog submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="blog-form">
      <h1>Create Blog</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />

        <input
          type="text"
          placeholder="Slug (optional)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="input"
        />

        <textarea
          placeholder="Short Description"
          value={shortDesc}
          onChange={(e) => setShortDesc(e.target.value)}
          className="input"
        />

        <div className="ad-label-group">
          <label>Upload Featured Image:</label>
          <input type="file" onChange={uploadImage} />

          {featuredImage && (
            <Image src={featuredImage} width={80} height={80} alt="featured" />
          )}
        </div>

        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          placeholder="Blog Content"
        />

        <button type="submit" className="btn" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Blog"}
        </button>
      </form>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

export default function EditBlogPage() {
  const router = useRouter();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [content, setContent] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [targetKeywords, setTargetKeywords] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blog?id=${id}`);
        const data = await res.json();

        if (!res.ok || !data.blog) {
          alert("Blog not found");
          router.push("/admin/blog");
          return;
        }

        const blog = data.blog;

        setTitle(blog.title || "");
        setSlug(blog.slug || "");
        setShortDesc(blog.shortDesc || "");
        setContent(blog.content || "");
        setMetaTitle(blog.metaTitle || "");
        setMetaDescription(blog.metaDescription || "");
        setTargetKeywords(
          Array.isArray(blog.targetKeywords)
            ? blog.targetKeywords.join(", ")
            : "",
        );
        setFeaturedImage(blog.featuredImage || "");
      } catch (err) {
        console.error("Failed to fetch blog:", err);
        alert("Failed to load blog");
      }
    };

    if (id) fetchBlog();
  }, [id, router]);

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

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!title || !shortDesc || !content) {
      alert("Please fill Title, Short Description and Content.");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/blog", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          title,
          slug: slug?.trim(),
          shortDesc,
          content,
          metaTitle,
          metaDescription,
          targetKeywords,
          featuredImage,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/admin/blog");
      } else {
        alert(data.details || data.error || "Blog update failed");
      }
    } catch (err) {
      alert(err.message || "Blog update failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="blog-form" style={{ padding: 20 }}>
      <h1>Edit Blog</h1>

      <form onSubmit={handleUpdate}>
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

        <input
          type="text"
          placeholder="Meta Title"
          value={metaTitle}
          onChange={(e) => setMetaTitle(e.target.value)}
          className="input"
        />

        <textarea
          placeholder="Meta Description"
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
          className="input"
        />

        <input
          type="text"
          placeholder="Target Keywords (comma separated)"
          value={targetKeywords}
          onChange={(e) => setTargetKeywords(e.target.value)}
          className="input"
        />

        <textarea
          placeholder="Short Description"
          value={shortDesc}
          onChange={(e) => setShortDesc(e.target.value)}
          className="input"
        />

        <div className="ad-label-group" style={{ marginTop: 20 }}>
          <label>Upload Featured Image:</label>
          <input type="file" onChange={uploadImage} />

          {featuredImage && (
            <div
              style={{
                position: "relative",
                display: "inline-block",
                marginTop: 10,
              }}
            >
              <Image
                src={featuredImage}
                alt="Featured"
                width={80}
                height={80}
              />

              <button
                type="button"
                onClick={() => setFeaturedImage("")}
                style={{
                  position: "absolute",
                  top: -8,
                  right: -8,
                  background: "#d33",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: 20,
                  height: 20,
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
          )}
        </div>

        <div style={{ margin: "20px 0" }}>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Full Blog Content"
          />
        </div>

        <button type="submit" className="btn" disabled={submitting}>
          {submitting ? "Updating..." : "Update Blog"}
        </button>
      </form>
    </div>
  );
}

"use client";

import { useState, useRef, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

export default function CreateBlogPage() {
  const router = useRouter();
  const quillRef = useRef(null); // <-- Quill Editor Ref

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [content, setContent] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [targetKeywords, setTargetKeywords] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "2-digit",
  });

  // Featured Image Upload (Existing)
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

  // --- Custom Image Handler for Quill Editor ---
  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        if (data.success) {
          // Get editor and current cursor position
          const quill = quillRef.current.getEditor();
          const range = quill.getSelection(true);

          // Insert uploaded image URL into the editor
          quill.insertEmbed(range.index, "image", data.url);

          // Move cursor to next position
          quill.setSelection(range.index + 1);
        } else {
          alert("Image upload failed");
        }
      } catch (err) {
        console.error("Upload error:", err);
        alert("Image upload failed");
      }
    };
  }, []);

  // --- Quill Modules Configuration ---
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "link"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["clean"], // Remove formatting
          ["image"], // <-- Added Image Button
        ],
        handlers: {
          image: imageHandler, // Map custom handler to the image button
        },
      },
    }),
    [imageHandler],
  );

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
      metaTitle,
      metaDescription,
      targetKeywords,
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
        {/* Your existing inputs... */}
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
          placeholder="Target Keywords"
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

        <div className="ad-label-group">
          <label>Upload Featured Image:</label>
          <input type="file" onChange={uploadImage} />
          {featuredImage && (
            <Image src={featuredImage} width={80} height={80} alt="featured" />
          )}
        </div>

        <div style={{ margin: "20px 0" }}>
          {/* Passed ref and modules here */}
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Blog Content"
            modules={modules}
          />
        </div>

        <button type="submit" className="btn" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Blog"}
        </button>
      </form>
    </div>
  );
}

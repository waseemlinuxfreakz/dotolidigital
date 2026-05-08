"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiPlus, FiEdit2, FiTrash2, FiCopy } from "react-icons/fi";

export default function BlogAdminPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then(setBlogs);
  }, []);

  const deleteBlog = async (id) => {
    if (confirm("Delete this blog?")) {
      const res = await fetch("/api/blog", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setBlogs((prev) => prev.filter((b) => b._id !== id));
      } else {
        const error = await res.json();
        alert("❌ Failed to delete blog: " + error?.error);
      }
    }
  };

  const duplicateBlog = async (id) => {
    const res = await fetch("/api/blog", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ duplicateId: id }),
    });

    if (res.ok) {
      const newBlog = await res.json();
      setBlogs((prev) => [newBlog, ...prev]);
    } else {
      const error = await res.json();
      alert("❌ Failed to duplicate blog: " + error?.error);
    }
  };

  return (
    <div className="dashboard-content" style={{ padding: 20 }}>
      <div className="flex-between" style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: "24px" }}>📝 Manage Blogs</h1>

        <Link href="/admin/blog/create" className="add-btn">
          <FiPlus /> <span>Add New</span>
        </Link>
      </div>

      <div className="blog-list">
        {blogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog._id} className="blog-card">
              {blog.featuredImage && (
                <div style={{ marginBottom: 12 }}>
                  <Image
                    src={blog.featuredImage}
                    alt={blog.title || "Blog image"}
                    width={160}
                    height={100}
                    style={{
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              )}

              <div className="blog-info">
                <strong>{blog.title}</strong>
                <p>{blog.shortDesc?.slice(0, 180)}...</p>
              </div>

              <div className="action-buttons">
                <Link
                  href={`/admin/blog/edit/${blog._id}`}
                  className="edit-btn"
                >
                  <FiEdit2 /> <span>Edit</span>
                </Link>

                <button
                  onClick={() => duplicateBlog(blog._id)}
                  className="edit-btn"
                  title="Duplicate"
                >
                  <FiCopy /> <span>Duplicate</span>
                </button>

                <button
                  onClick={() => deleteBlog(blog._id)}
                  className="delete-btn"
                >
                  <FiTrash2 /> <span>Delete</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

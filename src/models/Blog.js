// src/models/Blog.js
import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    date: { type: String, required: true },
    adminName: { type: String, required: true },
    views: { type: Number, default: 0 },

    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    shortDesc: { type: String, required: true },
    content: { type: String, required: true },

    metaTitle: { type: String, default: "" },
    metaDescription: { type: String, default: "" },
    targetKeywords: { type: [String], default: [] },

    featuredImage: { type: String, default: "" },
  },
  { timestamps: true },
);

BlogSchema.pre("validate", function () {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

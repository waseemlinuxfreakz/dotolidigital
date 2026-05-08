import Blog from "@/models/Blog";
import { connectToDB } from "@/lib/db";

function generateSlug(title = "") {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 100);
}

export async function GET(req) {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    const id = searchParams.get("id");

    if (id) {
      const blog = await Blog.findById(id);
      if (!blog) {
        return Response.json({ error: "Blog not found" }, { status: 404 });
      }
      return Response.json({ blog });
    }

    if (slug) {
      const blog = await Blog.findOne({ slug });
      if (!blog) {
        return Response.json({ error: "Blog not found" }, { status: 404 });
      }
      return Response.json({ blog });
    }

    const blogs = await Blog.find().sort({ createdAt: -1 });
    return Response.json(blogs);
  } catch (err) {
    return Response.json(
      { error: "Failed to fetch blogs", details: err.message },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    await connectToDB();

    const body = await req.json();

    const newBlog = new Blog({
      date: body.date,
      adminName: body.adminName || "Admin",
      title: body.title,
      slug: body.slug?.trim() || generateSlug(body.title),
      shortDesc: body.shortDesc,
      content: body.content,
      featuredImage: body.featuredImage || "",
    });

    const saved = await newBlog.save();
    return Response.json(saved);
  } catch (err) {
    return Response.json(
      { error: "Blog creation failed", details: err.message },
      { status: 500 },
    );
  }
}

export async function PUT(req) {
  try {
    await connectToDB();

    const body = await req.json();

    const updatedData = {
      title: body.title,
      slug: body.slug?.trim() || generateSlug(body.title),
      shortDesc: body.shortDesc,
      content: body.content,
      featuredImage: body.featuredImage || "",
    };

    const updatedBlog = await Blog.findByIdAndUpdate(body.id, updatedData, {
      new: true,
    });

    return Response.json(updatedBlog);
  } catch (err) {
    return Response.json(
      { error: "Blog update failed", details: err.message },
      { status: 500 },
    );
  }
}

export async function DELETE(req) {
  try {
    await connectToDB();

    const body = await req.json();
    await Blog.findByIdAndDelete(body.id);

    return Response.json({ message: "Blog deleted successfully" });
  } catch (err) {
    return Response.json(
      { error: "Blog delete failed", details: err.message },
      { status: 500 },
    );
  }
}

export async function PATCH(req) {
  try {
    await connectToDB();

    const { duplicateId } = await req.json();

    if (!duplicateId) {
      return Response.json({ error: "Missing blog ID" }, { status: 400 });
    }

    const originalBlog = await Blog.findById(duplicateId);

    if (!originalBlog) {
      return Response.json({ error: "Blog not found" }, { status: 404 });
    }

    const { _id, createdAt, updatedAt, ...cloneData } = originalBlog.toObject();

    cloneData.title = `${cloneData.title} (Copy)`;
    cloneData.slug = generateSlug(cloneData.title);

    const newBlog = await Blog.create(cloneData);
    return Response.json(newBlog, { status: 201 });
  } catch (err) {
    return Response.json(
      { error: "Duplicate failed", details: err.message },
      { status: 500 },
    );
  }
}

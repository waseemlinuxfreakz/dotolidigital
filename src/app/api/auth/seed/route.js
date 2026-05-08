// /src/app/api/auth/seed/route.js
import { connectToDB } from "../../../../lib/db";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    await connectToDB();

    const email = "waseem.linuxfreakz@gmail.com";
    const password = "web123devs";

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Admin already exists",
        }),
        { status: 200 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
      email,
      password: hashedPassword,
    });

    await admin.save();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Admin created!",
      }),
      { status: 201 },
    );
  } catch (error) {
    console.error("Seed admin error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to seed admin",
        details: error.message,
      }),
      { status: 500 },
    );
  }
}

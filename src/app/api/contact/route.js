// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.verify();

    const mail = await transporter.sendMail({
      from: `"Dotoli Digital" <${process.env.GMAIL_USER}>`,
      to: [
        "khaliddigitalmarketer1@gmail.com",
        "Khalid@dotolidigital.com",
        "Jared@dotolidigital.com",
        "waseem.linuxfreakz@gmail.com",
      ].join(", "),
      subject: `New Contact Form – ${data.name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone || "-"}</p>
        <p><b>Company:</b> ${data.company || "-"}</p>
        <p><b>Website:</b> ${data.website || "-"}</p>
        <p><b>Service Needed:</b> ${data.service || "-"}</p>
        <p><b>Goal:</b> ${data.goal || "-"}</p>
        <p><b>Budget:</b> ${data.budget || "-"}</p>
        <p><b>Referral:</b> ${data.referral || "-"}</p>
        <hr/>
        <h3>SMS Opt-In</h3>
        <p><b>Transactional SMS:</b> ${data.smsTransactional ? "YES" : "NO"}</p>
        <p><b>Marketing SMS:</b> ${data.smsMarketing ? "YES" : "NO"}</p>
        <p style="font-size:12px;color:#777;">
          Consent is not a condition of purchase. Reply STOP to opt out, HELP for help. Message & data rates may apply.
        </p>
      `,
    });

    console.log("✅ Email sent:", mail.messageId);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("❌ Mail error:", err);
    return new Response("Mail error", { status: 500 });
  }
}

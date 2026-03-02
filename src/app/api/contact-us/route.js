// app/api/contact-us/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    // Basic server-side validation
    if (!data?.name?.trim() || !data?.phone?.trim() || !data?.email?.trim()) {
      return new Response("Missing required fields", { status: 400 });
    }

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

    const recipients = [
      "khaliddigitalmarketer1@gmail.com",
      "Khalid@dotolidigital.com",
      "Jared@dotolidigital.com",
      "waseem.linuxfreakz@gmail.com",
    ].join(", ");

    const html = `
      <h2>New Contact Submission</h2>
      <p><b>Name:</b> ${escapeHtml(data.name)}</p>
      <p><b>Email:</b> ${escapeHtml(data.email)}</p>
      <p><b>Phone:</b> ${escapeHtml(data.phone)}</p>
      <p><b>Company:</b> ${data.company?.trim() ? escapeHtml(data.company) : "-"}</p>
      <hr/>
      <h3>SMS Opt-In</h3>
      <p><b>Transactional SMS:</b> ${data.smsTransactional ? "YES" : "NO"}</p>
      <p><b>Marketing SMS:</b> ${data.smsMarketing ? "YES" : "NO"}</p>
      <p style="font-size:12px;color:#777;">
        Consent is not a condition of purchase. Reply STOP to opt out, HELP for help. Message & data rates may apply.
      </p>
    `;

    const mail = await transporter.sendMail({
      from: `"Dotoli Digital" <${process.env.GMAIL_USER}>`,
      to: recipients,
      subject: `New Contact Form – ${data.name}`,
      html,
      replyTo: data.email, // ✅ replies go to lead
    });

    console.log("✅ Email sent:", mail.messageId);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("❌ Mail error:", err);
    return new Response("Mail error", { status: 500 });
  }
}

/* tiny helper to prevent HTML injection in email */
function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

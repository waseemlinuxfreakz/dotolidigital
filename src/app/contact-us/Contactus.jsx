/* app/contact-us/page.jsx */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import { HeroAllSection } from "../components/HeroAllSection";
import PopupForm from "../components/PopupForm";
import { TextCounterSection } from "../components/TextCounterSection";

export default function Contactus() {
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const empty = {
    name: "",
    email: "",
    phone: "",
    company: "",
    smsTransactional: false,
    smsMarketing: false,
  };

  const [formData, setFormData] = useState(empty);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Guard: Required fields
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim()
    ) {
      setStatus("Please fill in all required fields.");
      return;
    }

    setStatus("Sending…");

    try {
      const res = await fetch("/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setStatus(
        res.ok ? "Message sent successfully!" : "Failed to send message.",
      );

      if (res.ok) {
        setFormData(empty);
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    }
  };

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroAllSection
        title1="Let’s Talk About"
        title2="Growing Your Business"
        description={`Need better visibility, stronger branding, <br/> or scroll-stopping video? Tell us what you<br/> need — we'll help you get there.`}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
        id={"team-hero"}
      />

      <div id="team-hero"></div>

      <TextCounterSection
        text="Start your project or just start the conversation."
        paragraph="Tell us what’s not working, and where you want to go. We’ll respond with clear steps to help."
      />

      <section className="contact-sec">
        <div className="container">
          <div className="flex-box">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {/* Title + info */}
              <div className="contact-form-title-wrap">
                <h4 className="">
                  We'll use your info to contact you about your request.{" "}
                  <span className="accent">
                    SMS is only sent if you opt in below.
                  </span>
                </h4>
              </div>

              {/* Required fields */}
              <div className="form-group">
                <label htmlFor="name">Full Name*</label>
                <input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={onChange}
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={onChange}
                  placeholder="(123) 456-7890"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                />
              </div>

              {/* Optional */}
              <div className="form-group">
                <label htmlFor="company">Company / Brand (optional)</label>
                <input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={onChange}
                  placeholder="Your organisation"
                />
              </div>

              {/* SMS Opt-In block (Optional) */}
              <div className="sms-optin-wrap">
                <div className="sms-optin-head">
                  <div className="sms-optin-title">
                    SMS Opt-In <span className="sms-optin-badge">Optional</span>
                  </div>
                </div>

                <div className="sms-optin-box">
                  <label className="sms-check-row">
                    <input
                      type="checkbox"
                      name="smsTransactional"
                      checked={formData.smsTransactional}
                      onChange={onChange}
                    />
                    <span className="sms-check-text">
                      I agree to receive <b>transactional</b> text messages from
                      Dotoli Digital LLC about my inquiry (e.g., appointment
                      reminders, updates). Message frequency may vary. Message &
                      data rates may apply. Reply <b>STOP</b> to opt out,{" "}
                      <b>HELP</b> for help.
                    </span>
                  </label>

                  <label className="sms-check-row">
                    <input
                      type="checkbox"
                      name="smsMarketing"
                      checked={formData.smsMarketing}
                      onChange={onChange}
                    />
                    <span className="sms-check-text">
                      I agree to receive <b>marketing</b> and promotional text
                      messages from Dotoli Digital LLC about services and
                      offers. Message frequency may vary. Message & data rates
                      may apply. Reply <b>STOP</b> to opt out, <b>HELP</b> for
                      help. <b>Consent is not a condition of purchase.</b>
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="btn-group" style={{ marginTop: "2rem" }}>
                <button type="submit" className="btn form-btn">
                  Send My Project Brief
                </button>
              </div>

              {/* Consent + legal */}
              

              <div className="contact-legal-links">
                <Link href="/privacy" className="legal-link">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="legal-link">
                  Terms &amp; Conditions
                </Link>
              </div>

              {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
            </form>

            <div className="contact-img">
              <Image
                src="/images/contacct.webp"
                alt="contact"
                width={800}
                height={830}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
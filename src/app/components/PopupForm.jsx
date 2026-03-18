/* ── app/components/PopupForm.jsx ── */
"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function PopupForm({ onClose }) {
  const [status, setStatus] = useState("");
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

  const overlayRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("popup-open");
    return () => {
      document.body.classList.remove("popup-open");
    };
  }, []);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  const handleOverlayClick = (e) =>
    e.target === overlayRef.current && onClose();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending…");

    const ok = await fetch("/api/popup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    }).then((r) => r.ok);

    if (ok) {
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div
      className="popup-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
    >
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          ×
        </button>

        <h2 className="sm-title">Need a Trusted Digital Partner? We’re In.</h2>
        <p className="text-1">
          Tell us what you need we’ll show you how we can help.
        </p>
        <div className="contact-form-title-wrap">
          <h4 className="">
            We'll use your info to contact you about your request.{" "}
            <span className="accent">
              SMS is only sent if you opt in below.
            </span>
          </h4>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name*</label>
            <input id="name" name="name" required placeholder="Your name" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
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
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">What do you need help with?*</label>
            <select id="service" name="service" required>
              <option value="">Select</option>
              <option>Paid Ads</option>
              <option>CRM & Automation</option>
              <option>AI Agents</option>
              <option>Website or Landing Page</option>
              <option>VR / 3D Walkthrough</option>
              <option>Branding & Creative</option>
              <option>Not Sure / Let's Discuss</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="budget">Estimated Budget*</label>
            <select id="budget" name="budget" required>
              <option value="">Select</option>
              <option>Less than $1,000</option>
              <option>$1,000-$5,000</option>
              <option>$5,000-$10,000</option>
              <option>$10,000+</option>
              <option>Not sure yet</option>
            </select>
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

          

          <div className="btn form-btn">
            <button type="submit">Book My Free Consultation</button>
          </div>
          
          {/* Consent + legal */}
          <p className="contact-consent-text">
            By submitting this form, you agree to receive SMS messages from Dotoli Digital. Message and data rates may apply. Reply STOP to unsubscribe, HELP for help.
          </p>
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
      </div>
    </div>
  );
}

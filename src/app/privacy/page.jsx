"use client";
import { useState } from "react";
import PopupForm from "../components/PopupForm";
import { BannerSection } from "../components/BannerSection";
import Footer from "../components/Footer";
import { HeroAllSection } from "../components/HeroAllSection";

export default function page() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroAllSection
        title1={"Privacy Policy"}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
        id={"team-hero"}
      />

      <div id="team-hero"></div>

      <article className="max-w-4xl mx-auto p-8 bg-white shadow-sm rounded-lg prose lg:prose-lg content-section-terms">
        <p className="mt-2 text-sm text-gray-600">Last updated:</p>

        <section>
          <h2>SMS and Mobile Messaging</h2>
          <p>
            If you opt in to receive SMS messages from Dotoli Digital LLC, we
            may send you marketing and sales messages related to our digital
            marketing services and lead generation. Message frequency varies,
            typically up to 4 messages per month, and may increase if you are
            actively engaging in a conversation. Message and data rates may
            apply.
          </p>
        </section>

        <section>
          <h2>SMS Opt-In and Opt-Out</h2>
          <p>
            You opt in by submitting a form that includes an unchecked consent
            checkbox (or an equivalent clear consent method). Consent is not a
            condition of purchase. You can opt out at any time by replying STOP.
            For help, reply HELP.
          </p>
        </section>

        <section>
          <h2>Mobile Information Sharing Statement</h2>
          <p>
            Mobile information (including phone numbers) will not be shared with
            third parties or affiliates for marketing or promotional purposes.
            SMS opt-in consent and phone numbers collected for SMS are not
            shared with any third parties except service providers who help us
            deliver text messages (for example, messaging platform providers),
            and only for that delivery purpose.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information such as name, email address,
            phone number, business name, and any information you submit through
            forms or communications with us. We may also collect technical
            information such as IP address, device information, browser type,
            pages viewed, and approximate location derived from IP address.
          </p>
        </section>

        <section>
          <h2>How We Use Information</h2>
          <p>
            We use information to respond to inquiries, provide and improve
            services, schedule appointments, send requested information, send
            marketing communications to opted-in contacts, and for analytics,
            security, and compliance.
          </p>
        </section>

        <section>
          <h2>Cookies and Tracking</h2>
          <p>
            We may use cookies and similar technologies to operate our website,
            understand usage, and improve performance and marketing. You can
            control cookies through your browser settings and, where available,
            on-site cookie controls.
          </p>
        </section>

        <section>
          <h2>Data Security and Handling</h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards
            designed to protect information. No method of transmission or
            storage is completely secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section>
          <h2>Your Rights and Choices</h2>
          <p>
            You may request access, correction, or deletion of your personal
            information, subject to legal limits. You may opt out of marketing
            emails using the unsubscribe link. You may opt out of SMS at any
            time by replying STOP. To request help with your data, contact us
            using the information below.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>Dotoli Digital LLC</p>
          <p>[Your business address]</p>
          <p>[Support email]</p>
          <p>[Support phone]</p>
          <p>
            Important: Do not guess your address/email/phone. Put the real ones
            you use.
          </p>
        </section>
      </article>

      <BannerSection title={"Built On Strategy. Backed By Results."} />
      <Footer />
    </>
  );
}

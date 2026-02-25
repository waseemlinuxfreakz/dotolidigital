"use client";
import { useState } from "react";
import PopupForm from "../components/PopupForm";
import { BannerSection } from "../components/BannerSection";
import Footer from "../components/Footer";
import { HeroAllSection } from "../components/HeroAllSection";
import { JungleSection } from "../components/JungleSection";

import { TeamMemberSection } from "../components/TeamMemberSection";
import { TextCounterSection } from "../components/TextCounterSection";
export default function page() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      <HeroAllSection
        title1={"Terms and Conditions"}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
        id={"team-hero"}
      />

      <div id="team-hero"></div>
      <article className="max-w-4xl mx-auto p-8 bg-white shadow-sm rounded-lg prose lg:prose-lg content-section-terms">
        <p className="mt-2 text-sm text-gray-600">
          Last updated: February 14, 2022
        </p>

        <section>
          <h2>SMS Terms</h2>

          <p>
            Dotoli Digital LLC offers an SMS messaging program for marketing and
            sales communications related to digital marketing services and lead
            generation.
          </p>

          <h3>Consent</h3>
          <p>
            By submitting your phone number and opting in, you agree to receive
            SMS messages from Dotoli Digital LLC. Consent is not a condition of
            purchase.
          </p>

          <h3>Message Frequency</h3>
          <p>
            Message frequency varies, typically up to 4 messages per month, and
            may increase if you are actively engaging in a conversation.
          </p>

          <h3>Message and Data Rates</h3>
          <p>Message and data rates may apply.</p>

          <h3>Opt-Out and Help</h3>
          <p>
            Reply <strong>STOP</strong> to opt out at any time. Reply{" "}
            <strong>HELP</strong> for help.
          </p>

          <h3>Customer Support Contact</h3>
          <p>For support, contact:</p>
          <p>
            Email:{" "}
            <a href="mailto:info@dotolidigital.com" className="underline">
              info@dotolidigital.com
            </a>
          </p>
          <p>Phone: [Support phone]</p>

          <h3>Carrier Liability Disclaimer</h3>
          <p>Carriers are not liable for delayed or undelivered messages.</p>

          <h3>Age Restriction</h3>
          <p>
            You must be 18 years or older to opt in to receive SMS messages.
          </p>

          <h3>Privacy Policy</h3>
          <p>
            Your use of the SMS program is also governed by our Privacy Policy:{" "}
            <a
              href="https://www.dotolidigital.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://www.dotolidigital.com/privacy-policy/
            </a>
          </p>
        </section>
      </article>

      {/* <JungleSection
        title1={"we're hiring"}
        title2={"talented marketers"}
        title3={"& creators"}
        description={`Passionate about SEO, storytelling, <br/>or digital content? We’d love to hear from you.`}
        btn_text={"Meet the Team"}
        btn_link={"/about"}
      /> */}

      <BannerSection title={"Built On Strategy. Backed By Results."} />
      <Footer />
    </>
  );
}

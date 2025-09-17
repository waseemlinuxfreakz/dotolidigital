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
        title1={"Privacy Policy"}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
        id={"team-hero"}
      />

      <div id="team-hero"></div>
      
      <article className="max-w-4xl mx-auto p-8 bg-white shadow-sm rounded-lg prose lg:prose-lg">
        <header>
            <h1 className="text-3xl font-semibold">Privacy Policy</h1>
            <p className="mt-2 text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </header>


        <section>
        <p>
            At <strong>{companyName}</strong> ("Company", "we", "us", "our"), we respect your privacy and are
            committed to protecting it through our compliance with this policy.
        </p>
        </section>


        <section>
            <h2>Information We Collect About You</h2>
        <p>
            We collect several types of information about visitors and/or users of our Services. We may collect this
            information either directly when you provide it to us or automatically as you navigate through the
            Websites or App.
        </p>
        </section>


        <section>
            <h2>How We Use Your Information</h2>
        <p>
            We use information that we collect about you or that you provide to us, including any personal information,
            in the following ways:
        </p>
        <ul>
            <li>To present our Websites and their contents to you.</li>
            <li>To provide you with information, products or services that you request from us.</li>
            <li>To fulfill any other purpose for which you provide it.</li>
        </ul>
        </section>


        <section>
        <h2>Disclosure of Your Information</h2>
        <p>
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This
            does not include trusted third parties who assist us in operating our website, conducting our business, or
            servicing you, so long as those parties agree to keep this information confidential.
        </p>
        </section>


        <section>
        <h2>Data Security</h2>
        <p>
            We have implemented measures designed to secure your personal information from accidental loss and from
            unauthorized access, use, alteration and disclosure.
        </p>
        </section>


        <section>
        <h2>Changes to Our Privacy Policy</h2>
        <p>
        It is our policy to post any changes we make to our privacy policy on this page. If we significantly change
        our privacy policy, we will notify you through a notice on the Websites’ home page.
        </p>
        <p>
        We encourage you to periodically review this page for the latest information on our privacy practices. If you
        have any questions about this Privacy Policy, you can get in touch with us via the contact information
        provided on our website.
        </p>
        </section>


        <footer className="mt-6 border-t pt-4 text-sm text-gray-600">
        <p>
        For questions or concerns about this policy, please contact us at:
        </p>
        <p className="mt-2">Email: <a href="mailto:info@dotolidigital.com" className="underline">info@dotolidigital.com</a></p>
        </footer>
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

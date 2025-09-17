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
      <article className="max-w-4xl mx-auto p-8 bg-white shadow-sm rounded-lg prose lg:prose-lg">
<header>
<h1 className="text-3xl font-semibold">Terms and Conditions</h1>
<p className="mt-2 text-sm text-gray-600">Last updated: February 14, 2022</p>
</header>


<section>
<p>
Please read these Terms of Use ("Terms", "Terms of Use") carefully before using the  website (the
"Service") operated by <strong>Dotoli Digital </strong> ("us", "we", or "our").
</p>


<p>
Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
These Terms apply to all visitors, users and others who access or use the Service.
</p>


<p>
By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the
terms then you may not access the Service.
</p>
</section>


<section>
<h2>Accounts</h2>
<p>
When you create an account with us, you must provide us information that is accurate, complete, and current at
all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your
account on our Service.
</p>


<p>
You are responsible for safeguarding the password that you use to access the Service and for any activities or
actions under your password, whether your password is with our Service or a third-party service.
</p>


<p>
You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware
of any breach of security or unauthorized use of your account.
</p>
</section>


<section>
<h2>Links To Other Web Sites</h2>
<p>
Our Service may contain links to third-party web sites or services that are not owned or controlled by Dotoli Digital.
</p>


<p>
Dotoli Digital has no control over, and assumes no responsibility for, the content, privacy policies, or
practices of any third party web sites or services. You further acknowledge and agree that Dotoli Digital shall
not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by
or in connection with use of or reliance on any such content, goods or services available on or through any such
web sites or services.
</p>


<p>
We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or
services that you visit.
</p>
</section>


<section>
<h2>Disclaimer</h2>
<p>
Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis.
The Service is provided without warranties of any kind, whether express or implied, including, but not limited
to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of
performance.
</p>
</section>


<section>
<h2>Governing Law</h2>
<p>
These Terms shall be governed and construed in accordance with the laws of United States without regard to its
conflict of law provisions.
</p>


<p>
Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If
any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these
Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and
supersede and replace any prior agreements we might have between us regarding the Service.
</p>
</section>


<section>
<h2>Changes</h2>
<p>
We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a
material change will be determined at our sole discretion.
</p>


<p>
By continuing to access or use our Service after those revisions become effective, you agree to be bound by the
revised terms. If you do not agree to the new terms, please stop using the Service.
</p>
</section>


<section>
<h2>Contact Us</h2>
<p>
If you have any questions about these Terms, please contact us at:
</p>
<p className="mt-2">Email: <a href="mailto:info@dotolidigital.com" className="underline">info@dotolidigital.com</a></p>
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

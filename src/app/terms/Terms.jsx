"use client";

import { useState } from "react";
import PopupForm from "../components/PopupForm";
import { BannerSection } from "../components/BannerSection";
import Footer from "../components/Footer";
import { HeroAllSection } from "../components/HeroAllSection";
import "./terms.css";

export default function Terms() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroAllSection
        title1={"Terms & Conditions"}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
        id={"team-hero"}
      />

      <section className="terms-policy-section">
        <div className="terms-policy-container">
          <div className="terms-policy-card">
            <div className="terms-policy-header">
              <p className="terms-policy-company">Dotoli Digital LLC</p>
              <h1 className="terms-policy-title">Terms & Conditions</h1>
              <p className="terms-policy-date">Effective Date: Jan 1st, 2026</p>
            </div>

            <div className="terms-policy-content">
              <section className="terms-block terms-notice">
                <h2>SMS Messaging Terms &amp; Compliance</h2>

                <div className="terms-sub-block">
                  <h3>1. Program Description</h3>
                  <p>
                    This messaging program sends marketing, transactional, and
                    follow-up messages to service business owners and operators
                    who have explicitly opted in via our website at
                    dotolidigital.com/contact-us. Messages include follow-up
                    after an inquiry, qualification questions, appointment
                    scheduling, service and pricing information, and promotional
                    offers. Message frequency is 2–4 messages per month, with
                    additional messages only when a recipient is actively
                    engaging in a conversation.
                  </p>
                </div>

                <div className="terms-sub-block">
                  <h3>2. Cancellation Instructions</h3>
                  <p>
                    You can cancel the SMS service at any time. Simply text
                    "STOP" to the same number that sent you messages. Upon
                    sending "STOP," we will confirm your unsubscribe status via
                    SMS. Following this confirmation, you will no longer receive
                    SMS messages from us. To rejoin, sign up as you did
                    initially, and we will resume sending SMS messages to you.
                  </p>
                </div>

                <div className="terms-sub-block">
                  <h3>3. Support Information</h3>
                  <p>
                    If you experience issues with the messaging program, reply
                    with the keyword "HELP" for more assistance, or reach out
                    directly to{" "}
                    <a href="mailto:sales@dotolidigital.com">
                      sales@dotolidigital.com
                    </a>{" "}
                    or call <a href="tel:+19543838093">+1 (954) 383-8093</a>{" "}
                    during business hours.
                  </p>
                </div>

                <div className="terms-sub-block">
                  <h3>4. Carrier Liability</h3>
                  <p>
                    Carriers are not liable for delayed or undelivered messages.
                  </p>
                </div>

                <div className="terms-sub-block">
                  <h3>5. Message &amp; Data Rates</h3>
                  <p>
                    Message and data rates may apply for messages sent to you
                    from us and to us from you. Message frequency varies based
                    on your service usage and level of engagement. For questions
                    about your text plan or data plan, contact your wireless
                    provider.
                  </p>
                </div>

                <div className="terms-sub-block">
                  <h3>6. Supported Carriers</h3>
                  <p>
                    Our SMS program works with all major U.S. wireless carriers,
                    including AT&amp;T, T-Mobile, Verizon, Sprint, and most
                    regional carriers.
                  </p>
                </div>

                <div className="terms-sub-block">
                  <h3>7. Age Restriction</h3>
                  <p>
                    You must be 18 years or older to participate in our SMS
                    program.
                  </p>
                </div>

                <div className="terms-sub-block">
                  <h3>8. Privacy Policy</h3>
                  <p>
                    For privacy-related inquiries, please refer to our Privacy
                    Policy at{" "}
                    <a
                      href="https://dotolidigital.com/privacy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      dotolidigital.com/privacy
                    </a>
                  </p>
                </div>

                <p>
                  We comply with all applicable laws and regulations, including
                  the Telephone Consumer Protection Act (TCPA) and CTIA
                  guidelines, regarding the use of SMS communications.
                </p>
              </section>

              <section className="terms-block">
                <h2>General Terms</h2>
                <p>
                  This website (the "Site") is owned and operated by Dotoli
                  Digital LLC ("COMPANY," "we" or "us"). By using the Site, you
                  agree to be bound by these Terms of Service and to use the
                  Site in accordance with these Terms of Service, our Privacy
                  Policy, and any additional terms and conditions that may apply
                  to specific sections of the Site or to products and services
                  available through the Site or from Dotoli Digital LLC.
                </p>
                <p>
                  Accessing the Site, in any manner, whether automated or
                  otherwise, constitutes use of the Site and your agreement to
                  be bound by these Terms of Service.
                </p>
                <p>
                  We reserve the right to change these Terms of Service or to
                  impose new conditions on the use of the Site from time to
                  time, in which case we will post the revised Terms of Service
                  on this website. By continuing to use the Site after we post
                  any such changes, you accept the Terms of Service, as
                  modified.
                </p>
              </section>

              <section className="terms-block">
                <h2>Intellectual Property Rights</h2>

                <div className="terms-sub-block">
                  <h3>Our Limited License to You</h3>
                  <p>
                    This Site and all the materials available on the Site are
                    the property of Dotoli Digital LLC and/or our affiliates or
                    licensors and are protected by copyright, trademark, and
                    other intellectual property laws. The Site is provided
                    solely for your personal non-commercial use.
                  </p>
                  <p>
                    You may not use the Site or the materials available on the
                    Site in a manner that constitutes an infringement of our
                    rights or that has not been authorized by us. Unless
                    explicitly authorized, you may not modify, copy, reproduce,
                    republish, upload, post, transmit, translate, sell, create
                    derivative works, exploit, or distribute in any manner or
                    medium any material from the Site. However, you may download
                    and/or print one copy of individual pages for your personal,
                    non-commercial use, provided that you keep intact all
                    copyright and other proprietary notices.
                  </p>
                </div>

                <div className="terms-sub-block">
                  <h3>Your License to Us</h3>
                  <p>
                    By posting or submitting any material (including comments,
                    blog entries, social media posts, photos, and videos) to us
                    via the Site, internet groups, or other digital venues, you
                    represent that you own the material or have obtained the
                    necessary permissions. You grant us a royalty-free,
                    perpetual, irrevocable, non-exclusive, worldwide license to
                    use, modify, transmit, sell, exploit, create derivative
                    works from, distribute, and publicly perform or display such
                    material.
                  </p>
                </div>
              </section>

              <section className="terms-block">
                <h2>Disclaimers</h2>
                <p>
                  Throughout the Site, we may provide links and pointers to
                  Internet sites maintained by third parties. Our linking to
                  such third-party sites does not imply an endorsement or
                  sponsorship of such sites or the information, products, or
                  services offered on or through the sites.
                </p>
                <p>
                  The information, products, and services offered on or through
                  the Site are provided "as is" and without warranties of any
                  kind, either express or implied. To the fullest extent
                  permissible pursuant to applicable law, we disclaim all
                  warranties, including implied warranties of merchantability
                  and fitness for a particular purpose.
                </p>
                <p>
                  You agree at all times to indemnify and hold harmless Dotoli
                  Digital LLC, its affiliates, and their respective officers,
                  directors, agents, and employees from any claims, causes of
                  action, damages, liabilities, costs, and expenses arising out
                  of or related to your breach of any obligation, warranty, or
                  representation under these Terms of Service.
                </p>
              </section>

              <section className="terms-block">
                <h2>Online Commerce</h2>
                <p>
                  Certain sections of the Site may allow you to purchase
                  products and services from third-party vendors. We are not
                  responsible for the quality, accuracy, timeliness,
                  reliability, or any other aspect of these products and
                  services. If you make a purchase from a third party linked
                  through the Site, the information obtained during your visit,
                  including payment information, may be collected by both the
                  merchant and us.
                </p>
                <p>
                  Your participation in any dealings with third-party vendors is
                  solely between you and the third party. Dotoli Digital LLC
                  shall not be responsible for any loss or damage incurred as a
                  result of such dealings.
                </p>
              </section>

              <section className="terms-block">
                <h2>Registration &amp; Passwords</h2>
                <p>
                  To access certain features of the Site, you may be required to
                  register and create an account. You agree to provide accurate,
                  current, and complete information during the registration
                  process. You are responsible for maintaining the
                  confidentiality of your login credentials and for all
                  activities conducted under your account.
                </p>
                <p>
                  If you suspect unauthorized use of your account, notify us
                  immediately at{" "}
                  <a href="mailto:sales@dotolidigital.com">
                    sales@dotolidigital.com
                  </a>
                  . We are not liable for any loss or damage arising from your
                  failure to comply with this obligation.
                </p>
              </section>

              <section className="terms-block">
                <h2>Termination</h2>
                <p>
                  We reserve the right to terminate or suspend your access to
                  the Site, without notice, if we determine that you have
                  violated these Terms of Service or engaged in conduct that we
                  deem inappropriate or unlawful. Upon termination, you must
                  cease all use of the Site and any content obtained from it.
                </p>
              </section>

              <section className="terms-block">
                <h2>Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in
                  accordance with the laws of the State of Florida, where Dotoli
                  Digital LLC operates. Any dispute arising under these Terms
                  shall be resolved exclusively through binding arbitration in
                  that jurisdiction.
                </p>
              </section>

              <section className="terms-block">
                <h2>Changes to Terms of Service</h2>
                <p>
                  We may update these Terms of Service from time to time. The
                  latest version will always be available on our website with
                  the effective date.
                </p>
                <p>
                  For any questions regarding these Terms of Service, please
                  contact us at:
                </p>

                <div className="contact-box">
                  <p>
                    <strong>Dotoli Digital LLC</strong>
                  </p>
                  <p>
                    Phone: <a href="tel:+19543838093">+1 (954) 383-8093</a>
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:sales@dotolidigital.com">
                      sales@dotolidigital.com
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a
                      href="https://dotolidigital.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      dotolidigital.com
                    </a>
                  </p>
                </div>

                <p>
                  By using our website and services, you consent to these Terms
                  of Service.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <BannerSection title={"Built On Strategy. Backed By Results."} />
      <Footer />
    </>
  );
}
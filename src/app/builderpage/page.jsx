"use client";
import { useRef } from "react";
import { useState } from "react";
import "./builderpage.css";
import LandingPageHeader from "../components/LandingPageHeader/LandingPageHeader";
import Footer from "../components/Footer";
import { FaArrowRight } from "react-icons/fa";
import PopupForm from "../components/PopupForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BuilderPage() {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.utils.toArray(".gsap-fade-up").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  const menu = [
    { label: "The System", href: "#the-system" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Operator path", href: "#operator-path" },
    { label: "Contact", href: "/contact-us" },
  ];
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      <div ref={containerRef}>
        <LandingPageHeader
          navLinks={menu}
          ctaText="Book a call"
          onBtnClick={() => setShowPopup(true)}
        />

        {/* ───── TOP BAR ───── */}
        <div className="top-notice-bar">
          <div className="container1">
            <div className="notice-flex">
              <strong>Are you growing this to run it, or to sell it?</strong>
              <span className="notice-link">
                Running it for the long haul?{" "}
                <a href="#">Here is how we get your phone ringing.</a>
              </span>
              <span className="notice-divider">/</span>
              <span>
                Building it to sell?{" "}
                <span style={{ color: "#fff" }}>Keep reading.</span>
              </span>
            </div>
          </div>
        </div>

        {/* ───── HERO SECTION ───── */}
        <section
          className="container1 section-padding gsap-fade-up hero-section"
          id="the-system"
        >
          <div className="section-tag">FOR FOUNDERS BUILDING TOWARD A SALE</div>
          <h1 className="hero-title">
            Most founder-run businesses never sell. The ones that do stopped
            depending on the <span className="cyan-text">founder.</span>
          </h1>
          <p className="hero-subtitle">
            If you are building this to sell it one day, the biggest thing a
            buyer discounts is you: revenue that runs on your name, your
            relationships, and your hustle. Dotoli Digital builds a
            customer-acquisition channel that runs without you, owned channels
            that survive due diligence, and a documented system a new owner can
            step into.
          </p>
          <button className="btn-primary">
            Book a Sellable-Asset strategy call <FaArrowRight />
          </button>
        </section>

        {/* ───── PROBLEM SECTION ───── */}
        <section
          className="container1 section-padding gsap-fade-up problem-section"
          id="operator-path"
        >
          <div className="section-tag">THE PROBLEM</div>
          <h2 className="section-title">
            A business that only grows when you show up is hard to sell.
          </h2>
          <p className="section-desc">
            Buyers look at revenue built on the founder's relationships and
            referrals and they discount it, because the day you leave, it leaves
            with you. The fix is not working harder. It is building growth that
            does not have your name on it.
          </p>
        </section>

        {/* ───── WHAT WE BUILD ───── */}
        <section className="container1 section-padding gsap-fade-up builder-section">
          <div className="section-tag">WHAT WE BUILD</div>
          <h2 className="section-title">
            Three things a buyer actually pays for.
          </h2>

          <div className="builder-grid">
            <div className="shell">
              <div className="system-card">
                <span className="system-card-step">CHANNEL</span>
                <h3>Acquisition that runs without you</h3>
                <p>
                  A predictable, productized customer-acquisition channel that
                  does not depend on your personal network. The single biggest
                  cap on a founder-run valuation, removed.
                </p>
              </div>
            </div>
            <div className="shell">
              <div className="system-card">
                <span className="system-card-step">OWNERSHIP</span>
                <h3>Channels that survive diligence</h3>
                <p>
                  Owned audiences, data, and pipeline a buyer can verify and
                  keep, not rented access that disappears.
                </p>
              </div>
            </div>
            <div className="shell">
              <div className="system-card">
                <span className="system-card-step">SYSTEM</span>
                <h3>A documented, transferable system</h3>
                <p>
                  The offer, funnel, creative cadence, and scoreboard written
                  down so a new owner can run it from day one.
                </p>
              </div>
            </div>
          </div>

          <div className="disclaimer-box gsap-fade-up">
            <div className="disclaimer-content">
              <span className="system-card-step" style={{ fontSize: "10px" }}>
                WHAT WE DO NOT CLAIM
              </span>
              <p
                className="section-desc"
                style={{ maxWidth: "100%", marginTop: "15px" }}
              >
                We do not promise a valuation or a multiple. No one honest can.
                We remove one of the biggest things that caps a founder-run
                multiple, your business depending on you, and we bring in the
                right partners for the rest of the sellability stack. We own one
                input, and we are straight about that.
              </p>
            </div>
          </div>
        </section>

        {/* ───── HOW IT WORKS ───── */}
        <section
          className="container1 section-padding gsap-fade-up how-it-works-section"
          id="how-it-works"
        >
          <div className="section-tag">HOW IT WORKS</div>
          <h2 className="section-title">Prove it, build it, partner.</h2>

          <div className="builder-grid">
            <div className="shell">
              <div className="system-card">
                <div className="wrap-step">
                  <div className="step-circle">1</div>
                  <span className="system-card-step">PROVE IT</span>
                </div>
                <h3>The 30-Day Traction Pilot</h3>
                <p>
                  The same proof-first entry as everyone. We show the channel
                  works before any bigger commitment.
                </p>
              </div>
            </div>
            <div className="shell">
              <div className="system-card">
                <div className="wrap-step">
                  <div className="step-circle">2</div>
                  <span className="system-card-step">BUILD IT</span>
                </div>
                <h3>The install</h3>
                <p>
                  A milestone-gated install of the full acquisition system,
                  documented as we go.
                </p>
              </div>
            </div>
            <div className="shell">
              <div className="system-card">
                <div className="wrap-step">
                  <div className="step-circle">3</div>
                </div>
                <span className="system-card-step">PARTNER</span>
                <h3>Sellable-Asset Partner</h3>
                <p>
                  An ongoing engagement to run, scale, and harden the system
                  into a buyer-ready asset. Limited capacity, by application.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───── WHO IT IS FOR ───── */}
        <section className="container1 section-padding gsap-fade-up who-it-is-for-section">
          <div className="shell">
            <div className="who-it-is-for-card">
              <div className="section-tag" style={{ margin: "0 auto 20px" }}>
                WHO IT IS FOR
              </div>
              <p>
                Founders with a real exit horizon who want the business to be
                worth more without them in it. If you have no plan to sell and
                just want more customers, the{" "}
                <span className="cyan-text" style={{ cursor: "pointer" }}>
                  operator path
                </span>{" "}
                is the better fit.
              </p>
            </div>
          </div>
        </section>

        {/* ───── FINAL CTA ───── */}
        <section
          className="container1 section-padding gsap-fade-up cta-section"
          style={{ textAlign: "center" }}
        >
          <div className="section-tag" style={{ margin: "0 auto 20px" }}>
            START HERE
          </div>
          <h2 className="hero-title">
            Build something a buyer will actually pay for.
          </h2>
          <button className="btn-primary" style={{ marginTop: "20px" }}>
            Book a Sellable-Asset strategy call <FaArrowRight />
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
}

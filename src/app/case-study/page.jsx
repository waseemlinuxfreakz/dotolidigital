"use client";
import React, { useRef } from "react";
import "./case-study.css";
import { useState } from "react";
import LandingPageHeader from "../components/LandingPageHeader/LandingPageHeader";
import PopupForm from "../components/PopupForm";
import Footer from "../components/Footer";
import CarouselVideo from "../components/CarouselVideo/CarouselVideo"; // Ensure Path is correct
import Link from "next/link";

import { FaPlay, FaArrowRight } from "react-icons/fa";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CaseStudiesPage() {
  const containerRef = useRef();

  // GSAP Scroll Animation
  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".gsap-fade-up");

      elements.forEach((el) => {
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

  const homeMenu = [
    { label: "Work", href: "#reel" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Results", href: "#results" },
    { label: "Contact", href: "/contact-us" },
  ];
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      <LandingPageHeader
        navLinks={homeMenu}
        ctaText="Book a Call"
        onBtnClick={() => setShowPopup(true)}
      />

      <div ref={containerRef} className="case-study-page">
        {/* ───── HERO SECTION ───── */}
        <section className="container1 gsap-fade-up">
          <div className="section-tag">SELECTED WORK</div>
          <h1 className="hero-title">
            Marketing that
            <br />
            prints customers,
            <br />
            not impressions.
          </h1>
          <p className="hero-subtitle">
            The films we produce and the numbers we move for the businesses we
            partner with. Watch the work, then read exactly what it did for
            revenue.
          </p>

          <div
            className="hero-buttons"
            style={{ display: "flex", gap: "15px" }}
          >
            <Link href={"#reel"} className="btn-primary">
              Watch the Reel
              <span className="ic">
                <FaPlay
                  style={{ width: "10px", height: "10px", marginLeft: "2px" }}
                />
              </span>
            </Link>
            <Link href={"#results"} className="btn-outline">
              See the Results
            </Link>
          </div>
        </section>

        {/* ───── TOP STATS ROW ───── */}
        <section className="container1 gsap-fade-up">
          <div className="stats-top-row">
            <div className="stat-card-small">
              <div className="val">28.4x</div>
              <div className="label">Best client return on ad spend</div>
            </div>
            <div className="stat-card-small">
              <div className="val">19x</div>
              <div className="label">Peak organic click growth in a year</div>
            </div>
            <div className="stat-card-small">
              <div className="val">$2.27M</div>
              <div className="label">
                Pipeline traced in 60 days, one client
              </div>
            </div>
            <div className="stat-card-small">
              <div className="val">5.77x</div>
              <div className="label">ROAS rebuilt on a stalled account</div>
            </div>
          </div>
        </section>

        {/* ───── THE REEL (SEPARATE COMPONENT) ───── */}
        <section className="gsap-fade-up" id="reel">
          <CarouselVideo />
        </section>

        {/* ───── CASE STUDIES ───── */}
        <section className="container1 gsap-fade-up" id="case-studies">
          <div className="section-tag">CASE STUDIES</div>
          <h2 className="section-title">Work you can measure.</h2>
          <p className="section-desc">
            Every engagement is built around one number that matters to the
            business. Three clients, three different goals, real figures from
            Meta Ads Manager, Google Search Console and client revenue.
          </p>

          <div className="case-studies-wrap">
            {/* Case Study 1 */}
            <div className="shell">
              <div className="cs-compact">
                <div className="cs-compact-wrapper">
                  <div className="section-tag">
                    KITCHEN REMODELING • MIAMI, FL
                  </div>
                  <div className="cs-compact-top">
                    <div className="cs-top-left">
                      <h3>Florida Kitchen Contractors</h3>
                      <div className="cs-big-numbers">
                        $10,217 in.
                        <br />
                        <span>$290,000 out.</span>
                      </div>
                    </div>
                    <div className="cs-top-right">
                      <p>
                        One audience, one offer, one creative engine. Over 6.5
                        months we turned word-of-mouth chaos into a predictable
                        booking system, with a direct-response video built on
                        real kitchens, real before-and-afters and a real crew.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="cs-stats-row">
                  <div className="cs-stat-item">
                    <div className="val">36.1%</div>
                    <div className="label">Hook rate, vs 25% benchmark</div>
                  </div>
                  <div className="cs-stat-item">
                    <div className="val">153K</div>
                    <div className="label">Miami-Dade impressions</div>
                  </div>
                  <div className="cs-stat-item">
                    <div className="val">$928</div>
                    <div className="label">Cost per closed remodel</div>
                  </div>
                  <div className="cs-stat-item">
                    <div className="val">$290K</div>
                    <div className="label">Revenue booked</div>
                  </div>
                </div>

                <div className="cs-quote">
                  "This is actually working and I'm so overwhelmed and happy at
                  the same time. We have so much motion going, I'm so freaking
                  ecstatic."
                  <span className="cs-quote-author">
                    Owner, Florida Kitchen Contractors
                  </span>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="shell gsap-fade-up">
              <div className="cs-compact">
                <div className="cs-compact-wrapper">
                  <div className="section-tag">DEMOLITION • SOUTH FLORIDA</div>
                  <div className="cs-compact-top">
                    <div className="cs-top-left">
                      <h3>Florida Demolition Experts</h3>
                      <div className="cs-big-numbers">
                        From 19 clicks
                        <br />a month{" "}
                        <span>
                          to
                          <br />a 19x year.
                        </span>
                      </div>
                    </div>
                    <div className="cs-top-right">
                      <p>
                        A technical and content overhaul rebuilt the site around
                        the searches that drive demolition jobs, while paid ads
                        filled the pipeline in parallel. Organic clicks climbed
                        from 19 a month to a 362 peak, with 58 quotes worth
                        $2.27M issued in 60 days.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="cs-stats-row">
                  <div className="cs-stat-item">
                    <div className="val">19x</div>
                    <div className="label">Google clicks YoY</div>
                  </div>
                  <div className="cs-stat-item">
                    <div className="val">2,324</div>
                    <div className="label">Ranking keywords, up 9x</div>
                  </div>
                  <div className="cs-stat-item">
                    <div className="val">$238K</div>
                    <div className="label">Pipeline traced to ads + calls</div>
                  </div>
                  <div className="cs-stat-item">
                    <div className="val">35</div>
                    <div className="label">Tracked calls in 30 days</div>
                  </div>
                </div>

                <div className="cs-quote">
                  "19x more Google clicks year over year, 17 keywords at
                  position one, and 58 quotes worth $2.27M in 60 days. One
                  technical fix and two new pages push organic past 800 monthly
                  visits in 90 days."
                  <span className="cs-quote-author">
                    From the June 2026 Performance Review
                  </span>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="shell gsap-fade-up">
              <div className="cs-compact">
                <div className="cs-compact-wrapper">
                  <div className="section-tag">WELLNESS • BROOKSHIRE, TX</div>
                  <div className="cs-compact-top">
                    <div className="cs-top-left">
                      <h3>
                        ROSE Therapeutic Farm <span>& Goat Yoga</span>
                      </h3>
                      <div className="cs-big-numbers">
                        30 days to
                        <br />a <span>4x year.</span>
                      </div>
                    </div>
                    <div className="cs-top-right">
                      <p>
                        A 12-month client with a stalled ad account. Five moves,
                        no new offers and no bigger budgets, rebuilt it into a
                        5.77x ROAS engine. Same staff, same farm, same offers,
                        going from $15K to $49K per month. We just got out of
                        the way of the customer.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="cs-stats-row">
                  <div className="cs-stat-item">
                    <div className="val">5.77x</div>
                    <div className="label">Average ROAS</div>
                  </div>
                  <div className="cs-stat-item">
                    <div className="val">+107%</div>
                    <div className="label">Purchases</div>
                  </div>
                  <div className="cs-stat-item">
                    <div className="val">-40%</div>
                    <div className="label">Cost per purchase</div>
                  </div>
                  <div className="cs-stat-item">
                    <div className="val">4x</div>
                    <div className="label">Revenue, same farm</div>
                  </div>
                </div>

                <div className="cs-quote">
                  "$15K a month a year ago. $49K a month now. Four times the
                  revenue, same farm. Purchases doubled and ROAS climbed, with
                  the same staff and the same offers."
                  <span className="cs-quote-author">
                    ROSE Therapeutic Farm, 30-Day Review
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── MARQUEE ───── */}
        <div className="marquee-container">
          <div className="marquee-content">
            <span>FLORIDA DEMOLITION EXPERTS</span>
            <span>FLORIDA KITCHEN CONTRACTORS</span>
            <span>ROSE THERAPEUTIC FARM</span>
            <span>FLORIDA DEMOLITION EXPERTS</span>
            <span>FLORIDA KITCHEN CONTRACTORS</span>
            <span>ROSE THERAPEUTIC FARM</span>
          </div>
        </div>

        {/* ───── FINAL CTA ───── */}
        <section className="container1 final-cta gsap-fade-up" id="results">
          <div className="section-tag no-dot sm-new">
            <span style={{ color: "var(--accent-cyan)", marginRight: "6px" }}>
              ●
            </span>{" "}
            Taking a limited number of new pilots this quarter
          </div>
          <div
            className="section-tag no-dot"
            style={{ marginTop: "-10px", marginBottom: "30px" }}
          >
            {" "}
            <span style={{ color: "var(--accent-cyan)", marginRight: "6px" }}>
              ●
            </span>{" "}
            START A PROJECT
          </div>
          <h2>
            Let us build the work
            <br />
            that moves your
            <br />
            number.
          </h2>
          <p>
            Tell us the goal. In 20 minutes we will tell you whether we can hit
            it, and exactly
            <br />
            how. If we can't, we will tell you that too.
          </p>

          <div className="cta-buttons">
            <button className="btn-primary" style={{ padding: "16px 26px" }}>
              Book the 20-Minute Call{" "}
              <span className="ic" style={{ marginLeft: "6px" }}>
                <FaArrowRight style={{ width: "12px", height: "12px" }} />
              </span>
            </button>
            <button className="btn-outline">Visit dotolidigital.com</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

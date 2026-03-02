import React from "react";
import Link from "next/link";

export default function WhyChooseSection({ onCtaClick }) {
  return (
    <>
      <section className="whychoose-sec">
        <div className="container-w1">
          <div className="whychoose-grid">
            {/* LEFT SIDE */}
            <div className="whychoose-left">
              <div className="whychoose-pill">
                <span className="whychoose-dot" />
                Performance marketing, built as a system
              </div>

              <h2 className="title-4 whychoose-title">
                Why businesses choose <span>Dotoli Digital</span> for
                Performance Marketing
              </h2>

              <p className="text-1 whychoose-sub">
                Businesses choose Dotoli Digital because we treat performance
                marketing as a system, not a set of ads.
              </p>

              <div className="btn-group whychoose-cta">
                <div className="btn btn--pulse">
                  <button
                    type="button"
                    className="btn-elem"
                    onClick={onCtaClick}
                  >
                    Book a Free Strategy Call
                  </button>
                </div>
              </div>

              {/* small proof row */}
              <div className="whychoose-mini">
                <div className="whychoose-mini-card">
                  <p className="k">Data</p>
                  <p className="v">Transparent reporting</p>
                </div>
                <div className="whychoose-mini-card">
                  <p className="k">Focus</p>
                  <p className="v">Conversions first</p>
                </div>
                <div className="whychoose-mini-card">
                  <p className="k">System</p>
                  <p className="v">SEO + CRO + automation</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="whychoose-right">
              <div className="whychoose-cards">
                <div className="whychoose-card">
                  <div className="icon" />
                  <div className="txt">
                    <h3>Data-driven and transparent</h3>
                    <p>
                      Clear KPIs, clean attribution, and reporting you can
                      trust—no guesswork.
                    </p>
                  </div>
                </div>

                <div className="whychoose-card">
                  <div className="icon" />
                  <div className="txt">
                    <h3>Focused on conversions</h3>
                    <p>
                      We optimize for leads, sales, and pipeline—not vanity
                      metrics.
                    </p>
                  </div>
                </div>

                <div className="whychoose-card">
                  <div className="icon" />
                  <div className="txt">
                    <h3>Integrated with SEO, CRO, and automation</h3>
                    <p>
                      Paid + landing pages + lifecycle follow-up, built as one
                      growth system.
                    </p>
                  </div>
                </div>

                <div className="whychoose-card">
                  <div className="icon" />
                  <div className="txt">
                    <h3>Continuously optimized</h3>
                    <p>
                      Continuous testing and iteration to keep up with changing
                      algorithms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="whychoose-outcome">
                <p>
                  <strong>Outcome:</strong> We build performance marketing
                  engines that improve over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

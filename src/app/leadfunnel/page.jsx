"use client";
import { useState, useRef } from "react";
import Footer from "../components/Footer";
import "./leadfunnel.css";

// Icons
import { FaArrowRight, FaCheck, FaTimes, FaPlus } from "react-icons/fa";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Page() {
  const [activeFaq, setActiveFaq] = useState(null);
  const containerRef = useRef();

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

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
              start: "top 85%", // Trigger when top of element hits 85% of viewport
              toggleActions: "play none none none",
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef}>
      {/* ───── HERO SECTION ───── */}
      <section className="container1">
        <div className="hero-section gsap-fade-up">
          <h1 className="hero-title">
            Stop renting ads.
            <br />
            <span className="cyan-text">Own the system</span>
            <br />
            that brings you
            <br />
            customers.
          </h1>
          <p className="hero-subtitle">
            We build local service businesses a complete customer-acquisition
            system: the offer, the funnel, the ads, and a live scoreboard that
            shows exactly what is working. We prove it in 30 days, before you
            sign anything.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">
              Book my 30-Day Traction Pilot{" "}
              <span class="ic">
                <FaArrowRight />
              </span>
            </button>
            <button className="btn-outline">See how the system works</button>
          </div>

          <div className="hero-stats">
            <div className="flex-row">
              <div className="coll">
                <span class="d"></span>
                <div>
                  <span className="cyan-text">$10,217 in. $290,000 out.</span>{" "}
                  for a Miami kitchen remodeler
                </div>
              </div>
              <div className="coll">
                <span class="d"></span>
                <div>
                  <span className="cyan-text">$402K in demolition work</span> on
                  about $6,000 of ad spend
                </div>
              </div>
            </div>

            <div className="text t1">
              Real client numbers, pulled from their own ad accounts.
            </div>
            <div className="text t2">
              <span class="d"></span>
              Marketing operators since 2009. Florida based, serving clients
              nationwide.
            </div>
          </div>
        </div>
      </section>

      {/* ───── MARQUEE ───── */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>CONTRACTORS</span>
          <span>MED SPA</span>
          <span>MOVING</span>
          <span>HOME SERVICES</span>
          <span>AUTOMOTIVE</span>
          <span>CONTRACTORS</span>
          <span>MED SPA</span>
          <span>MOVING</span>
          <span>HOME SERVICES</span>
          <span>AUTOMOTIVE</span>
        </div>
      </div>

      {/* ───── PROBLEM SECTION ───── */}
      <section className="container1 section-padding gsap-fade-up">
        <div className="section-tag">THE PROBLEM</div>
        <h2 className="section-title">
          Most local
          <br />
          businesses grow by
          <br />
          luck.
        </h2>
        <p className="section-desc">
          A referral here, a busy season there, a lead source that dries up
          without warning. Your customers come from word of mouth and chance, so
          the quiet months are the ones that keep you up. When the phone slows
          down there is nothing to switch back on, because you are the system.
          That caps how big you can get, and it chains the business to you.
        </p>
        <p className="problem-callout">
          You do not have an ad problem. You have a{" "}
          <span className="cyan-text">no-system problem.</span>
        </p>
      </section>

      {/* ───── SYSTEM SECTION ───── */}
      <section className="container1 section-padding gsap-fade-up">
        <div className="section-tag">THE SYSTEM</div>
        <h2 className="section-title">
          We do not run ads. We build
          <br />
          the machine.
        </h2>
        <p className="section-desc">
          We know what it feels like to run the whole operation and still wonder
          where the next job comes from. So we build the four parts that turn
          strangers into booked jobs, and we run them for you. Ads are one
          input, not the product.
        </p>

        <div className="system-grid">
          <div className="shell">
            <div className="system-card">
              <span className="system-card-step">01 / THE OFFER</span>
              <h3>An offer that converts strangers</h3>
              <p>
                A sharp entry offer engineered to turn cold prospects into
                booked appointments.
              </p>
            </div>
          </div>

          <div className="shell">
            <div className="system-card">
              <span className="system-card-step">02 / THE FUNNEL</span>
              <h3>A path that stops the leaks</h3>
              <p>
                Landing pages and follow-up that capture every lead instead of
                letting them slip.
              </p>
            </div>
          </div>
          <div className="shell">
            <div className="system-card">
              <span className="system-card-step">03 / THE CREATIVE ENGINE</span>
              <h3>Ads people actually stop for</h3>
              <p>
                A steady stream of ads and content built to make the right
                people call.
              </p>
            </div>
          </div>
          <div className="shell">
            <div className="system-card">
              <span className="system-card-step">04 / THE SCOREBOARD</span>
              <h3>Numbers you can see</h3>
              <p>
                A live view of cost per lead, cost per booked job, leads, and
                where every dollar goes.
              </p>
            </div>
          </div>
        </div>

        <div className="system-callout">
          This is not ad management. We build the whole machine, prove it in 30
          days, then <strong>you</strong> decide. You keep everything we build.
        </div>
      </section>

      {/* ───── PROCESS SECTION ───── */}
      <section className="container1 section-padding gsap-fade-up">
        <div className="section-tag">HOW IT WORKS</div>
        <h2 className="section-title">Prove it first. Scale it second.</h2>

        <div className="process-grid">
          <div className="shell">
            <div className="process-card">
              <span className="system-card-step">STEP 1 / PROVE IT</span>
              <h3 className="process-card-title">The 30-Day Traction Pilot</h3>
              <p className="process-card-desc">
                One offer, one audience, one campaign. We prove we can bring you
                customers at a price that makes sense. Flat fee plus your ad
                spend, which stays on your card and your pixel. Your Decision
                Day is booked for day 30 before we start.
              </p>
            </div>
          </div>

          <div className="shell">
            <div className="process-card">
              <span className="system-card-step">STEP 2 / SCALE IT</span>
              <h3 className="process-card-title">The Traction Engine</h3>
              <p className="process-card-desc">
                Once it works, we run and scale it every month, backed by a
                written cost-per-booked-job target. Stop any time, and you keep
                the system. Most operators never want to.
              </p>
            </div>
          </div>
        </div>

        <div className="timeline-grid">
          <div className="timeline-item">
            <div className="dot"></div>
            <h4>DAY 1</h4>
            <p>
              Book a 20-minute call. We map your offer, audience, and
              Scoreboard.
            </p>
          </div>
          <div className="timeline-item">
            <div className="dot"></div>
            <h4>DAYS 2 TO 7</h4>
            <p>
              We build the offer, the creative, and the funnel, then launch on
              your own ad account.
            </p>
          </div>
          <div className="timeline-item">
            <div className="dot"></div>
            <h4>WEEK 1 ON</h4>
            <p>
              Leads start coming in. You answer the phone. The Scoreboard fills
              in live.
            </p>
          </div>
          <div className="timeline-item">
            <div className="dot"></div>
            <h4>DAY 30</h4>
            <p>
              Decision Day. We read the numbers together and you decide:
              continue, pause, or walk.
            </p>
          </div>
        </div>
      </section>

      {/* ───── PROOF SECTION ───── */}
      <section className="container1 section-padding gsap-fade-up">
        <div className="section-tag">PROOF</div>
        <h2 className="section-title">
          Real operators. Real booked
          <br />
          work.
        </h2>
        <p className="section-desc">
          Two different trades, the same machine. The numbers below come from
          each client's own ad account.
        </p>

        {/* Case Study 1 */}
        <div className="shell space-bottom">
          <div className="case-study">
            <div className="cs-header">
              <div className="cs-main">
                <div className="cs-main-title">
                  Case study • Kitchen remodeling • Miami, FL
                </div>
                <p>
                  Jenny ran a custom kitchen remodeling company on word of mouth
                  alone. Beautiful work, loyal crews, and the same question
                  every month: where is the next job coming from.
                </p>
                <div className="cs-huge-numbers">
                  <span>$10,217</span> in.
                  <br />
                  $290,000 out.
                </div>
                <p style={{ fontSize: "13px" }}>
                  A 28.4x return on ad spend over 6.5 months. Booked, contracted
                  kitchen remodels, not impressions.
                </p>
              </div>
              <div className="cs-sidebar">
                <div className="cs-sidebar-item">
                  <span>Client</span>
                  <span style={{ color: "#fff" }}>
                    Florida Kitchen Contractors
                  </span>
                </div>
                <div className="cs-sidebar-item">
                  <span>Industry</span>
                  <span style={{ color: "#fff" }}>
                    Custom kitchen remodeling
                  </span>
                </div>
                <div className="cs-sidebar-item">
                  <span>Channel</span>
                  <span style={{ color: "#fff" }}>Meta ads</span>
                </div>
                <div className="cs-sidebar-item">
                  <span>Window</span>
                  <span style={{ color: "#fff" }}>Dec 2025 to Jun 2026</span>
                </div>
                <div className="cs-sidebar-item">
                  <span>Ad spend</span>
                  <span style={{ color: "#fff" }}>$10,217</span>
                </div>
                <div className="cs-sidebar-item">
                  <span>Ad account</span>
                  <span style={{ color: "#fff" }}>The client's own</span>
                </div>
              </div>
            </div>

            <div className="cs-details-grid">
              <div className="cs-details-col">
                <h5>BEFORE DOTOLI DIGITAL</h5>
                <ul>
                  <li>Feast or famine, word of mouth only.</li>
                  <li>Boosted posts that spent money with nothing to show.</li>
                  <li>Leads went cold within 48 hours.</li>
                  <li>Crews idle, revenue a guess.</li>
                </ul>
              </div>
              <div className="cs-details-col">
                <h5>WHAT WE BUILT</h5>
                <ul>
                  <li>Direct-response video on her real kitchens and crew.</li>
                  <li>Hyper-focused Miami-Dade targeting.</li>
                  <li>One offer: a free in-home design consult.</li>
                  <li>GoHighLevel instant alert and automated follow-up.</li>
                </ul>
              </div>
            </div>

            <div className="cs-stats-grid">
              <div className="cs-stat-box">
                <div className="cs-stat-val">$290K</div>
                <div className="cs-stat-label">Booked revenue</div>
              </div>
              <div className="cs-stat-box">
                <div className="cs-stat-val">28.4x</div>
                <div className="cs-stat-label">Return on ad spend</div>
              </div>
              <div className="cs-stat-box">
                <div className="cs-stat-val">10+</div>
                <div className="cs-stat-label">Closed remodels</div>
              </div>
              <div className="cs-stat-box">
                <div className="cs-stat-val">$928</div>
                <div className="cs-stat-label">Cost per booked job</div>
              </div>
            </div>

            <div className="cs-testimonial">
              "I'm sorry I'm being emotional but I wanna thank Jared and Khalid
              for coming into our lives. This is actually working and I'm so
              overwhelmed and happy at the same time."
              <div className="cs-testimonial-author">
                Jenny, Owner • Florida Kitchen Contractors
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="shell space-bottom">
          <div className="case-study">
            <div className="cs-header">
              <div className="cs-main">
                <div className="cs-main-title">
                  Case study • Demolition • South Florida
                </div>
                <p>
                  Great crews, a cold pipeline. Most demolition companies do not
                  have a lead problem, they have a follow-up problem: calls go
                  unanswered and leads go cold in hours. We rebuilt the whole
                  chain from click to invoice.
                </p>
                <div className="cs-huge-numbers">
                  <span>~$6,000</span> in.
                  <br />
                  $402,000 out.
                </div>
                <p style={{ fontSize: "13px" }}>
                  Invoiced demolition work over two months, on the client's own
                  Meta and Google accounts. The follow-up system is what turned
                  cheap clicks into booked jobs.
                </p>
              </div>
              <div className="cs-sidebar">
                <div className="cs-sidebar-item">
                  <span>Client</span>
                  <span style={{ color: "#fff" }}>
                    Florida Demolition Experts
                  </span>
                </div>
                <div className="cs-sidebar-item">
                  <span>Industry</span>
                  <span style={{ color: "#fff" }}>Demolition</span>
                </div>
                <div className="cs-sidebar-item">
                  <span>Channels</span>
                  <span style={{ color: "#fff" }}>Meta + Google</span>
                </div>
                <div className="cs-sidebar-item">
                  <span>Window</span>
                  <span style={{ color: "#fff" }}>Dec 2025 to Jan 2026</span>
                </div>
                <div className="cs-sidebar-item">
                  <span>Ad spend</span>
                  <span style={{ color: "#fff" }}>~$6,000</span>
                </div>
                <div className="cs-sidebar-item">
                  <span>Ad account</span>
                  <span style={{ color: "#fff" }}>The client's own</span>
                </div>
              </div>
            </div>

            <div className="cs-details-grid">
              <div className="cs-details-col">
                <h5>BEFORE DOTOLI DIGITAL</h5>
                <ul>
                  <li>Calls went unanswered and forms sat for hours.</li>
                  <li>
                    Ads sent traffic to generic pages with no proof or trust.
                  </li>
                  <li>
                    No pipeline visibility. Which lead became a job was a
                    mystery.
                  </li>
                  <li>
                    No retargeting, so prospects compared 3 to 5 contractors and
                    forgot them.
                  </li>
                </ul>
              </div>
              <div className="cs-details-col">
                <h5>WHAT WE BUILT</h5>
                <ul>
                  <li>
                    A conversion-first website funnel and high-intent Google
                    Search.
                  </li>
                  <li>
                    Meta lead forms plus retargeting, fed by proof-led video.
                  </li>
                  <li>Speed-to-lead automation so no lead goes cold.</li>
                  <li>A CRM pipeline from lead to quote to job to invoice.</li>
                </ul>
              </div>
            </div>

            <div className="cs-stats-grid">
              <div className="cs-stat-box">
                <div className="cs-stat-val">538</div>
                <div className="cs-stat-label">Google conversions</div>
              </div>
              <div className="cs-stat-box">
                <div className="cs-stat-val">$5.77</div>
                <div className="cs-stat-label">Google cost per action</div>
              </div>
              <div className="cs-stat-box">
                <div className="cs-stat-val">237</div>
                <div className="cs-stat-label">Meta leads to date</div>
              </div>
              <div className="cs-stat-box">
                <div className="cs-stat-val">88%</div>
                <div className="cs-stat-label">
                  Top of page, Broward demo searches
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="btn-primary">
          Book my 30-Day Traction Pilot{" "}
          <span className="ic">
            <FaArrowRight />
          </span>
        </button>
      </section>

      {/* ───── WHO IT IS FOR ───── */}
      <section className="container1 section-padding gsap-fade-up">
        <div className="section-tag">WHO IT IS FOR</div>
        <h2 className="section-title">We do not take everyone.</h2>
        <p className="section-desc">
          The Pilot only works when both sides show up. Here is who it is built
          for, and who it is not.
        </p>

        <div className="who-grid">
          <div className="who-card">
            <h4>THIS IS FOR YOU IF</h4>
            <ul className="who-list">
              <li>
                <FaCheck className="icon-check" /> You are a local service
                business doing $50K to $2M a year.
              </li>
              <li>
                <FaCheck className="icon-check" /> You could fulfill more work
                if the leads showed up.
              </li>
              <li>
                <FaCheck className="icon-check" /> You answer your phone within
                minutes during business hours.
              </li>
              <li>
                <FaCheck className="icon-check" /> You are tired of guessing
                where next month's revenue comes from.
              </li>
              <li>
                <FaCheck className="icon-check" /> You are coachable on creative
                and offer.
              </li>
            </ul>
          </div>
          <div className="who-card">
            <h4>NOT FOR YOU IF</h4>
            <ul className="who-list">
              <li>
                <FaTimes className="icon-cross" /> You want overnight results
                with zero feedback loop.
              </li>
              <li>
                <FaTimes className="icon-cross" /> You will not shoot or approve
                real creative on your business.
              </li>
              <li>
                <FaTimes className="icon-cross" /> You take days to reply to a
                lead.
              </li>
              <li>
                <FaTimes className="icon-cross" /> You are shopping for the
                cheapest agency, not the best return.
              </li>
              <li>
                <FaTimes className="icon-cross" /> You cannot fulfill new work
                if it came in.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ───── FAQ SECTION ───── */}
      <section className="container1 section-padding gsap-fade-up">
        <div className="section-tag">QUESTIONS</div>
        <h2 className="section-title">Straight answers.</h2>

        <div className="faq-list">
          {[
            {
              q: "Do I need to know anything about ads?",
              a: "No. That is the entire point. You answer the phone and approve the creative. We build the offer, write the copy.",
            },
            {
              q: "What if it does not work?",
              a: "Your Decision Day is booked for day 30 before we start. We read the Scoreboard together and you decide.",
            },
            {
              q: "Why only 30 days?",
              a: "Because we do not want your commitment, we want your traction. Thirty days is enough to prove the machine.",
            },
            {
              q: "How is this different from an agency that just runs ads?",
              a: "An agency runs ads on their account and you rent the results. We build a machine you own: the offer, the funnel.",
            },
            {
              q: "Who owns the ad account, the pixel, and the leads?",
              a: "You do. Everything runs on your own account and pixel, and every lead is yours. If we ever part ways, you keep it all.",
            },
            {
              q: "What does month two cost?",
              a: "If the Pilot proves out, you move to the Traction Engine: a monthly engagement backed by a written cost-per-lead.",
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item ${activeFaq === idx ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggleFaq(idx)}>
                {faq.q}
                <FaPlus className="faq-icon" />
              </button>
              <div className="faq-answer">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ───── GUARANTEE ───── */}
      <section className="container1 section-padding gsap-fade-up">
        <div className="shell">
          <div className="guarantee-box">
            <div className="g-left">
              <div className="section-tag" style={{ marginBottom: 0 }}>
                THE GUARANTEE
              </div>
              <h2>Your risk ends on day 30.</h2>
              <p>
                The ad spend stays on your card and your pixel. There is no long
                contract. On Decision Day we read the Scoreboard together and
                you decide. Either way, you keep everything we built.
              </p>
            </div>
            <div className="g-right">
              <h4>YOU WALK AWAY OWNING</h4>
              <ul className="who-list">
                <li>
                  <FaCheck className="icon-check" /> Your ad account and pixel
                </li>
                <li>
                  <FaCheck className="icon-check" /> The offer and the funnel
                </li>
                <li>
                  <FaCheck className="icon-check" /> Every piece of creative
                </li>
                <li>
                  <FaCheck className="icon-check" /> All your Scoreboard data
                  and leads
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="gsap-fade-up sm-gu-box">
          <h3 className="sm-gu-title">Building this to sell it one day?</h3>
          <p className="sm-gu-desc">
            That is a different build. We have a separate track focused on the
            assets a buyer pays for. Mention it when you book and we will map it
            on the call.
          </p>
          <button className="btn-outline">
            Book a call about the Sellable-Asset track
          </button>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <section className="container1 section-padding final-cta gsap-fade-up">
        <div className="section-tag" style={{ justifyContent: "center" }}>
          WE TAKE A LIMITED NUMBER OF PILOTS EACH MONTH. EACH ONE IS BUILT BY
          HAND.
        </div>
        <h2>
          Stop guessing where
          <br />
          your next customer
          <br />
          comes from.
        </h2>
        <p className="sm-final-cta-desc">
          In 30 days you will know your cost per lead and your cost per booked
          job, on your own ad account. The only question is whether the jobs we
          book are worth more than the Pilot fee.
        </p>

        <button className="btn-primary">
          Book my 30-Day Traction Pilot{" "}
          <span className="ic">
            <FaArrowRight />
          </span>
        </button>

        <p className="sm-final-cta-text">
          You keep the pixel, the data, and the whole system.{" "}
          <span style={{ color: "#fff", fontWeight: "bold" }}>
            No long contract.
          </span>
        </p>
        <p className="sm-final-cta-alt">
          Prefer to talk now?{" "}
          <span className="cyan-text">Call or text (954) 383-8093</span>
        </p>

        <p className="sm-final-cta-feedback">
          <strong style={{ color: "#fff" }}>P.S.</strong> The Pilot is the whole
          pitch. We would rather prove it on your business for 30 days than ask
          you to trust a promise. If the numbers are not there, you have lost
          nothing and you keep everything we built.
        </p>
      </section>

      {/* ───── FOOTER ───── */}
      <Footer />
    </div>
  );
}

"use client";
import { useState } from "react";
import Footer from "../components/Footer";
import { HeroAllSection } from "../components/HeroAllSection";
import { LogoTracker } from "../components/LogoTracker";
import PopupForm from "../components/PopupForm";
import { PortfolioImage } from "../components/PortfolioImage";
import { ServiceDetailsSection } from "../components/ServiceDetailsSection";
import { ClientTestimonial } from "../components/ClientTestimonial";
import { WhoWeAre } from "../components/WhoWeAre";
import { CounterSection } from "../components/CounterSection";
import Image from "next/image";

export default function page() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      <HeroAllSection
        id={"team-hero"}
        title1={"Healthcare Leads "}
        title2={"That Converts"}
        description={`We don’t just generate calls. We generate conversations that close. <br/>At Dotoli Digital, our hybrid publisher-broker model ensures higher intent,<br/> higher quality, and higher ROI.`}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />
      <div id="team-hero"></div>

      <div className="sm-img-fix">
        <WhoWeAre
          title1="Why Healthcare Leads Require"
          title2=" a Different Approach"
          img="leads-1.webp"
          paragraph={`
            Most brokers treat leads as a commodity. We don’t. Healthcare is a high-compliance, high-competition industry—meaning intent and quality matter more than volume. Our background in Google Ads, audience targeting, and creative optimization gives us an edge in generating genuine intent traffic, not just random clicks.
Key Point Highlights:<br/><br/>
            <ul>
              <li>Intent-driven strategies, not spray-and-pray</li>
              <li>Compliance-first lead generation</li>
              <li>Optimized campaigns for healthcare verticals</li>
              </ul>`}
        />
      </div>
      <WhoWeAre
        smclass={"sm-right-wwa"}
        title1="The Dotoli "
        title2="Digital Advantage"
        img="leads-2.webp"
        paragraph={`
            We bridge the gap between publishers and buyers. Instead of acting as a middleman, we:<br/><br/>
            <ul>
              <li>Speak the language of publishers → campaigns, creatives, and data optimization.</li>
              <li>Understand the needs of call centers → dispo feedback, close rate drivers, and compliance.</li>
              <li>Move fast with insights → adjusting in real time to maximize ROI.</li>
              </ul>`}
      />

      <section>
        <div className="container">
          <Image
            src="/images/leads-full.webp"
            alt=""
            width={1920}
            height={1431}
          />
        </div>
      </section>

      <WhoWeAre
        title1="How We Deliver "
        title2="Quality Healthcare Leads"
        img="leads-3.webp"
        paragraph={`
           
            <ul>
              <li><strong>Step 1: Audience Targetingstrong</strong> - Intent-driven Google Ads, social ads, and native campaigns.</li>
              <li><strong>Step 2: Creative Optimization</strong> - High-converting copy and visuals designed for healthcare compliance.</li>
              <li><strong>Step 3: Real-Time Feedback Loops</strong> - Using dispo and buyer feedback to refine campaigns daily.</li>
              <li><strong>Step 4: Scalable Partnerships</strong> - Flexible capacity, tailored lead flow, and nationwide reach.</li>
              </ul>`}
      />

      <WhoWeAre
        smclass={"sm-right-wwa"}
        title1="Who We "
        title2="Work With"
        img="leads-4.webp"
        paragraph={`
            We power growth for:<br/><br/>
            <ul>
              <li>Call centers seeking consistent high-intent calls</li>
              <li>Healthcare providers expanding patient acquisition</li>
              <li>Insurance brokers and Medicare specialists</li>
              <li>Lead buyers tired of low-quality, recycled leads</li>
              </ul>
            <br/>if you need healthcare leads that close, we’re the partner you’ve been looking for.
              
              `}
      />

      <br />
      <br />
      <br />
      <br />

      {/* ───── COUNTERS / METRICS ───── */}
      <CounterSection />

      {/* ───── TESTIMONIALS & LOGOS ───── */}
      <ClientTestimonial />
      <LogoTracker />

      {/* ───── FOOTER ───── */}
      <Footer />
    </>
  );
}

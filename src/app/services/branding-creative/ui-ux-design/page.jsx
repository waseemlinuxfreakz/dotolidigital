"use client";
import { useState } from "react";
import PopupForm from "../../../components/PopupForm";
import Footer from "../../../components/Footer";
import { HeroAllSection } from "../../../components/HeroAllSection";
import { ServiceDetailsSection } from "../../../components/ServiceDetailsSection";

export default function Page() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroAllSection
        id={"team-hero"}
        title1="UI/UX"
        title2="Design"
        description={``}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>

      {/* UI/UX Design */}
      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="UI/UX Design Services That Improve Usability, Engagement & Conversions"
        text={`A website or app may look good, but if users struggle to navigate, understand, or complete actions, it fails its purpose. UI/UX design focuses on how users interact with digital products and how those experiences guide them toward meaningful outcomes.<br/><br/>
        At Dotoli Digital, our UI/UX design services create intuitive, user-friendly, and conversion-focused experiences that help businesses retain users, build trust, and achieve measurable results.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="What Is UI/UX Design?"
        text={`UI/UX design is the process of designing digital interfaces that are visually appealing, easy to use, and aligned with user behavior. UI (User Interface) focuses on visual elements, while UX (User Experience) focuses on usability, navigation, and interaction to ensure users can complete tasks efficiently.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Why UI/UX Design Matters Today"
        text={`Users expect clarity and simplicity. If an interface is confusing or slow, users leave. Search engines and AI-driven systems also prioritize websites and apps that deliver strong user experience signals such as engagement, usability, and satisfaction.<br/><br/>
        UI/UX design matters because it:
        <ul>
          <li>Improves user satisfaction and retention</li>
          <li>Reduces friction and confusion</li>
          <li>Increases conversion rates</li>
          <li>Supports SEO, AEO, and performance marketing</li>
          <li>Builds trust and credibility</li>
        </ul><br/>
        Good UI/UX design turns visitors into users and users into customers.`}
      />

      <ServiceDetailsSection
        img="/images/x10.webp"
        heading="Our UI/UX Design Approach"
        text={`<strong>User-Centered Design First</strong><br/><br/>
        We design experiences around real user behavior, not assumptions. Understanding user needs, expectations, and pain points allows us to create interfaces that feel natural and intuitive.<br/><br/>
        <strong>Designed for Humans and Digital Systems</strong><br/><br/>
        UI/UX design must satisfy both users and systems that evaluate engagement. Our designs are structured to support accessibility, performance, and clarity, helping search engines and AI systems interpret quality signals accurately.`}
      />

      <ServiceDetailsSection
        img="/images/x11.webp"
        heading="UI/UX Design Services We Offer"
        text={`Our UI/UX design services are adaptable across websites, applications, and digital platforms.<br/><br/>
        <strong>User Research & Behavior Analysis</strong><br/>
        We study how users interact with your product to identify friction points, drop-offs, and opportunities for improvement.<br/><br/>
        <strong>Information Architecture & Wireframing</strong><br/>
        We design clear navigation structures and wireframes that guide users smoothly through content and actions.<br/><br/>
        <strong>Interface Design (UI)</strong><br/>
        We create clean, modern interfaces that align with your brand identity while remaining easy to understand and use.<br/><br/>
        <strong>Usability Testing & Iteration</strong><br/>
        Designs are tested in real-world use cases to ensure usability and effectiveness before final implementation.`}
      />

      <ServiceDetailsSection
        img="/images/x12.webp"
        heading="How Our UI/UX Design Process Works"
        text={`<strong>1. User & Business Discovery</strong><br/>
        We understand your business goals, target users, and existing challenges to align design with outcomes.<br/><br/>
        <strong>2. Research & UX Strategy</strong><br/>
        We conduct research and define user journeys that support clarity, accessibility, and engagement.<br/><br/>
        <strong>3. Wireframing & Prototyping</strong><br/>
        Layouts and interaction flows are created to test structure and usability early in the process.<br/><br/>
        <strong>4. UI Design & Refinement</strong><br/>
        Visual design is applied while ensuring consistency, accessibility, and brand alignment.<br/><br/>
        <strong>5. Testing & Optimization</strong><br/>
        Designs are tested and refined based on feedback to improve usability and performance.`}
      />

      <ServiceDetailsSection
        img="/images/x13.webp"
        heading="Industries That Benefit from UI/UX Design"
        text={`UI/UX design is valuable for:
        <ul>
          <li>SaaS and technology platforms</li>
          <li>eCommerce websites</li>
          <li>Mobile and web applications</li>
          <li>Professional service websites</li>
          <li>Healthcare and fintech products</li>
          <li>Startups and enterprises</li>
        </ul><br/>
        Any digital product benefits from thoughtful UI/UX design.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Benefits of Our UI/UX Design Services"
        text={`<ul>
          <li>Improved usability and navigation</li>
          <li>Higher engagement and retention</li>
          <li>Better conversion rates</li>
          <li>Reduced user friction</li>
          <li>Clear and consistent interfaces</li>
          <li>Stronger trust and credibility</li>
        </ul><br/>
        UI/UX design improves both experience and results.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Why Businesses Choose Dotoli Digital for UI/UX Design"
        text={`Businesses choose Dotoli Digital because we design with purpose.<br/><br/>
        Our UI/UX design services are:
        <ul>
          <li>User-centered and data-informed</li>
          <li>Aligned with branding and development</li>
          <li>Focused on conversions and usability</li>
          <li>Scalable and future-ready</li>
        </ul><br/>
        We design experiences that support real business goals.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Frequently Asked Questions"
        text={`<strong>What is the difference between UI and UX design?</strong><br/>
        UI focuses on visual design, while UX focuses on overall user experience and usability.<br/><br/>
        <strong>Does UI/UX design improve conversions?</strong><br/>
        Yes. Clear and intuitive design reduces friction and increases the likelihood of users taking action.<br/><br/>
        <strong>Can you redesign an existing interface?</strong><br/>
        Yes. We improve existing designs to enhance usability and performance.<br/><br/>
        <strong>Is UI/UX design important for SEO and AEO?</strong><br/>
        Yes. Better user experience improves engagement signals and AI trust indicators.<br/><br/>
        <strong>Do you work with developers during implementation?</strong><br/>
        Yes. We collaborate closely with development teams to ensure designs are implemented correctly.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Ready to Improve User Experience and Conversions?"
        text={`Great design makes digital experiences effortless. We help businesses create UI/UX that users enjoy and trust.<br/><br/>
        <strong>Get a Free UI/UX Review</strong><br/>
        or<br/>
        <strong>Book a UI/UX Strategy Call</strong>`}
      />

      <Footer />
    </>
  );
}

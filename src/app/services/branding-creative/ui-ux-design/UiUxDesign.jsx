"use client";
import { useState } from "react";
import PopupForm from "../../../components/PopupForm";
import Footer from "../../../components/Footer";
import { HeroAllSection } from "../../../components/HeroAllSection";
import { ServiceDetailsSection } from "../../../components/ServiceDetailsSection";
import PerformanceCta from "../../../components/PerformanceCta";
import { FAQSection } from "../../../components/FAQSection";
import WhyChooseSection from "../../../components/WhyChooseSection";
import BenefitsPerformance from "../../../components/BenefitsPerformance";
import IndustriesSection from "../../../components/IndustriesSection";
import ProcessTimeline from "../../../components/ProcessTimeline";

export default function UiUxDesign() {
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
        heading="UI/UX Design Services That Improve Usability, Engagement & Conversions"
        text={`A website or app may look good, but if users struggle to navigate, understand, or complete actions, it fails its purpose. UI/UX design focuses on how users interact with digital products and how those experiences guide them toward meaningful outcomes.<br/><br/>
        At <Link href="/">Dotoli Digital</Link>, our UI/UX design services create intuitive, user-friendly, and conversion-focused experiences that help businesses retain users, build trust, and achieve measurable results.`}
      />

      <ServiceDetailsSection
        heading="What Is UI/UX Design?"
        text={`UI/UX design is the process of designing digital interfaces that are visually appealing, easy to use, and aligned with user behavior. UI (User Interface) focuses on visual elements, while UX (User Experience) focuses on usability, navigation, and interaction to ensure users can complete tasks efficiently.`}
      />

      <ServiceDetailsSection
        img="/images/Gemini_Generated_Image_9bop8h9bop8h9bop.png"
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
        heading="Our UI/UX Design Approach"
        text={`<strong>User-Centered Design First</strong><br/><br/>
        We <Link href="/services/branding-creative" >design experiences</Link> around real user behavior, not assumptions. Understanding user needs, expectations, and pain points allows us to create interfaces that feel natural and intuitive.<br/><br/>
        <strong>Designed for Humans and Digital Systems</strong><br/><br/>
        UI/UX design must satisfy both users and systems that evaluate engagement. Our designs are structured to support accessibility, performance, and clarity, helping search engines and AI systems interpret quality signals accurately.`}
      />

      <ServiceDetailsSection
        img="/images/Gemini_Generated_Image_i2fz9wi2fz9wi2fz.png"
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

      <ProcessTimeline
        data={{
          heading: "How Our UI/UX Design Process Works",
          steps: [
            {
              title: "User & Business Discovery",
              desc: "We understand your business goals, target users, and existing challenges to align design with outcomes.",
            },
            {
              title: "Research & UX Strategy",
              desc: "We conduct research and define user journeys that support clarity, accessibility, and engagement.",
            },
            {
              title: "Wireframing & Prototyping",
              desc: "Layouts and interaction flows are created to test structure and usability early in the process.",
            },
            {
              title: "UI Design & Refinement",
              desc: "Visual design is applied while ensuring consistency, accessibility, and brand alignment.",
            },
            {
              title: "Testing & Optimization",
              desc: "Designs are tested and refined based on feedback to improve usability and performance.",
            },
          ],
        }}
      />

      <IndustriesSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          heading: "Industries That Benefit from UI/UX Design",
          subText: "UI/UX design is valuable for:",
          industries: [
            "SaaS and Technology Platforms",
            "eCommerce Websites",
            "Mobile and Web Applications",
            "Professional Service Websites",
            "Healthcare and Fintech Products",
            "Startups and Enterprises",
          ],
          note: "Any digital product benefits from thoughtful UI/UX design.",
          ctaText: "Book a Free Strategy Call",
        }}
      />

      <BenefitsPerformance
        data={{
          heading: "Benefits of Our UI/UX Design Services",
          subText: "UI/UX design improves both experience and results.",
          benefits: [
            {
              title: "Improved usability and navigation",
              desc: "Design intuitive flows that make interactions simple and efficient.",
            },
            {
              title: "Higher engagement and retention",
              desc: "Encourage users to stay longer and return through better experiences.",
            },
            {
              title: "Better conversion rates",
              desc: "Guide users toward meaningful actions with structured design.",
            },
            {
              title: "Reduced user friction",
              desc: "Remove obstacles that prevent users from completing key tasks.",
            },
            {
              title: "Clear and consistent interfaces",
              desc: "Maintain visual harmony and usability across all touchpoints.",
            },
            {
              title: "Stronger trust and credibility",
              desc: "Professional design builds confidence and brand authority.",
            },
          ],
        }}
      />

      <WhyChooseSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          pillText: "UI/UX design, built with purpose",
          title: "Why businesses choose",
          highlightText: "Dotoli Digital for UI/UX Design",
          subText:
            "Businesses choose Dotoli Digital because we design with purpose.",

          ctaText: "Book a Free Strategy Call",

          miniCards: [
            { k: "Approach", v: "User-centered design" },
            { k: "Alignment", v: "Brand + development" },
            { k: "Focus", v: "Conversions & usability" },
          ],

          cards: [
            {
              title: "User-centered and data-informed",
              desc: "Design decisions are guided by user behavior, insights, and real interaction data.",
            },
            {
              title: "Aligned with branding & development",
              desc: "UI and UX are built to support your brand identity and technical implementation.",
            },
            {
              title: "Focused on conversions & usability",
              desc: "We reduce friction and design flows that guide users toward action.",
            },
            {
              title: "Scalable and future-ready",
              desc: "Design systems structured to evolve as your product grows.",
            },
          ],

          outcome: "We design experiences that support real business goals.",
        }}
      />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "What is the difference between UI and UX design?",
            answer:
              "UI focuses on visual design, while UX focuses on overall user experience and usability.",
          },
          {
            question: "Does UI/UX design improve conversions?",
            answer:
              "Yes. Clear and intuitive design reduces friction and increases the likelihood of users taking action.",
          },
          {
            question: "Can you redesign an existing interface?",
            answer:
              "Yes. We improve existing designs to enhance usability and performance.",
          },
          {
            question: "Is UI/UX design important for SEO and AEO?",
            answer:
              "Yes. Better user experience improves engagement signals and AI trust indicators.",
          },
          {
            question: "Do you work with developers during implementation?",
            answer:
              "Yes. We collaborate closely with development teams to ensure designs are implemented correctly.",
          },
        ]}
      />

      <PerformanceCta
        onStrategyClick={() => setShowPopup(true)}
        title="Ready to Improve User Experience and Conversions?"
        description={`Great design makes digital experiences effortless. We help businesses create UI/UX that users enjoy and trust.`}
      />

      <Footer />
    </>
  );
}

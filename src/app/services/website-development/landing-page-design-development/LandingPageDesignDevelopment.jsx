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
import Link from "next/link";
// landing-page-design-development LandingPageDesignDevelopment

export default function LandingPageDesignDevelopment() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroAllSection
        id={"team-hero"}
        title1="Landing Page"
        title2="Design & Development"
        description={``}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>

      {/* Landing Page Design & Development */}
      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="Landing Page Design & Development Services for High-Converting Campaigns"
        text={`A landing page has one job: convert visitors into action. Whether the goal is leads, sign-ups, or sales, a poorly designed landing page wastes traffic and marketing spend. Strong landing pages combine clarity, speed, and persuasive structure to guide users toward a single outcome.<br/><br/>
        At <Link href="/">Dotoli Digital</Link>, our landing page design and development services focus on building conversion-driven pages that support paid ads, SEO, and performance marketing campaigns.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="What Is Landing Page Design & Development?"
        text={`Landing page design and development is the process of creating focused web pages built to achieve a specific conversion goal, such as lead generation or sales. Unlike regular web pages, landing pages remove distractions and use optimized layout, messaging, and performance to encourage users to take action.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Why Landing Pages Are Critical for Digital Growth"
        text={`Sending traffic to a homepage or generic page often leads to poor results. Users need clarity and direction. <Link href="/services/website-development/landing-page-design-development" >Landing pages</Link> provide a controlled environment where messaging, design, and calls to action work together.<br/><br/>
        Landing pages matter because they:
        <ul>
          <li>Increase conversion rates</li>
          <li>Reduce cost per lead or sale</li>
          <li>Improve campaign performance</li>
          <li>Support <Link href="/services/digital-marketing/performance-marketing" >performance marketing</Link> and SEO</li>
          <li>Enable faster testing and optimization</li>
        </ul><br/>
        High-performing campaigns rely on strong landing pages.<br/><br/>
        <Link href="https://www.sellerscommerce.com/blog/landing-page-statistics" target="_blank">Landing pages convert 160% </Link> better than other signup methods, such as pop-ups or embedded forms, meaning they turn more visitors into leads or customers.`}
      />

      <ServiceDetailsSection
        img="/images/x10.webp"
        heading="Our Landing Page Design & Development Approach"
        text={`<strong>Conversion-First Design</strong><br/><br/>
        Every landing page we build starts with the conversion goal. Design, copy, layout, and CTAs are all aligned to guide users toward a single action without confusion.<br/><br/>
        <strong>Built for Speed, Clarity & Focus</strong><br/><br/>
        Landing pages must load fast and communicate value immediately. We remove unnecessary elements and focus on clarity, performance, and usability.`}
      />

      <ServiceDetailsSection
        img="/images/x11.webp"
        heading="Landing Page Design & Development Services We Offer"
        text={`Our landing page services are designed to support marketing campaigns and continuous optimization.<br/><br/>
        <strong>Custom Landing Page Design</strong><br/>
        We design landing pages that match your brand while maintaining focus on conversions. Each page is visually clean, persuasive, and goal-oriented.<br/><br/>
        <strong>Landing Page Development & Performance Optimization</strong><br/>
        Landing pages are developed using clean, lightweight code to ensure fast load times and smooth interactions across devices.<br/><br/>
        <strong>Copy Structure & CTA Optimization</strong><br/>
        We structure headlines, subheadlines, and calls to action to align with user intent and campaign messaging.<br/><br/>
        <strong>A/B Testing & Iteration Support</strong><br/>
        Landing pages are built to support testing and experimentation, allowing continuous improvement over time.`}
      />

      <ProcessTimeline
        data={{
          heading: "How Our Landing Page Design & Development Process Works",
          steps: [
            {
              title: "Campaign Goal & Audience Alignment",
              desc: "We identify the campaign objective and understand the audience’s intent to ensure messaging aligns with expectations.",
            },
            {
              title: "Wireframing & Messaging Structure",
              desc: "We plan layout, content hierarchy, and CTA placement to guide users toward action clearly.",
            },
            {
              title: "Design & Development",
              desc: "Landing pages are designed and developed with performance, responsiveness, and conversion principles in mind.",
            },
            {
              title: "Testing & Optimization",
              desc: "We test load speed, usability, and messaging effectiveness before launch.",
            },
            {
              title: "Launch & Performance Support",
              desc: "After launch, we support optimization and testing to improve conversion rates continuously.",
            },
          ],
        }}
      />

      <IndustriesSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          heading: "Industries That Benefit Most from Landing Pages",
          subText: "Landing pages are highly effective for:",
          industries: [
            "eCommerce Campaigns",
            "SaaS and Technology Companies",
            "Lead-Generation Businesses",
            "Healthcare and Professional Services",
            "Real Estate and Agencies",
          ],
          note: "Any business running digital campaigns benefits from optimized landing pages.",
          ctaText: "Book a Free Strategy Call",
        }}
      />

      <BenefitsPerformance
        data={{
          heading: "Benefits of Our Landing Page Design & Development Services",
          subText: "Landing pages turn traffic into measurable results.",
          benefits: [
            {
              title: "Higher conversion rates",
              desc: "Strategic layouts guide visitors toward clear and focused actions.",
            },
            {
              title: "Better campaign ROI",
              desc: "Improve ad efficiency by aligning pages with campaign intent.",
            },
            {
              title: "Faster page load times",
              desc: "Performance-optimized builds reduce bounce and increase engagement.",
            },
            {
              title: "Clear user journeys",
              desc: "Structured messaging removes distractions and improves clarity.",
            },
            {
              title: "Easy testing and optimization",
              desc: "Built to support A/B testing and continuous performance improvement.",
            },
            {
              title: "Seamless integration with ads and analytics",
              desc: "Connect landing pages directly with tracking, ads, and CRM systems.",
            },
          ],
        }}
      />

      <WhyChooseSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          pillText: "Landing pages, built with purpose",
          title: "Why businesses choose",
          highlightText: "Dotoli Digital for Landing Pages",
          subText:
            "Businesses choose Dotoli Digital because we build landing pages with purpose.",

          ctaText: "Book a Free Strategy Call",

          miniCards: [
            { k: "Focus", v: "Conversion-focused" },
            { k: "Performance", v: "Optimized for speed" },
            { k: "Growth", v: "Continuous testing" },
          ],

          cards: [
            {
              title: "Conversion-focused",
              desc: "Landing pages are structured to guide visitors toward clear actions.",
            },
            {
              title: "Performance-optimized",
              desc: "Built for speed, responsiveness, and strong user experience.",
            },
            {
              title: (
                <>
                  <Link href="/services/seo-services/aeo-geo-optimization">
                    Aligned with SEO
                  </Link>{" "}
                  & performance marketing
                </>
              ),
              desc: "Landing pages support search visibility and paid campaign results.",
            },
            {
              title: "Built for continuous testing and growth",
              desc: "Designed to support A/B testing and long-term optimization.",
            },
          ],

          outcome:
            "We design landing pages that support real business outcomes.",
        }}
      />

      <PerformanceCta
        onStrategyClick={() => setShowPopup(true)}
        title="Ready to Launch High-Converting Landing Pages?"
        description={`Strong landing pages make the difference between wasted traffic and measurable growth. We help businesses turn campaigns into conversions.`}
      />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question:
              "How is a landing page different from a regular website page?",
            answer:
              "Landing pages focus on a single goal and remove distractions, while website pages serve broader navigation purposes.",
          },
          {
            question: "Can landing pages work for SEO?",
            answer:
              "Yes. Landing pages can support SEO when structured correctly, though they are often used with paid campaigns.",
          },
          {
            question: "Do you design mobile-friendly landing pages?",
            answer:
              "Yes. All landing pages are fully responsive and optimized for mobile users.",
          },
          {
            question: "Can landing pages be tested and improved over time?",
            answer:
              "Yes. We build landing pages to support A/B testing and continuous optimization.",
          },
          {
            question: "Do you provide copywriting for landing pages?",
            answer:
              "Yes. We help structure messaging and CTAs to improve conversions.",
          },
        ]}
      />

      <Footer />
    </>
  );
}

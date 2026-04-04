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

export default function BrandIdentityDesign() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroAllSection
        id={"team-hero"}
        title1="Brand Identity"
        title2="Design"
        description={``}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>

      {/* Hero Section */}
      <ServiceDetailsSection
        heading="Brand Identity Design Services That Build Recognition & Trust"
        text={`Your brand identity is often the first impression people have of your business. Before customers read your content or explore your services, they notice your logo, colors, typography, and overall visual consistency. A weak or inconsistent brand identity creates confusion, while a strong one builds trust instantly.<br/><br/>
        At <Link href="/">Dotoli Digital</Link>, our brand identity design services help businesses define how they look, feel, and are remembered. We design identities that are clear, consistent, and aligned with long-term business growth.`}
      />

      <ServiceDetailsSection
        heading="What Is Brand Identity Design?"
        text={`Brand identity design is the process of creating the visual elements that represent a brand, including logos, colors, typography, and design guidelines. It ensures a business presents itself consistently across all platforms, helping audiences recognize, trust, and remember the brand more easily.`}
      />

      <ServiceDetailsSection
        img="/images/Gemini_Generated_Image_jgpu00jgpu00jgpu.png"
        heading="Why Brand Identity Design Matters Today"
        text={`People interact with brands across websites, social media, <Link href="/services/branding-creative/ad-creative-design" >ads</Link>, and AI-generated summaries. Inconsistent visuals or unclear identity reduce credibility and recognition.<br/><br/>
        Brand identity design matters because it:
        <ul>
          <li>Creates instant brand recognition</li>
          <li>Builds trust and professionalism</li>
          <li>Improves consistency across platforms</li>
          <li>Supports marketing, SEO, and AEO</li>
          <li>Helps AI systems accurately represent your brand</li>
        </ul><br/>
        A strong brand identity makes every marketing effort more effective.`}
      />

      <ServiceDetailsSection
        heading="Our Brand Identity Design Approach"
        text={`<strong>Strategy Before Visuals</strong><br/><br/>
        Great brand identity is not just about looking good. We start by understanding your business values, audience, positioning, and goals. This ensures the identity reflects who you are and where you are going.<br/><br/>
        <strong>Designed for Humans and Digital Systems</strong><br/><br/>
        Modern brand identity must be easy for people to recognize and easy for digital systems to interpret. We design identities that are visually distinctive while remaining clear and structured across digital platforms and AI-driven environments.`}
      />

      <ServiceDetailsSection
        img="/images/Gemini_Generated_Image_fcfuv2fcfuv2fcfu.png"
        heading="Brand Identity Design Services We Offer"
        text={`Our brand identity design services are comprehensive and scalable.<br/><br/>
        <strong>Logo Design & Visual Marks</strong><br/>
        We design logos and brand marks that are distinctive, versatile, and aligned with your brand personality. Logos are created to work across digital, print, and social platforms.<br/><br/>
        <strong>Color Palette & Typography System</strong><br/>
        We define color systems and typography that reflect your brand tone and ensure consistency across all brand touchpoints.<br/><br/>
        <strong>Brand Style Guide Creation</strong><br/>
        We create brand guidelines that clearly document how your brand identity should be used. This ensures consistency across teams, platforms, and future marketing efforts.<br/><br/>
        <strong>Visual Consistency Across Digital Platforms</strong><br/>
        We ensure your brand identity works seamlessly across websites, social media, ads, and marketing assets.`}
      />

      <ProcessTimeline
        data={{
          heading: "How Our Brand Identity Design Process Works",
          steps: [
            {
              title: "Brand Discovery & Research",
              desc: "We analyze your business, audience, competitors, and market positioning to define clear brand direction.",
            },
            {
              title: "Brand Strategy & Visual Direction",
              desc: "We establish brand personality, tone, and visual direction before starting design.",
            },
            {
              title: "Concept Development & Design",
              desc: "Multiple design concepts are created and refined based on feedback and strategic alignment.",
            },
            {
              title: "Refinement & Finalization",
              desc: "Designs are polished and prepared for real-world use across platforms.",
            },
            {
              title: "Delivery & Brand Guidelines",
              desc: "Final brand assets and usage guidelines are delivered to ensure long-term consistency.",
            },
          ],
        }}
      />

      <IndustriesSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          heading: "Industries That Benefit from Brand Identity Design",
          subText: "Brand identity design is essential for:",
          industries: [
            "Startups and Growing Businesses",
            "SaaS and Technology Companies",
            "eCommerce Brands",
            "Professional Services",
            "Healthcare and Real Estate",
            "Personal Brands and Agencies",
          ],
          note: "Any business that wants to be recognizable and trusted benefits from strong identity design.",
          ctaText: "Book a Free Strategy Call",
        }}
      />

      <BenefitsPerformance
        data={{
          heading: "Benefits of Our Brand Identity Design Services",
          subText: "Brand identity turns visibility into memorability.",
          benefits: [
            {
              title: "Clear and professional brand presence",
              desc: "Present your business with clarity, confidence, and visual consistency.",
            },
            {
              title: "Stronger brand recognition",
              desc: "Create memorable visual elements that customers easily recall.",
            },
            {
              title: "Consistent visuals across platforms",
              desc: "Maintain cohesive design across websites, ads, and social channels.",
            },
            {
              title: "Increased trust and credibility",
              desc: "Professional branding builds confidence and authority.",
            },
            {
              title: "Easier marketing and content creation",
              desc: "Clear guidelines streamline campaign and content development.",
            },
            {
              title: "Long-term brand equity",
              desc: "Build a brand foundation that grows stronger over time.",
            },
          ],
        }}
      />

      <WhyChooseSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          pillText: "Brand identity design, built with strategy",
          title: "Why businesses choose",
          highlightText: "Dotoli Digital for Brand Identity Design",
          subText:
            "Businesses choose Dotoli Digital because we connect design with strategy.",

          ctaText: "Book a Free Strategy Call",

          miniCards: [
            { k: "Strategy", v: "Not trend-driven" },
            { k: "Consistency", v: "Scalable systems" },
            { k: "Alignment", v: "Marketing + SEO goals" },
          ],

          cards: [
            {
              title: "Strategy-led, not trend-driven",
              desc: "Brand identity is built around positioning, clarity, and long-term differentiation.",
            },
            {
              title: "Consistent and scalable",
              desc: "Design systems ensure consistency across platforms and future expansion.",
            },
            {
              title: (
                <>
                  Aligned with marketing and{" "}
                  <Link href="/services/seo-services">SEO goals</Link>
                </>
              ),
              desc: "Brand identity supports visibility, authority, and digital performance.",
            },
            {
              title: "Designed for long-term use",
              desc: "Identity systems are structured to evolve as your business grows.",
            },
          ],

          outcome: "We design brand identities that grow with your business.",
        }}
      />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Is brand identity the same as a logo?",
            answer:
              "No. A logo is one part of brand identity. Brand identity includes colors, typography, visual style, and guidelines.",
          },
          {
            question: "Can you redesign an existing brand identity?",
            answer:
              "Yes. We help businesses refresh or refine their identity while maintaining recognition.",
          },
          {
            question: "Do you provide brand guidelines?",
            answer:
              "Yes. Brand guidelines are included to ensure consistent use across platforms.",
          },
          {
            question: "Does brand identity affect marketing performance?",
            answer:
              "Yes. Consistent branding improves trust, engagement, and conversion rates.",
          },
          {
            question: "Can brand identity support SEO and AEO?",
            answer:
              "Yes. Clear branding improves authority signals and digital consistency.",
          },
        ]}
      />

      <PerformanceCta
        onStrategyClick={() => setShowPopup(true)}
        title="Ready to Build a Strong Brand Identity?"
        description={`Your brand identity should communicate trust, clarity, and value instantly. We help businesses create identities that stand out and support growth.`}
      />

      <Footer />
    </>
  );
}

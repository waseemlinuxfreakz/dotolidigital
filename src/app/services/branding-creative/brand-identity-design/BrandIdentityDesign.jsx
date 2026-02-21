"use client";
import { useState } from "react";
import PopupForm from "../../../components/PopupForm";
import Footer from "../../../components/Footer";
import { HeroAllSection } from "../../../components/HeroAllSection";
import { ServiceDetailsSection } from "../../../components/ServiceDetailsSection";

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
        img="/images/x7.webp"
        heading="Brand Identity Design Services That Build Recognition & Trust"
        text={`Your brand identity is often the first impression people have of your business. Before customers read your content or explore your services, they notice your logo, colors, typography, and overall visual consistency. A weak or inconsistent brand identity creates confusion, while a strong one builds trust instantly.<br/><br/>
        At Dotoli Digital, our brand identity design services help businesses define how they look, feel, and are remembered. We design identities that are clear, consistent, and aligned with long-term business growth.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="What Is Brand Identity Design?"
        text={`Brand identity design is the process of creating the visual elements that represent a brand, including logos, colors, typography, and design guidelines. It ensures a business presents itself consistently across all platforms, helping audiences recognize, trust, and remember the brand more easily.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Why Brand Identity Design Matters Today"
        text={`People interact with brands across websites, social media, ads, and AI-generated summaries. Inconsistent visuals or unclear identity reduce credibility and recognition.<br/><br/>
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
        img="/images/x10.webp"
        heading="Our Brand Identity Design Approach"
        text={`<strong>Strategy Before Visuals</strong><br/><br/>
        Great brand identity is not just about looking good. We start by understanding your business values, audience, positioning, and goals. This ensures the identity reflects who you are and where you are going.<br/><br/>
        <strong>Designed for Humans and Digital Systems</strong><br/><br/>
        Modern brand identity must be easy for people to recognize and easy for digital systems to interpret. We design identities that are visually distinctive while remaining clear and structured across digital platforms and AI-driven environments.`}
      />

      <ServiceDetailsSection
        img="/images/x11.webp"
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

      <ServiceDetailsSection
        img="/images/x12.webp"
        heading="How Our Brand Identity Design Process Works"
        text={`<strong>1. Brand Discovery & Research</strong><br/>
        We analyze your business, audience, competitors, and market positioning to define clear brand direction.<br/><br/>
        <strong>2. Brand Strategy & Visual Direction</strong><br/>
        We establish brand personality, tone, and visual direction before starting design.<br/><br/>
        <strong>3. Concept Development & Design</strong><br/>
        Multiple design concepts are created and refined based on feedback and strategic alignment.<br/><br/>
        <strong>4. Refinement & Finalization</strong><br/>
        Designs are polished and prepared for real-world use across platforms.<br/><br/>
        <strong>5. Delivery & Brand Guidelines</strong><br/>
        Final brand assets and usage guidelines are delivered to ensure long-term consistency.`}
      />

      <ServiceDetailsSection
        img="/images/x13.webp"
        heading="Industries That Benefit from Brand Identity Design"
        text={`Brand identity design is essential for:
        <ul>
          <li>Startups and growing businesses</li>
          <li>SaaS and technology companies</li>
          <li>eCommerce brands</li>
          <li>Professional services</li>
          <li>Healthcare and real estate</li>
          <li>Personal brands and agencies</li>
        </ul><br/>
        Any business that wants to be recognizable and trusted benefits from strong identity design.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Benefits of Our Brand Identity Design Services"
        text={`<ul>
          <li>Clear and professional brand presence</li>
          <li>Stronger brand recognition</li>
          <li>Consistent visuals across platforms</li>
          <li>Increased trust and credibility</li>
          <li>Easier marketing and content creation</li>
          <li>Long-term brand equity</li>
        </ul><br/>
        Brand identity turns visibility into memorability.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Why Businesses Choose Dotoli Digital for Brand Identity Design"
        text={`Businesses choose Dotoli Digital because we connect design with strategy.<br/><br/>
        Our brand identity work is:
        <ul>
          <li>Strategy-led, not trend-driven</li>
          <li>Consistent and scalable</li>
          <li>Aligned with marketing and SEO goals</li>
          <li>Designed for long-term use</li>
        </ul><br/>
        We design brand identities that grow with your business.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Frequently Asked Questions"
        text={`<strong>Is brand identity the same as a logo?</strong><br/>
        No. A logo is one part of brand identity. Brand identity includes colors, typography, visual style, and guidelines.<br/><br/>
        <strong>Can you redesign an existing brand identity?</strong><br/>
        Yes. We help businesses refresh or refine their identity while maintaining recognition.<br/><br/>
        <strong>Do you provide brand guidelines?</strong><br/>
        Yes. Brand guidelines are included to ensure consistent use across platforms.<br/><br/>
        <strong>Does brand identity affect marketing performance?</strong><br/>
        Yes. Consistent branding improves trust, engagement, and conversion rates.<br/><br/>
        <strong>Can brand identity support SEO and AEO?</strong><br/>
        Yes. Clear branding improves authority signals and digital consistency.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Ready to Build a Strong Brand Identity?"
        text={`Your brand identity should communicate trust, clarity, and value instantly. We help businesses create identities that stand out and support growth.<br/><br/>
        <strong>Get a Free Brand Identity Review</strong><br/>
        or<br/>
        <strong>Book a Brand Strategy Call</strong>`}
      />

      <Footer />
    </>
  );
}

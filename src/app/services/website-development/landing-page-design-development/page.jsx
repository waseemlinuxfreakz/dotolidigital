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
        At Dotoli Digital, our landing page design and development services focus on building conversion-driven pages that support paid ads, SEO, and performance marketing campaigns.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="What Is Landing Page Design & Development?"
        text={`Landing page design and development is the process of creating focused web pages built to achieve a specific conversion goal, such as lead generation or sales. Unlike regular web pages, landing pages remove distractions and use optimized layout, messaging, and performance to encourage users to take action.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Why Landing Pages Are Critical for Digital Growth"
        text={`Sending traffic to a homepage or generic page often leads to poor results. Users need clarity and direction. Landing pages provide a controlled environment where messaging, design, and calls to action work together.<br/><br/>
        Landing pages matter because they:
        <ul>
          <li>Increase conversion rates</li>
          <li>Reduce cost per lead or sale</li>
          <li>Improve campaign performance</li>
          <li>Support performance marketing and SEO</li>
          <li>Enable faster testing and optimization</li>
        </ul><br/>
        High-performing campaigns rely on strong landing pages.<br/><br/>
        Landing pages convert 160% better than other signup methods, such as pop-ups or embedded forms, meaning they turn more visitors into leads or customers.`}
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

      <ServiceDetailsSection
        img="/images/x12.webp"
        heading="How Our Landing Page Design & Development Process Works"
        text={`<strong>1. Campaign Goal & Audience Alignment</strong><br/>
        We identify the campaign objective and understand the audience’s intent to ensure messaging aligns with expectations.<br/><br/>
        <strong>2. Wireframing & Messaging Structure</strong><br/>
        We plan layout, content hierarchy, and CTA placement to guide users toward action clearly.<br/><br/>
        <strong>3. Design & Development</strong><br/>
        Landing pages are designed and developed with performance, responsiveness, and conversion principles in mind.<br/><br/>
        <strong>4. Testing & Optimization</strong><br/>
        We test load speed, usability, and messaging effectiveness before launch.<br/><br/>
        <strong>5. Launch & Performance Support</strong><br/>
        After launch, we support optimization and testing to improve conversion rates continuously.`}
      />

      <ServiceDetailsSection
        img="/images/x13.webp"
        heading="Industries That Benefit Most from Landing Pages"
        text={`Landing pages are highly effective for:
        <ul>
          <li>eCommerce campaigns</li>
          <li>SaaS and technology companies</li>
          <li>Lead-generation businesses</li>
          <li>Healthcare and professional services</li>
          <li>Real estate and agencies</li>
        </ul><br/>
        Any business running digital campaigns benefits from optimized landing pages.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Benefits of Our Landing Page Design & Development Services"
        text={`<ul>
          <li>Higher conversion rates</li>
          <li>Better campaign ROI</li>
          <li>Faster page load times</li>
          <li>Clear user journeys</li>
          <li>Easy testing and optimization</li>
          <li>Seamless integration with ads and analytics</li>
        </ul><br/>
        Landing pages turn traffic into measurable results.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Why Businesses Choose Dotoli Digital for Landing Pages"
        text={`Businesses choose Dotoli Digital because we build landing pages with purpose.<br/><br/>
        Our landing pages are:
        <ul>
          <li>Conversion-focused</li>
          <li>Performance-optimized</li>
          <li>Aligned with SEO and performance marketing</li>
          <li>Built for continuous testing and growth</li>
        </ul><br/>
        We design landing pages that support real business outcomes.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Frequently Asked Questions"
        text={`<strong>How is a landing page different from a regular website page?</strong><br/>
        Landing pages focus on a single goal and remove distractions, while website pages serve broader navigation purposes.<br/><br/>
        <strong>Can landing pages work for SEO?</strong><br/>
        Yes. Landing pages can support SEO when structured correctly, though they are often used with paid campaigns.<br/><br/>
        <strong>Do you design mobile-friendly landing pages?</strong><br/>
        Yes. All landing pages are fully responsive and optimized for mobile users.<br/><br/>
        <strong>Can landing pages be tested and improved over time?</strong><br/>
        Yes. We build landing pages to support A/B testing and continuous optimization.<br/><br/>
        <strong>Do you provide copywriting for landing pages?</strong><br/>
        Yes. We help structure messaging and CTAs to improve conversions.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Ready to Launch High-Converting Landing Pages?"
        text={`Strong landing pages make the difference between wasted traffic and measurable growth. We help businesses turn campaigns into conversions.<br/><br/>
        <strong>Get a Free Landing Page Review</strong><br/>
        or<br/>
        <strong>Book a Landing Page Strategy Call</strong>`}
      />

      <Footer />
    </>
  );
}

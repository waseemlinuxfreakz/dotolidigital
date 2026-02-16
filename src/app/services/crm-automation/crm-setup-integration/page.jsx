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
        title1="CRM Setup"
        title2="& Integration"
        description={``}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>

      {/* CRM Setup & Integration */}
      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="CRM Setup & Integration Services for Organized Data & Scalable Growth"
        text={`A CRM is only effective when it is set up correctly and connected to the tools your business already uses. Poor CRM configuration leads to incomplete data, missed follow-ups, and frustrated teams. CRM setup and integration ensure your system works as a central source of truth for sales, marketing, and customer management.<br/><br/>
        At Dotoli Digital, our CRM setup and integration services help businesses implement clean, structured, and connected CRM systems that support daily operations and long-term growth.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="What Is CRM Setup & Integration?"
        text={`CRM setup and integration involve configuring a customer relationship management system and connecting it with websites, marketing tools, and sales platforms. This ensures customer data flows automatically between systems, enabling better lead tracking, follow-ups, reporting, and personalized communication.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Why CRM Setup & Integration Matter"
        text={`Many businesses invest in CRM software but fail to use it effectively due to poor setup or disconnected tools. A properly configured and integrated CRM improves efficiency, visibility, and consistency across teams.<br/><br/>
        CRM setup and integration matter because they:
        <ul>
          <li>Centralize customer and lead data</li>
          <li>Reduce manual data entry</li>
          <li>Improve sales and marketing alignment</li>
          <li>Enable automation and reporting</li>
          <li>Support scalable operations</li>
        </ul><br/>
        A well-integrated CRM becomes the backbone of growth.`}
      />

      <ServiceDetailsSection
        img="/images/x10.webp"
        heading="Our CRM Setup & Integration Approach"
        text={`<strong>Designed Around Your Workflows</strong><br/><br/>
        We do not force businesses to adapt to software limitations. Instead, we configure CRM systems around your sales process, customer journey, and internal workflows.<br/><br/>
        <strong>Built for Reliability and Scale</strong><br/><br/>
        CRM systems must work consistently as your business grows. We focus on clean data structures, logical pipelines, and reliable integrations that scale without breaking.`}
      />

      <ServiceDetailsSection
        img="/images/x11.webp"
        heading="CRM Setup & Integration Services We Offer"
        text={`Our CRM setup and integration services are flexible and customized.<br/><br/>
        <strong>CRM Configuration & Custom Fields</strong><br/>
        We configure pipelines, stages, custom fields, and dashboards to match how your business actually operates.<br/><br/>
        <strong>Website & Form Integration</strong><br/>
        We connect your CRM to website forms, landing pages, and lead-capture tools so data flows automatically and accurately.<br/><br/>
        <strong>Marketing Tool Integration</strong><br/>
        Email platforms, automation tools, and ad platforms are integrated to ensure leads are tracked and nurtured correctly.<br/><br/>
        <strong>Sales & Pipeline Integration</strong><br/>
        We integrate CRMs with sales tools and workflows to ensure leads are assigned, tracked, and followed up on efficiently.`}
      />

      <ServiceDetailsSection
        img="/images/x12.webp"
        heading="How Our CRM Setup & Integration Process Works"
        text={`<strong>1. Workflow & Data Review</strong><br/>
        We analyze your existing tools, workflows, and customer journey to define integration requirements.<br/><br/>
        <strong>2. CRM Selection or Review</strong><br/>
        We help select the right CRM or optimize your existing system based on business needs.<br/><br/>
        <strong>3. CRM Setup & Configuration</strong><br/>
        Pipelines, fields, user roles, and permissions are configured for clarity and efficiency.<br/><br/>
        <strong>4. Integration & Automation Setup</strong><br/>
        We connect your CRM with websites, marketing tools, and sales platforms to automate data flow.<br/><br/>
        <strong>5. Testing, Training & Optimization</strong><br/>
        We test all integrations, train your team, and refine setups for long-term reliability.`}
      />

      <ServiceDetailsSection
        img="/images/x13.webp"
        heading="Industries That Benefit from CRM Setup & Integration"
        text={`CRM setup and integration are valuable for:
        <ul>
          <li>Sales-driven businesses</li>
          <li>eCommerce and online services</li>
          <li>SaaS and technology companies</li>
          <li>Professional services</li>
          <li>Healthcare and real estate</li>
          <li>Agencies and startups</li>
        </ul><br/>
        Any business managing leads and customers benefits from proper CRM integration.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Benefits of Our CRM Setup & Integration Services"
        text={`<ul>
          <li>Clean and organized customer data</li>
          <li>Faster lead response times</li>
          <li>Reduced manual work</li>
          <li>Better sales visibility</li>
          <li>Improved reporting and insights</li>
          <li>Scalable and reliable CRM systems</li>
        </ul><br/>
        CRM integration turns scattered tools into a connected system.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Why Businesses Choose Dotoli Digital for CRM Setup & Integration"
        text={`Businesses choose Dotoli Digital because we focus on usability and outcomes.<br/><br/>
        Our CRM setup services are:
        <ul>
          <li>Customized to real workflows</li>
          <li>Easy for teams to use</li>
          <li>Integrated with marketing and sales systems</li>
          <li>Designed for long-term scalability</li>
        </ul><br/>
        We build CRM systems that teams actually adopt and rely on.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Frequently Asked Questions"
        text={`<strong>Can you work with our existing CRM?</strong><br/>
        Yes. We optimize and integrate existing CRM platforms or recommend better alternatives if needed.<br/><br/>
        <strong>Do you integrate CRM with websites and landing pages?</strong><br/>
        Yes. We connect forms, landing pages, and lead sources directly to your CRM.<br/><br/>
        <strong>Is CRM setup suitable for small businesses?</strong><br/>
        Yes. Proper setup helps small businesses stay organized and scale efficiently.<br/><br/>
        <strong>Do you provide training for CRM usage?</strong><br/>
        Yes. We train teams to use the CRM effectively and confidently.<br/><br/>
        <strong>Can CRM integration support automation?</strong><br/>
        Yes. CRM integration is the foundation for marketing and sales automation.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Ready to Set Up a CRM That Actually Works?"
        text={`Your CRM should simplify operations, not complicate them. We help businesses build CRM systems that are clean, connected, and scalable.<br/><br/>
        <strong>Get a Free CRM Setup Review</strong><br/>
        or<br/>
        <strong>Book a CRM Integration Strategy Call</strong>`}
      />

      <Footer />
    </>
  );
}

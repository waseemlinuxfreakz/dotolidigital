"use client";
import { useState } from "react";
import PopupForm from "../../../components/PopupForm";
import Footer from "../../../components/Footer";
import { HeroAllSection } from "../../../components/HeroAllSection";
import { ServiceDetailsSection } from "../../../components/ServiceDetailsSection";
// marketing-automation

export default function MarketingAutomation() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroAllSection
        id={"team-hero"}
        title1="Marketing"
        title2="Automation"
        description={``}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>

      {/* Marketing Automation */}
      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="Marketing Automation Services to Nurture Leads & Scale Growth"
        text={`Marketing automation allows businesses to communicate consistently, personally, and at scale without manual effort. As customer journeys become more complex and expectations rise, automation ensures no lead is ignored and no opportunity is missed.<br/><br/>
        At Dotoli Digital, our marketing automation services help businesses build intelligent systems that nurture leads, improve conversions, and support long-term customer relationships across digital channels.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="What Is Marketing Automation?"
        text={`Marketing automation is the use of software and workflows to automate marketing actions such as emails, lead nurturing, follow-ups, and customer segmentation. It allows businesses to deliver timely, relevant messages based on user behavior, improving engagement, conversions, and efficiency without manual intervention.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Why Marketing Automation Matters Today"
        text={`Customers expect timely and relevant communication. Manual marketing processes often lead to delayed responses, inconsistent follow-ups, and lost leads. Marketing automation solves this by creating structured, responsive journeys that adapt to user behavior.<br/><br/>
        Marketing automation matters because it:
        <ul>
          <li>Improves lead nurturing and follow-ups</li>
          <li>Delivers personalized communication at scale</li>
          <li>Reduces manual marketing tasks</li>
          <li>Increases conversion rates</li>
          <li>Supports scalable growth</li>
        </ul><br/>
        Automation ensures the right message reaches the right person at the right time.`}
      />

      <ServiceDetailsSection
        img="/images/x10.webp"
        heading="Our Marketing Automation Approach"
        text={`<strong>Behavior-Driven, Not Generic</strong><br/><br/>
        We design automation workflows based on how users actually behave, not generic email blasts. Triggers, conditions, and timing are aligned with real user actions and intent.<br/><br/>
        <strong>Integrated with CRM & Marketing Systems</strong><br/><br/>
        Marketing automation works best when connected to CRM, websites, and performance marketing tools. We ensure automation workflows are part of a unified system, not isolated campaigns.`}
      />

      <ServiceDetailsSection
        img="/images/x11.webp"
        heading="Marketing Automation Services We Offer"
        text={`Our marketing automation services are flexible and tailored to business needs.<br/><br/>
        <strong>Lead Nurturing & Drip Campaigns</strong><br/>
        We design automated email and messaging sequences that naturally educate, engage, and move leads toward conversion.<br/><br/>
        <strong>Behavior-Based Triggers & Segmentation</strong><br/>
        Automation workflows respond to user actions, such as page visits, form submissions, or inactivity, to deliver personalized experiences.<br/><br/>
        <strong>Email Marketing Automation</strong><br/>
        We automate campaigns for onboarding, promotions, re-engagement, and lifecycle marketing while maintaining consistency and relevance.<br/><br/>
        <strong>Funnel & Lifecycle Automation</strong><br/>
        We map and automate customer journeys across awareness, consideration, conversion, and retention stages.`}
      />

      <ServiceDetailsSection
        img="/images/x12.webp"
        heading="How Our Marketing Automation Process Works"
        text={`<strong>1. Funnel & Journey Mapping</strong><br/>
        We analyze your customer journey to identify where automation can improve engagement and conversions.<br/><br/>
        <strong>2. Tool & Platform Alignment</strong><br/>
        We configure automation tools that integrate with your CRM, website, and marketing stack.<br/><br/>
        <strong>3. Workflow & Trigger Setup</strong><br/>
        Automated workflows are built with clear triggers, conditions, and actions aligned with business goals.<br/><br/>
        <strong>4. Content & Messaging Integration</strong><br/>
        We align automation workflows with messaging, content, and offers to maintain relevance and consistency.<br/><br/>
        <strong>5. Testing, Optimization & Scaling</strong><br/>
        Workflows are tested, refined, and scaled based on performance data and engagement insights.`}
      />

      <ServiceDetailsSection
        img="/images/x13.webp"
        heading="Industries That Benefit from Marketing Automation"
        text={`Marketing automation is effective for:
        <ul>
          <li>SaaS and technology companies</li>
          <li>eCommerce businesses</li>
          <li>Lead-generation businesses</li>
          <li>Professional services</li>
          <li>Healthcare and real estate</li>
          <li>Agencies and startups</li>
        </ul><br/>
        Any business managing leads and customer communication benefits from automation.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Benefits of Our Marketing Automation Services"
        text={`<ul>
          <li>Improved lead nurturing</li>
          <li>Higher engagement rates</li>
          <li>Faster response times</li>
          <li>Increased conversion rates</li>
          <li>Reduced manual workload</li>
          <li>Scalable and consistent marketing systems</li>
        </ul><br/>
        Marketing automation turns marketing into a predictable growth engine.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Why Businesses Choose Dotoli Digital for Marketing Automation"
        text={`Businesses choose Dotoli Digital because we focus on systems, not just tools.<br/><br/>
        Our marketing automation solutions are:
        <ul>
          <li>Customized to real customer journeys</li>
          <li>Integrated with CRM and performance marketing</li>
          <li>Easy for teams to manage</li>
          <li>Designed for long-term scalability</li>
        </ul><br/>
        We help businesses automate without losing personalization.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Frequently Asked Questions"
        text={`<strong>Is marketing automation only for email marketing?</strong><br/>
        No. It includes email, lead nurturing, segmentation, and behavior-based workflows across channels.<br/><br/>
        <strong>Can marketing automation work for small businesses?</strong><br/>
        Yes. Automation helps small teams scale communication efficiently.<br/><br/>
        <strong>Does marketing automation replace human interaction?</strong><br/>
        No. It supports human teams by handling repetitive tasks and improving consistency.<br/><br/>
        <strong>Can marketing automation improve conversion rates?</strong><br/>
        Yes. Timely, personalized messaging significantly improves conversions.<br/><br/>
        <strong>Do you provide ongoing optimization?</strong><br/>
        Yes. Automation workflows perform best with continuous refinement.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Ready to Automate Your Marketing Without Losing Personalization?"
        text={`Marketing automation helps businesses scale communication while staying relevant. We build automation systems that nurture leads and drive growth.<br/><br/>
        <strong>Get a Free Marketing Automation Audit</strong><br/>
        or<br/>
        <strong>Book a Marketing Automation Strategy Call</strong>`}
      />

      <Footer />
    </>
  );
}

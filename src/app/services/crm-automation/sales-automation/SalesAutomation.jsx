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

export default function SalesAutomation() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroAllSection
        id={"team-hero"}
        title1="Sales"
        title2="Automation"
        description={``}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>

      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="Sales Automation Services to Close Deals Faster & Scale Revenue"
        text={`Sales teams lose time and deals due to manual follow-ups, disorganized pipelines, and missed opportunities. As lead volume increases, managing sales processes manually becomes inefficient and inconsistent. Sales automation solves this by creating structured, responsive systems that guide leads from interest to conversion.<br/><br/>
        At Dotoli Digital, our sales automation services help businesses streamline pipelines, automate follow-ups, and improve sales efficiency without increasing workload.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="What Is Sales Automation?"
        text={`Sales automation is the use of software and workflows to automate repetitive sales tasks such as lead assignment, follow-ups, pipeline updates, and task reminders. It helps sales teams respond faster, stay organized, and close deals more efficiently by reducing manual effort and human error.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Why Sales Automation Matters Today"
        text={`Modern buyers expect quick responses and consistent communication. Delayed follow-ups or missed leads often result in lost sales. Sales automation ensures no opportunity slips through the cracks.<br/><br/>
        Sales automation matters because it:
        <ul>
          <li>Improves lead response time</li>
          <li>Reduces manual sales tasks</li>
          <li>Creates consistent follow-up processes</li>
          <li>Improves pipeline visibility</li>
          <li>Increases close rates</li>
        </ul><br/>
        Automation allows sales teams to focus on selling rather than administrative work.`}
      />

      <ServiceDetailsSection
        img="/images/x10.webp"
        heading="Our Sales Automation Approach"
        text={`<strong>Built Around Your Sales Process</strong><br/><br/>
        We do not force generic sales systems. Our sales automation workflows are designed around how your sales team actually operates to ensure adoption and effectiveness.<br/><br/>
        <strong>Integrated with CRM & Marketing Automation</strong><br/><br/>
        Sales automation works best when connected to CRM and marketing automation systems. We ensure a smooth handoff between marketing and sales to ensure a seamless customer journey.`}
      />

      <ServiceDetailsSection
        img="/images/x11.webp"
        heading="Sales Automation Services We Offer"
        text={`Our sales automation services are flexible and scalable.<br/><br/>
        <strong>Lead Assignment & Routing Automation</strong><br/>
        We automate lead distribution based on rules such as location, source, or deal value, ensuring leads reach the right salesperson instantly.<br/><br/>
        <strong>Automated Follow-Ups & Reminders</strong><br/>
        Emails, tasks, and reminders are triggered automatically to ensure consistent and timely follow-ups.<br/><br/>
        <strong>Sales Pipeline & Stage Automation</strong><br/>
        We automate pipeline updates, stage transitions, and deal tracking to maintain clear visibility across the sales funnel.<br/><br/>
        <strong>Sales Performance Tracking & Reporting</strong><br/>
        Automated reporting provides real-time insights into pipeline health, conversion rates, and sales performance.`}
      />

      <ServiceDetailsSection
        img="/images/x12.webp"
        heading="How Our Sales Automation Process Works"
        text={`<strong>1. Sales Workflow & Pipeline Analysis</strong><br/>
        We review your existing sales process to identify inefficiencies and opportunities for automation.<br/><br/>
        <strong>2. CRM & Tool Configuration</strong><br/>
        Sales automation tools are configured in your CRM to align with pipeline stages and team structure.<br/><br/>
        <strong>3. Automation Rules & Trigger Setup</strong><br/>
        Triggers and workflows are created for lead assignment, follow-ups, and pipeline updates.<br/><br/>
        <strong>4. Testing & Team Training</strong><br/>
        We test automation workflows and train your sales team to use the system confidently.<br/><br/>
        <strong>5. Optimization & Scaling</strong><br/>
        Workflows are refined based on performance data and scaled as sales volume grows.`}
      />

      <IndustriesSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          heading: "Industries That Benefit from Sales Automation",
          subText: "Sales automation is effective for:",
          industries: [
            "SaaS and Technology Companies",
            "Lead-Generation Businesses",
            "Professional Services",
            "Real Estate and Healthcare",
            "Agencies and Startups",
          ],
          note: "Any sales-driven business benefits from automation.",
          ctaText: "Book a Free Strategy Call",
        }}
      />

      <BenefitsPerformance
        data={{
          heading: "Benefits of Our Sales Automation Services",
          subText:
            "Sales automation turns sales processes into predictable systems.",
          benefits: [
            {
              title: "Faster lead response times",
              desc: "Automate follow-ups to engage prospects without delay.",
            },
            {
              title: "Improved sales efficiency",
              desc: "Streamline workflows so teams focus on closing, not admin tasks.",
            },
            {
              title: "Higher close rates",
              desc: "Structured pipelines increase consistency and conversion.",
            },
            {
              title: "Clear pipeline visibility",
              desc: "Gain real-time insights into deal stages and performance.",
            },
            {
              title: "Reduced manual workload",
              desc: "Automate repetitive processes to free up team capacity.",
            },
            {
              title: "Scalable sales operations",
              desc: "Build systems that support growth without increasing headcount.",
            },
          ],
        }}
      />

      <WhyChooseSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          pillText: "Sales automation, built for efficiency",
          title: "Why businesses choose",
          highlightText: "Dotoli Digital for Sales Automation",
          subText:
            "Businesses choose Dotoli Digital because we focus on usability and results.",

          ctaText: "Book a Free Strategy Call",

          miniCards: [
            { k: "Customization", v: "Real sales workflows" },
            { k: "Integration", v: "CRM + marketing automation" },
            { k: "Adoption", v: "Easy for teams" },
          ],

          cards: [
            {
              title: "Customized to real sales workflows",
              desc: "Automation is built around how your team actually sells — not generic templates.",
            },
            {
              title: "Integrated with CRM & marketing",
              desc: "Seamless connection between CRM systems and marketing automation tools.",
            },
            {
              title: "Easy for teams to adopt",
              desc: "Clear processes and usability ensure fast team adoption.",
            },
            {
              title: "Designed for long-term scalability",
              desc: "Systems are structured to grow with your sales operations.",
            },
          ],

          outcome: "We help sales teams close more deals with less effort.",
        }}
      />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Does sales automation replace salespeople?",
            answer:
              "No. It supports sales teams by handling repetitive tasks and improving consistency.",
          },
          {
            question: "Can sales automation work for small teams?",
            answer:
              "Yes. Automation helps small teams scale without increasing headcount.",
          },
          {
            question: "Is sales automation part of CRM?",
            answer:
              "Sales automation typically operates within or alongside a CRM system.",
          },
          {
            question: "Can sales automation improve conversion rates?",
            answer:
              "Yes. Faster follow-ups and structured pipelines increase close rates.",
          },
          {
            question: "Do you provide ongoing optimization?",
            answer:
              "Yes. Sales automation performs best with continuous refinement.",
          },
        ]}
      />

      <PerformanceCta
        onStrategyClick={() => setShowPopup(true)}
        title="Ready to Automate Your Sales Process?"
        description={`Sales automation helps businesses close deals faster and scale revenue efficiently. We build systems that support sales teams and improve performance.`}
      />

      <Footer />
    </>
  );
}

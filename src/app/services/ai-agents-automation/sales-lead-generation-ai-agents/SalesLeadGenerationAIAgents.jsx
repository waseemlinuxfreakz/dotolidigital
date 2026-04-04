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
import { SingleImageSlider2 } from "../../../components/SingleImageSlider2";
// SalesLeadGenerationAIAgents

export default function SalesLeadGenerationAIAgents() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroAllSection
        id={"team-hero"}
        title1="Sales & Lead"
        title2="Generation AI Agents"
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>
      <SingleImageSlider2 />
      <ServiceDetailsSection
        heading="Sales & Lead Generation AI Agents to Qualify Leads & Close Faster"
        text={`Generating leads is only valuable when those leads are qualified, followed up on time, and guided toward conversion. Manual lead handling slows response times, creates inconsistencies, and limits scale. Sales and lead generation AI agents solve this by automating qualification, routing, and follow-ups in real time.<br/><br/>
        At <Link href="/">Dotoli Digital</Link>, our sales and lead generation AI agents help businesses capture intent, qualify prospects, and support sales teams with intelligent automation that works 24/7.`}
      />

      <ServiceDetailsSection
        heading="What Are Sales & Lead Generation AI Agents?"
        text={`Sales and lead-generation <Link href="/services/ai-agents-automation" >AI agents are intelligent systems</Link> that automate the capture, qualification, and routing of leads. They interact with users through chat or messaging, ask qualifying questions, collect data, and trigger actions such as CRM updates, follow-ups, or meeting bookings.`}
      />

      <ServiceDetailsSection
        heading="Why Sales & Lead Generation AI Agents Matter Today"
        text={`Speed matters in sales. Prospects who receive fast, relevant responses are far more likely to convert. Manual processes often cause delays, missed opportunities, and inconsistent follow-ups.<br/><br/>
        Sales and lead generation AI agents matter because they:<br/>
        <ul>
          <li>Respond instantly to inquiries</li>
          <li>Qualify leads consistently</li>
          <li>Reduce manual sales workload</li>
          <li>Improve lead-to-conversion rates</li>
          <li>Support scalable sales growth</li>
        </ul><br/>
        AI agents ensure no lead is ignored, regardless of volume.`}
      />

      <ServiceDetailsSection
        img="/images/Gemini_Generated_Image_xgrvj5xgrvj5xgrv.png"
        heading="Our Sales & Lead Generation AI Agents Approach"
        text={`<strong>Built Around Buyer Intent</strong><br/><br/>
        We design AI agents to understand what prospects are looking for. Conversations are structured to identify intent, urgency, and fit before passing leads to sales teams.<br/><br/>
        <strong>Integrated with CRM & Sales Systems</strong><br/><br/>
        AI agents are connected directly to CRM and sales tools. This ensures lead data is captured accurately and actions such as assignments, follow-ups, or scheduling happen automatically.`}
      />

      <ServiceDetailsSection
        heading="Sales & Lead Generation AI Agent Services We Offer"
        text={`Our AI agent solutions are flexible and customizable.<br/><br/>
        <strong>AI Lead Qualification Agents</strong><br/>
        We build AI agents that ask the right questions, score leads, and automatically identify high-quality prospects.<br/><br/>
        <strong>AI Sales Assistants</strong><br/>
        AI sales agents support sales teams by handling initial conversations, answering common questions, and preparing leads before human interaction.<br/><br/>
        <strong>Appointment Booking & Demo Scheduling Agents</strong><br/>
        AI agents can book demos, consultations, or calls directly into your calendar systems without manual involvement.<br/><br/>
        <strong>Multi-Channel Lead Capture Agents</strong><br/>
        We deploy AI agents across websites, landing pages, and messaging platforms to capture leads wherever prospects engage.`}
      />

      <ServiceDetailsSection img="/images/Screenshot 2025-06-19 at 8.48.40 PM.png" />

      <ProcessTimeline
        data={{
          heading: "How Our Sales & Lead Generation AI Agent Process Works",
          steps: [
            {
              title: "Sales Funnel & Goal Analysis",
              desc: "We understand your sales funnel, lead criteria, and conversion goals to design effective AI workflows.",
            },
            {
              title: "Conversation & Qualification Design",
              desc: "We design conversation flows that qualify leads based on intent, budget, and readiness.",
            },
            {
              title: "CRM & Tool Integration",
              desc: "AI agents are integrated with CRM, calendars, and automation tools to trigger real actions.",
            },
            {
              title: "Testing & Refinement",
              desc: "We test conversations with real scenarios and refine responses for accuracy and clarity.",
            },
            {
              title: "Launch, Monitoring & Optimization",
              desc: "AI agents are monitored continuously and optimized based on performance data.",
            },
          ],
        }}
      />

      <IndustriesSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          heading:
            "Industries That Benefit from Sales & Lead Generation AI Agents",
          subText: "Sales and lead generation AI agents are effective for:",
          industries: [
            "SaaS and Technology Companies",
            "eCommerce Businesses",
            "Professional Services",
            "Real Estate and Healthcare",
            "Agencies and Startups",
            "B2B and Lead-Driven Businesses",
          ],
          note: "Any business handling inbound leads benefits from AI-driven qualification.",
          ctaText: "Book a Free Strategy Call",
        }}
      />

      <BenefitsPerformance
        data={{
          heading: "Benefits of Our Sales & Lead Generation AI Agents",
          subText:
            "AI agents turn inbound interest into sales-ready opportunities.",
          benefits: [
            {
              title: "Faster lead response times",
              desc: "Engage and qualify leads instantly without delays.",
            },
            {
              title: "Higher-quality leads",
              desc: "Filter and prioritize prospects based on intent and readiness.",
            },
            {
              title: "Improved sales efficiency",
              desc: "Support sales teams by automating early-stage conversations.",
            },
            {
              title: "Reduced manual work",
              desc: "Automate repetitive tasks to free up team capacity.",
            },
            {
              title: "Consistent qualification process",
              desc: "Ensure every lead is evaluated through structured criteria.",
            },
            {
              title: "Scalable sales operations",
              desc: "Handle increasing lead volume without expanding headcount.",
            },
          ],
        }}
      />

      <WhyChooseSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          pillText: "Sales AI agents, built for revenue",
          title: "Why businesses choose",
          highlightText: "Dotoli Digital for Sales AI Agents",
          subText:
            "Businesses choose Dotoli Digital because we build AI agents that align with real sales processes.",

          ctaText: "Book a Free Strategy Call",

          miniCards: [
            { k: "Intent", v: "Conversion-focused" },
            { k: "Integration", v: "CRM + automation" },
            { k: "Impact", v: "Measurable results" },
          ],

          cards: [
            {
              title: "Intent-driven and conversion-focused",
              desc: "AI agents are structured to qualify, nurture, and move leads toward revenue.",
            },
            {
              title: (
                <>
                  Integrated with{" "}
                  <Link href="/services/crm-automation">CRM & automation</Link>
                </>
              ),
              desc: "Seamless connection with CRM systems and automated workflows.",
            },
            {
              title: "Easy for sales teams to use",
              desc: "Built to support teams without adding operational complexity.",
            },
            {
              title: "Designed for measurable impact",
              desc: "Performance is tracked and optimized for clear revenue outcomes.",
            },
          ],

          outcome:
            "We focus on AI systems that support revenue, not just automation.",
        }}
      />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Can AI agents replace sales teams?",
            answer:
              "No. AI agents support sales teams by handling early-stage tasks, freeing up time for closing.",
          },
          {
            question: "Do AI agents work 24/7?",
            answer: "Yes. AI agents engage and qualify leads at any time.",
          },
          {
            question: "Can AI agents book meetings automatically?",
            answer: "Yes. Meeting and demo scheduling are common use cases.",
          },
          {
            question: "Are AI agents suitable for small businesses?",
            answer:
              "Yes. AI agents help small teams handle more leads without increasing headcount.",
          },
          {
            question: "Can AI agents integrate with existing CRM systems?",
            answer:
              "Yes. Integration is a core part of effective AI agent deployment.",
          },
        ]}
      />

      <PerformanceCta
        onStrategyClick={() => setShowPopup(true)}
        title="Ready to Automate Lead Qualification and Sales Support?"
        description={`Sales and lead generation AI agents help businesses respond faster, qualify better, and close more deals. We build AI systems that support revenue growth at scale.`}
      />

      <Footer />
    </>
  );
}

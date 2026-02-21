"use client";

import { useState } from "react";
import PopupForm from "../../../components/PopupForm";
import Footer from "../../../components/Footer";
import { HeroAllSection } from "../../../components/HeroAllSection";
import { ServiceDetailsSection } from "../../../components/ServiceDetailsSection";
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

      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="Sales & Lead Generation AI Agents to Qualify Leads & Close Faster"
        text={`Generating leads is only valuable when those leads are qualified, followed up on time, and guided toward conversion. Manual lead handling slows response times, creates inconsistencies, and limits scale. Sales and lead generation AI agents solve this by automating qualification, routing, and follow-ups in real time.<br/><br/>
        At Dotoli Digital, our sales and lead generation AI agents help businesses capture intent, qualify prospects, and support sales teams with intelligent automation that works 24/7.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="What Are Sales & Lead Generation AI Agents?"
        text={`Sales and lead-generation AI agents are intelligent systems that automate the capture, qualification, and routing of leads. They interact with users through chat or messaging, ask qualifying questions, collect data, and trigger actions such as CRM updates, follow-ups, or meeting bookings.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
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
        img="/images/x9.webp"
        heading="Our Sales & Lead Generation AI Agents Approach"
        text={`<strong>Built Around Buyer Intent</strong><br/><br/>
        We design AI agents to understand what prospects are looking for. Conversations are structured to identify intent, urgency, and fit before passing leads to sales teams.<br/><br/>
        <strong>Integrated with CRM & Sales Systems</strong><br/><br/>
        AI agents are connected directly to CRM and sales tools. This ensures lead data is captured accurately and actions such as assignments, follow-ups, or scheduling happen automatically.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
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

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="How Our Sales & Lead Generation AI Agent Process Works"
        text={`<strong>1. Sales Funnel & Goal Analysis</strong><br/>
        We understand your sales funnel, lead criteria, and conversion goals to design effective AI workflows.<br/><br/>
        <strong>2. Conversation & Qualification Design</strong><br/>
        We design conversation flows that qualify leads based on intent, budget, and readiness.<br/><br/>
        <strong>3. CRM & Tool Integration</strong><br/>
        AI agents are integrated with CRM, calendars, and automation tools to trigger real actions.<br/><br/>
        <strong>4. Testing & Refinement</strong><br/>
        We test conversations with real scenarios and refine responses for accuracy and clarity.<br/><br/>
        <strong>5. Launch, Monitoring & Optimization</strong><br/>
        AI agents are monitored continuously and optimized based on performance data.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Industries That Benefit from Sales & Lead Generation AI Agents"
        text={`Sales and lead generation AI agents are effective for:<br/>
        <ul>
          <li>SaaS and technology companies</li>
          <li>eCommerce businesses</li>
          <li>Professional services</li>
          <li>Real estate and healthcare</li>
          <li>Agencies and startups</li>
          <li>B2B and lead-driven businesses</li>
        </ul><br/>
        Any business handling inbound leads benefits from AI-driven qualification.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Benefits of Our Sales & Lead Generation AI Agents"
        text={`<ul>
          <li>Faster lead response times</li>
          <li>Higher-quality leads</li>
          <li>Improved sales efficiency</li>
          <li>Reduced manual work</li>
          <li>Consistent qualification process</li>
          <li>Scalable sales operations</li>
        </ul><br/>
        AI agents turn inbound interest into sales-ready opportunities.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Why Businesses Choose Dotoli Digital for Sales AI Agents"
        text={`Businesses choose Dotoli Digital because we build AI agents that align with real sales processes.<br/><br/>
        Our AI agent solutions are:<br/>
        <ul>
          <li>Intent-driven and conversion-focused</li>
          <li>Integrated with CRM and automation</li>
          <li>Easy for sales teams to use</li>
          <li>Designed for measurable impact</li>
        </ul><br/>
        We focus on AI systems that support revenue, not just automation.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Frequently Asked Questions"
        text={`<strong>Can AI agents replace sales teams?</strong><br/>
        No. AI agents support sales teams by handling early-stage tasks, freeing up time for closing.<br/><br/>
        <strong>Do AI agents work 24/7?</strong><br/>
        Yes. AI agents engage and qualify leads at any time.<br/><br/>
        <strong>Can AI agents book meetings automatically?</strong><br/>
        Yes. Meeting and demo scheduling are common use cases.<br/><br/>
        <strong>Are AI agents suitable for small businesses?</strong><br/>
        Yes. AI agents help small teams handle more leads without increasing headcount.<br/><br/>
        <strong>Can AI agents integrate with existing CRM systems?</strong><br/>
        Yes. Integration is a core part of effective AI agent deployment.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Ready to Automate Lead Qualification and Sales Support?"
        text={`Sales and lead generation AI agents help businesses respond faster, qualify better, and close more deals. We build AI systems that support revenue growth at scale.<br/><br/>
        <strong>Get a Free Sales AI Agent Audit</strong><br/>
        or<br/>
        <strong>Book a Sales AI Strategy Call</strong>`}
      />

      <Footer />
    </>
  );
}

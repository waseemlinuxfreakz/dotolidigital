"use client";

import { useState } from "react";
import PopupForm from "../../../components/PopupForm";
import Footer from "../../../components/Footer";
import { HeroAllSection } from "../../../components/HeroAllSection";
import { ServiceDetailsSection } from "../../../components/ServiceDetailsSection";

export default function AIChatbotDevelopment() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroAllSection
        id={"team-hero"}
        title1="AI Chatbot"
        title2="Development"
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>

      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="AI Chatbot Development Services for Smart, Scalable Conversations"
        text={`Modern customers expect instant answers, smooth interactions, and consistent support across digital channels. Traditional chatbots with fixed scripts often fail to understand intent or provide meaningful assistance. AI chatbot development solves this by enabling intelligent, context-aware conversations that adapt to user needs.<br/><br/>
        At Dotoli Digital, our AI chatbot development services help businesses automate conversations, qualify leads, and support customers in real time while maintaining accuracy, clarity, and a human-like experience.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="What Is AI Chatbot Development?"
        text={`AI chatbot development is the process of designing and building intelligent chatbots that use artificial intelligence to understand user intent, respond accurately, and perform actions such as answering questions or collecting information. These chatbots go beyond scripted responses by adapting to context and user behavior.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Why AI Chatbot Development Matters Today"
        text={`Customers interact with businesses across websites, messaging apps, and digital platforms. Delayed responses or inconsistent communication reduce trust and conversions. AI chatbots ensure businesses stay responsive without increasing operational costs.<br/><br/>
        AI chatbot development matters because it:<br/>
        <ul>
          <li>Enables instant, 24/7 responses</li>
          <li>Improves customer experience</li>
          <li>Reduces support workload</li>
          <li>Qualifies and routes leads automatically</li>
          <li>Supports scalable business growth</li>
        </ul><br/>
        AI chatbots turn conversations into efficient workflows.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Our AI Chatbot Development Approach"
        text={`<strong>Built Around Real User Intent</strong><br/><br/>
        We design chatbots that understand what users are trying to achieve. Conversation flows are structured to guide users naturally toward answers, actions, or next steps without confusion.<br/><br/>
        <strong>Integrated with Business Systems</strong><br/><br/>
        AI chatbots are most effective when connected to CRM, calendars, and automation tools. We build chatbots that can trigger actions, update data, and support real business processes.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="AI Chatbot Development Services We Offer"
        text={`Our AI chatbot development services are modular and customizable.<br/><br/>
        <strong>Customer Support Chatbots</strong><br/>
        We build chatbots that handle frequently asked questions, provide service information, and escalate complex queries to human teams when needed.<br/><br/>
        <strong>Lead Capture & Qualification Chatbots</strong><br/>
        Chatbots are designed to collect user details, ask qualifying questions, and route leads directly into CRM systems.<br/><br/>
        <strong>Website & Messaging Platform Chatbots</strong><br/>
        We develop chatbots for websites and messaging platforms to ensure consistent engagement across channels.<br/><br/>
        <strong>Custom Conversation Design</strong><br/>
        Each chatbot conversation is designed to reflect your brand and business goals, with clarity, tone, and purpose.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="How Our AI Chatbot Development Process Works"
        text={`<strong>1. Use Case & Requirement Analysis</strong><br/>
        We identify chatbot goals such as support, lead generation, or onboarding and define success criteria.<br/><br/>
        <strong>2. Conversation Flow & Logic Design</strong><br/>
        We design conversation paths, fallback responses, and logic to handle various user scenarios.<br/><br/>
        <strong>3. AI Model & System Integration</strong><br/>
        Chatbots are connected to CRM, websites, and automation tools to enable real actions.<br/><br/>
        <strong>4. Testing & Training</strong><br/>
        We test chatbot responses using real-world scenarios and refine accuracy and clarity.<br/><br/>
        <strong>5. Launch, Monitoring & Optimization</strong><br/>
        After launch, chatbot performance is monitored and optimized continuously.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Industries That Benefit from AI Chatbot Development"
        text={`AI chatbot development is effective for:<br/>
        <ul>
          <li>SaaS and technology companies</li>
          <li>eCommerce businesses</li>
          <li>Professional services</li>
          <li>Healthcare and real estate</li>
          <li>Agencies and startups</li>
          <li>Customer support-driven organizations</li>
        </ul><br/>
        Any business managing digital inquiries benefits from AI chatbots.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Benefits of Our AI Chatbot Development Services"
        text={`<ul>
          <li>24/7 automated engagement</li>
          <li>Faster response times</li>
          <li>Reduced support workload</li>
          <li>Better lead qualification</li>
          <li>Consistent communication</li>
          <li>Scalable conversation systems</li>
        </ul><br/>
        AI chatbots improve efficiency without sacrificing experience.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Why Businesses Choose Dotoli Digital for AI Chatbot Development"
        text={`Businesses choose Dotoli Digital because we build chatbots that work in real environments.<br/><br/>
        Our AI chatbot solutions are:<br/>
        <ul>
          <li>Intent-driven and contextual</li>
          <li>Integrated with CRM and automation</li>
          <li>Easy to scale and manage</li>
          <li>Designed for measurable outcomes</li>
        </ul><br/>
        We focus on chatbots that deliver real value, not just novelty.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Frequently Asked Questions"
        text={`<strong>How are AI chatbots different from rule-based chatbots?</strong><br/>
        AI chatbots understand intent and context, while rule-based chatbots rely on fixed scripts.<br/><br/>
        <strong>Can AI chatbots integrate with CRM systems?</strong><br/>
        Yes. CRM integration is a key part of effective AI chatbot deployment.<br/><br/>
        <strong>Do AI chatbots replace human support?</strong><br/>
        No. They handle repetitive queries and support teams by escalating complex issues.<br/><br/>
        <strong>Can AI chatbots work on websites and messaging apps?</strong><br/>
        Yes. Chatbots can be deployed across multiple platforms.<br/><br/>
        <strong>Are AI chatbots suitable for small businesses?</strong><br/>
        Yes. AI chatbots help small businesses scale communication efficiently.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Ready to Build an Intelligent AI Chatbot?"
        text={`AI chatbots help businesses respond faster, engage better, and scale conversations without friction. We build chatbots that support real business goals.<br/><br/>
        <strong>Get a Free AI Chatbot Consultation</strong><br/>
        or<br/>
        <strong>Book an AI Chatbot Strategy Call</strong>`}
      />

      <Footer />
    </>
  );
}

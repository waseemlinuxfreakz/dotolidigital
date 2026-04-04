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

import { SingleImageSlider2 } from "../../../components/SingleImageSlider2";

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

      <SingleImageSlider2 />

      <ServiceDetailsSection
        heading="AI Chatbot Development Services for Smart, Scalable Conversations"
        text={`Modern customers expect instant answers, smooth interactions, and consistent support across digital channels. Traditional chatbots with fixed scripts often fail to understand intent or provide meaningful assistance. AI chatbot development solves this by enabling intelligent, context-aware conversations that adapt to user needs.<br/><br/>
        At <Link href="/">Dotoli Digital</Link>, our AI chatbot development services help businesses automate conversations, qualify leads, and support customers in real time while maintaining accuracy, clarity, and a human-like experience.`}
      />

      <ServiceDetailsSection
        heading="What Is AI Chatbot Development?"
        text={`AI chatbot development is the process of designing and building intelligent chatbots that use artificial intelligence to understand user intent, respond accurately, and perform actions such as answering questions or collecting information. These chatbots go beyond scripted responses by adapting to context and user behavior.`}
      />

      <ServiceDetailsSection
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
        img="/images/Gemini_Generated_Image_ptgnjtptgnjtptgn.png"
        heading="Our AI Chatbot Development Approach"
        text={`<strong>Built Around Real User Intent</strong><br/><br/>
        We design chatbots that understand what users are trying to achieve. Conversation flows are structured to guide users naturally toward answers, actions, or next steps without confusion.<br/><br/>
        <strong>Integrated with Business Systems</strong><br/><br/>
        AI chatbots are most effective when connected to CRM, calendars, and automation tools. We build chatbots that can trigger actions, update data, and support real business processes.`}
      />

      <ServiceDetailsSection
        heading="AI Chatbot Development Services We Offer"
        text={`Our AI chatbot development services are modular and customizable.<br/><br/>
        <strong>Customer Support Chatbots</strong><br/>
        We build chatbots that handle frequently asked questions, provide service information, and escalate complex queries to human teams when needed.<br/><br/>
        <strong>Lead Capture & Qualification Chatbots</strong><br/>
        Chatbots are designed to collect user details, ask qualifying questions, and route leads directly into <Link href="/services/ai-agents-automation" >CRM systems</Link>.<br/><br/>
        <strong>Website & Messaging Platform Chatbots</strong><br/>
        We develop chatbots for websites and messaging platforms to ensure consistent engagement across channels.<br/><br/>
        <strong>Custom Conversation Design</strong><br/>
        Each chatbot conversation is designed to reflect your brand and business goals, with clarity, tone, and purpose.`}
      />

      <ProcessTimeline
        data={{
          heading: "How Our AI Chatbot Development Process Works",
          steps: [
            {
              title: "Use Case & Requirement Analysis",
              desc: "We identify chatbot goals such as support, lead generation, or onboarding and define success criteria.",
            },
            {
              title: "Conversation Flow & Logic Design",
              desc: "We design conversation paths, fallback responses, and logic to handle various user scenarios.",
            },
            {
              title: "AI Model & System Integration",
              desc: "Chatbots are connected to CRM, websites, and automation tools to enable real actions.",
            },
            {
              title: "Testing & Training",
              desc: "We test chatbot responses using real-world scenarios and refine accuracy and clarity.",
            },
            {
              title: "Launch, Monitoring & Optimization",
              desc: "After launch, chatbot performance is monitored and optimized continuously.",
            },
          ],
        }}
      />

      <ServiceDetailsSection img="/images/rawsqe.jpeg" />

      <IndustriesSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          heading: "Industries That Benefit from AI Chatbot Development",
          subText: "AI chatbot development is effective for:",
          industries: [
            "SaaS and Technology Companies",
            "eCommerce Businesses",
            "Professional Services",
            "Healthcare and Real Estate",
            "Agencies and Startups",
            "Customer Support-Driven Organizations",
          ],
          note: "Any business managing digital inquiries benefits from AI chatbots.",
          ctaText: "Book a Free Strategy Call",
        }}
      />

      <BenefitsPerformance
        data={{
          heading: "Benefits of Our AI Chatbot Development Services",
          subText:
            "AI chatbots improve efficiency without sacrificing experience.",
          benefits: [
            {
              title: "24/7 automated engagement",
              desc: "Respond to users instantly at any time without manual effort.",
            },
            {
              title: "Faster response times",
              desc: "Reduce delays and improve customer satisfaction.",
            },
            {
              title: "Reduced support workload",
              desc: "Handle repetitive queries and free up human teams.",
            },
            {
              title: "Better lead qualification",
              desc: "Identify and route high-intent prospects efficiently.",
            },
            {
              title: "Consistent communication",
              desc: "Deliver accurate and structured responses across interactions.",
            },
            {
              title: "Scalable conversation systems",
              desc: "Manage growing user volume without increasing overhead.",
            },
          ],
        }}
      />

      <WhyChooseSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          pillText: "AI chatbot development, built for real use",
          title: "Why businesses choose",
          highlightText: "Dotoli Digital for AI Chatbot Development",
          subText:
            "Businesses choose Dotoli Digital because we build chatbots that work in real environments.",

          ctaText: "Book a Free Strategy Call",

          miniCards: [
            { k: "Intent", v: "Contextual AI" },
            { k: "Integration", v: "CRM + automation" },
            { k: "Scalability", v: "Easy to manage" },
          ],

          cards: [
            {
              title: "Intent-driven and contextual",
              desc: "Chatbots understand user intent and respond based on real interaction flows.",
            },
            {
              title: "Integrated with CRM & automation",
              desc: "Seamless connection with CRM systems and automated workflows.",
            },
            {
              title: "Easy to scale and manage",
              desc: "Built to grow with your business without adding operational friction.",
            },
            {
              title: "Designed for measurable outcomes",
              desc: "Performance is tracked and optimized for clear business impact.",
            },
          ],

          outcome:
            "We focus on chatbots that deliver real value, not just novelty.",
        }}
      />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "How are AI chatbots different from rule-based chatbots?",
            answer:
              "AI chatbots understand intent and context, while rule-based chatbots rely on fixed scripts.",
          },
          {
            question: "Can AI chatbots integrate with CRM systems?",
            answer:
              "Yes. CRM integration is a key part of effective AI chatbot deployment.",
          },
          {
            question: "Do AI chatbots replace human support?",
            answer:
              "No. They handle repetitive queries and support teams by escalating complex issues.",
          },
          {
            question: "Can AI chatbots work on websites and messaging apps?",
            answer: "Yes. Chatbots can be deployed across multiple platforms.",
          },
          {
            question: "Are AI chatbots suitable for small businesses?",
            answer:
              "Yes. AI chatbots help small businesses scale communication efficiently.",
          },
        ]}
      />

      <PerformanceCta
        onStrategyClick={() => setShowPopup(true)}
        title="Ready to Build an Intelligent AI Chatbot?"
        description={`AI chatbots help businesses respond faster, engage better, and scale conversations without friction. We build chatbots that support real business goals.`}
      />

      <Footer />
    </>
  );
}

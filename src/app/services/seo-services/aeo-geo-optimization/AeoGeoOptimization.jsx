"use client";

import { useState } from "react";
import PopupForm from "../../../components/PopupForm";
import Footer from "../../../components/Footer";
import { HeroAllSection } from "../../../components/HeroAllSection";
import { ServiceDetailsSection } from "../../../components/ServiceDetailsSection";
import PerformanceCta from "../../../components/PerformanceCta";
import { FAQSection } from "../../../components/FAQSection";
import BenefitsPerformance from "../../../components/BenefitsPerformance";
import IndustriesSection from "../../../components/IndustriesSection";
import ProcessTimeline from "../../../components/ProcessTimeline";
import Link from "next/link";
// AeoGeoOptimization

export default function AeoGeoOptimization() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroAllSection
        id={"team-hero"}
        title1="AEO & GEO"
        title2="Optimization"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>

      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="What Is AEO & GEO Optimization?"
        text={`AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) help brands appear inside AI-generated answers, voice search results, and zero-click experiences. These strategies structure content for clarity, authority, and context so AI systems can understand, trust, and cite it.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="Why AEO & GEO Matter in Modern Search"
        text={`Search engines now deliver answers, not just links. AI systems decide which sources to reference. AEO and GEO ensure your content is eligible for selection.<br/><br/>
        Without these optimizations, brands risk losing visibility even with strong traditional rankings.<br/><br/>
        <strong><Link href="https://www.searchenginejournal.com/google-ai-overviews-appear-on-21-of-searches-new-data/560471/#:~:text" target="_blank" >Recent research indicates</Link> that AI Overviews appear in about 20% to 50% of Google queries, depending on the market and query type.</strong>`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="What Our AEO & GEO Services Include"
        text={`<strong>Answer-Focused Content Structuring</strong><br/>
        We structure your pages so key answers are easy to extract and reuse by search and AI systems.<br/>
        This includes clear definitions, FAQs, step-by-step sections, and concise summaries placed where they matter most.<br/>
        The goal is higher toggle and greater visibility in featured snippets, AI overviews, and voice-style results.<br/><br/>

        <strong>AI Context & Entity Optimization</strong><br/>
        We strengthen topical authority by connecting your services, locations, and expertise with the right entities and terms.<br/>
        This improves contextual clarity, so AI systems understand what you do, who you serve, and why you're relevant.<br/>
        We also refine internal linking and supporting content to build a stronger “topic network” around your brand.<br/><br/>

        <strong>Schema & Semantic Enhancements</strong><br/>
        We implement structured data to help search engines accurately and consistently interpret your content.<br/>
        This includes schema for FAQs, services, organization, reviews, and <Link href="/services/seo-services/local-seo" >local business</Link> signals where relevant.<br/>
        Semantic improvements reduce ambiguity and increase eligibility for rich results and AI-generated citations.<br/><br/>

        <strong>AI Visibility Monitoring</strong><br/>
        We track how your brand appears across AI-driven search experiences and answer engines over time.<br/>
        This includes monitoring visibility for priority queries, changes in summaries, and competitive presence in results.<br/>
        You get clear insights on what’s improving, what’s missing, and what to optimize next for stronger AI reach.`}
      />

      <ProcessTimeline
        data={{
          heading: "How Our AEO & GEO Process Works",
          steps: [
            {
              title: "AI Intent & Question Mapping",
              desc: "We identify the questions users ask and map search intent to ensure content aligns with how AI engines interpret queries.",
            },
            {
              title: "Content Restructuring",
              desc: "Existing content is reorganized with clear answers, structured sections, and concise explanations to improve AI readability.",
            },
            {
              title: "Authority Signal Enhancement",
              desc: "We strengthen credibility signals such as expertise, topical authority, and trusted references to improve AI trust.",
            },
            {
              title: "Schema Implementation",
              desc: "Structured data and schema markup are implemented to help AI systems and search engines better understand content context.",
            },
            {
              title: "Continuous Refinement",
              desc: "Performance and AI visibility are monitored regularly, and content is refined to maintain long-term relevance.",
            },
          ],
        }}
      />

      <BenefitsPerformance
        data={{
          heading: "Benefits of AEO & GEO Optimization",
          subText:
            "AEO and GEO ensure your content is visible, trusted, and referenced in AI-driven search environments.",
          benefits: [
            {
              title: "Increased AI visibility",
              desc: "Improve discoverability across AI-powered search and answer engines.",
            },
            {
              title: "Inclusion in AI-generated answers",
              desc: "Structure content so it can be cited and surfaced in generative results.",
            },
            {
              title: (
                <>
                  Future-proof{" "}
                  <Link href="/services/seo-services">SEO strategy</Link>
                </>
              ),
              desc: "Adapt your visibility strategy for evolving AI-driven search systems.",
            },
            {
              title: "Stronger brand authority",
              desc: "Build trust signals that increase credibility across digital ecosystems.",
            },
          ],
        }}
      />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "What is AEO optimization?",
            answer:
              "AEO optimization (Answer Engine Optimization) is the process of creating clear, well-structured content that directly answers user questions so search engines and AI-based tools can easily find, understand, and display those answers.",
          },
          {
            question: "What is GEO optimization?",
            answer:
              "GEO optimization (Generative Engine Optimization) is the practice of optimizing content so it is easily understood, trusted, and reused by AI-driven search and generative engines when producing answers for users.",
          },
          {
            question: "Is AEO replacing SEO?",
            answer: "No. AEO enhances SEO by adapting it for AI-driven search.",
          },
          {
            question: "Can small businesses benefit from AEO & GEO?",
            answer:
              "Yes. AI systems prioritize clarity and relevance, not brand size.",
          },
          {
            question: "How to optimize AEO and GEO?",
            answer:
              "AEO and GEO are optimized by creating clear, structured, and concise content that directly answers user questions, uses schema markup, and includes relevant entities and locations so search engines and AI tools can easily understand and surface the content.",
          },
        ]}
      />

      <PerformanceCta
        onStrategyClick={() => setShowPopup(true)}
        title="Ready to Future-Proof Your Visibility with AEO & GEO?"
        description={`AEO & GEO Optimization helps your brand appear in AI-powered answers, voice search results, and generative search experiences. We optimize your content and structure to improve discoverability, authority, and long-term search visibility.`}
      />

      <Footer />
    </>
  );
}

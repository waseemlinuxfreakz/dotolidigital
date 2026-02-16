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
        <strong>Recent research indicates that AI Overviews appear in about 20% to 50% of Google queries, depending on the market and query type.</strong>`}
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
        This includes schema for FAQs, services, organization, reviews, and local business signals where relevant.<br/>
        Semantic improvements reduce ambiguity and increase eligibility for rich results and AI-generated citations.<br/><br/>

        <strong>AI Visibility Monitoring</strong><br/>
        We track how your brand appears across AI-driven search experiences and answer engines over time.<br/>
        This includes monitoring visibility for priority queries, changes in summaries, and competitive presence in results.<br/>
        You get clear insights on what’s improving, what’s missing, and what to optimize next for stronger AI reach.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="How Our AEO & GEO Process Works"
        text={`<ol>
          <li>AI intent and question mapping</li>
          <li>Content restructuring</li>
          <li>Authority signal enhancement</li>
          <li>Schema implementation</li>
          <li>Continuous refinement</li>
        </ol>`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Benefits of AEO & GEO Optimization"
        text={`<ul>
          <li>Increased AI visibility</li>
          <li>Inclusion in AI-generated answers</li>
          <li>Future-proof SEO strategy</li>
          <li>Stronger brand authority</li>
        </ul>`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="FAQs – AEO & GEO"
        text={`<strong>What is AEO optimization?</strong><br/>
        AEO optimization (Answer Engine Optimization) is the process of creating clear, well-structured content that directly answers user questions so search engines and AI-based tools can easily find, understand, and display those answers.<br/><br/>

        <strong>What is GEO optimization?</strong><br/>
        GEO optimization (Generative Engine Optimization) is the practice of optimizing content so it is easily understood, trusted, and reused by AI-driven search and generative engines when producing answers for users.<br/><br/>

        <strong>Is AEO replacing SEO?</strong><br/>
        No. AEO enhances SEO by adapting it for AI-driven search.<br/><br/>

        <strong>Can small businesses benefit from AEO & GEO?</strong><br/>
        Yes. AI systems prioritize clarity and relevance, not brand size.<br/><br/>

        <strong>How to optimize AEO and GEO?</strong><br/>
        AEO and GEO are optimized by creating clear, structured, and concise content that directly answers user questions, uses schema markup, and includes relevant entities and locations so search engines and AI tools can easily understand and surface the content.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="CTA"
        text={`Get Your Brand Cited Inside AI Answers – Book a Free Audit`}
      />

      <Footer />
    </>
  );
}

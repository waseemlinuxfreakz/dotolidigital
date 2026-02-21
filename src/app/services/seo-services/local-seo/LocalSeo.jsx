"use client";

import { useState } from "react";
import PopupForm from "../../../components/PopupForm";
import Footer from "../../../components/Footer";
import { HeroAllSection } from "../../../components/HeroAllSection";
import { ServiceDetailsSection } from "../../../components/ServiceDetailsSection";

export default function LocalSeo() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroAllSection
        id={"team-hero"}
        title1="Local SEO"
        title2="Services"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>

      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="What Is Local SEO?"
        text={`<span style="font-style: italic;">(AEO Direct Answer – 45–55 words)</span><br/><br/>
        Local SEO helps businesses appear in location-based search results, map listings, and nearby searches. It optimizes business information, local content, and geographic relevance so customers can find and contact you when searching for services in their area.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="Why Local SEO Is Essential for Businesses"
        text={`Local searches often have strong intent. People searching locally are usually ready to call, visit, or buy. Local SEO ensures your business appears at the right moment.<br/><br/>
        AI-driven search tools also rely on accurate local data to recommend nearby businesses.<br/><br/>
        <strong>According to a study, 76% of people who search on their smartphones for "something nearby" visit a related business within 24 hours, and 28% of those searches result in a purchase.</strong>`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="What Our Local SEO Services Include"
        text={`<strong>Google Business Profile Optimization</strong><br/>
        We optimize your listing for accuracy, relevance, and stronger engagement. This includes categories, services, photos, business info, and keyword-aligned descriptions. We also improve trust signals like reviews, responses, and ongoing updates to boost visibility.<br/><br/>

        <strong>Local Keyword & Intent Targeting</strong><br/>
        We map high-intent local keywords to the pages that should rank for them. We align content with “near me” searches, service + city queries, and voice-style questions. This helps you capture local demand at the exact moment people are ready to act.<br/><br/>

        <strong>Map & Local Pack Visibility</strong><br/>
        We strengthen the signals Google uses to rank businesses in the local pack and Maps. That includes proximity relevance, category alignment, reviews, and location consistency. The result is more qualified calls, direction requests, and local visits from search.<br/><br/>

        <strong>Local Content & Authority Building</strong><br/>
        We create location-relevant content that proves where you work and what you do best. We build authority with local citations, consistent NAP details, and trusted mentions. This improves local trust, ranking stability, and coverage across multiple nearby areas.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="How Our Local SEO Process Works"
        text={`<ol>
          <li>Local visibility audit</li>
          <li>Business profile optimization</li>
          <li>Location-based content optimization</li>
          <li>Map ranking improvements</li>
          <li>Performance tracking</li>
        </ol>`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Benefits of Local SEO Services"
        text={`<ul>
          <li>Increased local visibility</li>
          <li>More calls and visits</li>
          <li>Higher trust in local markets</li>
          <li>Improved AI-driven local recommendations</li>
        </ul>`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="FAQs – Local SEO"
        text={`<strong>Does local SEO work for service-based businesses?</strong><br/>
        Yes. Local SEO is highly effective for service providers targeting specific areas.<br/><br/>

        <strong>How long does local SEO take?</strong><br/>
        Initial improvements may appear quickly, with stronger results building over time.<br/><br/>

        <strong>What is the difference between local SEO and traditional SEO?</strong><br/>
        Local SEO focuses on ranking a business for location-based searches (like “near me” or city names), while traditional SEO targets broader, non-location-specific searches to reach a wider audience.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="CTA"
        text={`Get Found by Local Customers – Book a Free Local SEO Audit`}
      />

      <Footer />
    </>
  );
}

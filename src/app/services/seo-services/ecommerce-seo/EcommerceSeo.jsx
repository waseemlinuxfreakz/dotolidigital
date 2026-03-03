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
// EcommerceSeo

export default function EcommerceSeo() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroAllSection
        id={"team-hero"}
        title1="eCommerce SEO"
        title2="Services"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>

      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="What is eCommerce SEO?"
        text={`eCommerce SEO optimizes online stores to rank product and category pages in search results. It focuses on transactional keywords, site structure, and user experience to attract buyers who are ready to purchase, increasing both traffic and revenue.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="Why eCommerce SEO Requires a Specialized Approach"
        text={`Online stores face unique challenges, including managing large inventories, avoiding duplicate content, and optimizing conversions. eCommerce SEO addresses these challenges while aligning with modern AI-driven search behavior.<br/><br/>
        <strong>According to a study, Organic search drives ~51% of website traffic, one of the biggest reasons SEO remains a primary growth channel for e-commerce.</strong>`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="What Our eCommerce SEO Services Include"
        text={`<strong>Product & Category Optimization</strong><br/>
        We optimize product titles, descriptions, and category pages for search intent and conversions.<br/><br/>

        <strong>Transactional Keyword Targeting</strong><br/>
        We focus on keywords that indicate purchase intent.<br/><br/>

        <strong>Site Structure & Navigation</strong><br/>
        We improve crawlability and user experience across large product catalogs.<br/><br/>

        <strong>Performance & UX Optimization</strong><br/>
        We enhance speed and usability to support both rankings and sales.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="How Our eCommerce SEO Process Works"
        text={`<ol>
          <li>Store SEO audit</li>
          <li>Keyword and intent mapping</li>
          <li>Product and category optimization</li>
          <li>Technical and performance improvements</li>
          <li>Continuous optimization</li>
        </ol>`}
      />

      <BenefitsPerformance
        data={{
          heading: "Benefits of eCommerce SEO Services",
          subText:
            "eCommerce SEO builds sustainable organic visibility that drives long-term sales growth.",
          benefits: [
            {
              title: "Increased product visibility",
              desc: "Improve rankings so your products appear in high-intent search results.",
            },
            {
              title: "Higher conversion rates",
              desc: "Attract qualified buyers who are ready to purchase.",
            },
            {
              title: "Sustainable organic sales growth",
              desc: "Generate consistent revenue without relying solely on paid traffic.",
            },
            {
              title: "Reduced dependency on paid ads",
              desc: "Lower acquisition costs by strengthening organic demand capture.",
            },
          ],
        }}
      />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Is eCommerce SEO different from regular SEO?",
            answer:
              "Yes. It focuses more on transactional intent, product structure, and conversions.",
          },
          {
            question: "Can SEO increase sales, not just traffic?",
            answer:
              "Yes. Proper eCommerce SEO targets buyers, not just visitors.",
          },
        ]}
      />

      <PerformanceCta
        onStrategyClick={() => setShowPopup(true)}
        title="Ready to Increase eCommerce Sales with SEO?"
        description={`eCommerce SEO helps your products rank for high-intent searches so you can drive qualified traffic and grow revenue. We optimize your store’s structure, category and product pages, and technical foundation to turn more searches into purchases.`}
      />

      <Footer />
    </>
  );
}

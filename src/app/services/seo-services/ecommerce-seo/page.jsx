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

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Benefits of eCommerce SEO Services"
        text={`<ul>
          <li>Increased product visibility</li>
          <li>Higher conversion rates</li>
          <li>Sustainable organic sales growth</li>
          <li>Reduced dependency on paid ads</li>
        </ul>`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="FAQs – eCommerce SEO"
        text={`<strong>Is eCommerce SEO different from regular SEO?</strong><br/>
        Yes. It focuses more on transactional intent, product structure, and conversions.<br/><br/>

        <strong>Can SEO increase sales, not just traffic?</strong><br/>
        Yes. Proper eCommerce SEO targets buyers, not just visitors.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="CTA"
        text={`Increase Organic Sales with a Free eCommerce SEO Audit`}
      />

      <Footer />
    </>
  );
}

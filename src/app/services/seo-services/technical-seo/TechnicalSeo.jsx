"use client";

import { useState } from "react";
import PopupForm from "../../../components/PopupForm";
import Footer from "../../../components/Footer";
import { HeroAllSection } from "../../../components/HeroAllSection";
import { ServiceDetailsSection } from "../../../components/ServiceDetailsSection";
// TechnicalSeo

export default function TechnicalSeo() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroAllSection
        id={"team-hero"}
        title1="Technical SEO "
        title2="Services"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>

      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="What Is Technical SEO?"
        text={`Technical SEO focuses on optimizing a website’s infrastructure so search engines and AI systems can crawl, index, and understand it efficiently. It improves site speed, mobile performance, indexing, and overall technical health, ensuring content can rank and appear in AI-generated search experiences.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="Why Technical SEO Matters Today"
        text={`Even the best content cannot rank if search engines struggle to access or understand a website. Technical SEO ensures your site meets modern performance standards required by search engines and AI-driven search systems.<br/><br/>
        As AI search relies heavily on structured, fast, and accessible websites, technical SEO has become the foundation of visibility.<br/><br/>
        <strong>According to a study, 53% of mobile visits are abandoned if a page takes longer than 3 seconds to load.</strong>`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="What Our Technical SEO Services Include"
        text={`<strong>Website Crawl & Indexing Optimization</strong><br/>
        We fix crawl errors, broken links, and indexing issues that prevent pages from appearing in search results.<br/><br/>
        <strong>Site Speed & Core Web Vitals</strong><br/>
        We optimize loading speed, interactivity, and visual stability to improve rankings and user experience.<br/><br/>
        <strong>Mobile & Responsive Optimization</strong><br/>
        Your site is optimized for mobile-first indexing and modern device performance.<br/><br/>
        <strong>Site Architecture & Internal Linking</strong><br/>
        We create clean URL structures and logical internal links that search engines and AI systems can easily understand.<br/><br/>
        <strong>Structured Data & Schema</strong><br/>
        We implement schema markup to help AI systems interpret content context and credibility.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="How Our Technical SEO Process Works"
        text={`<ol>
          <li>Full technical SEO audit</li>
          <li>Performance and crawl diagnostics</li>
          <li>Priority-based fixes</li>
          <li>Validation and testing</li>
          <li>Ongoing monitoring</li>
        </ol>`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Benefits of Technical SEO Services"
        text={`<ul>
          <li>Improved crawlability and indexing</li>
          <li>Faster website performance</li>
          <li>Better rankings and AI visibility</li>
          <li>Stronger foundation for content SEO</li>
        </ul>`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="FAQs – Technical SEO"
        text={`<strong>Is technical SEO a one-time task?</strong><br/>
        No. Technical SEO requires regular audits as websites evolve and search systems update.<br/><br/>
        <strong>Does technical SEO affect AI search visibility?</strong><br/>
        Yes. AI systems rely on technically sound websites to extract and trust information.<br/><br/>
        <strong>How to use technical SEO?</strong><br/>
        Technical SEO is used by optimizing a website’s technical setup so search engines can easily crawl, index, and understand it. This includes improving site speed, mobile usability, secure HTTPS, clean URLs, and fixing crawl errors.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="CTA"
        text={`Fix Hidden SEO Issues with a Free Technical SEO Audit`}
      />

      <Footer />
    </>
  );
}

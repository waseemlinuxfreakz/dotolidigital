"use client";

import { useState } from "react";
import PopupForm from "../../../components/PopupForm";
import Footer from "../../../components/Footer";
import { HeroAllSection } from "../../../components/HeroAllSection";
import { ServiceDetailsSection } from "../../../components/ServiceDetailsSection";
import PerformanceCta from "../../../components/PerformanceCta";
import { FAQSection } from "../../../components/FAQSection";
import BenefitsPerformance from "../../../components/BenefitsPerformance";
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

      <BenefitsPerformance
        data={{
          heading: "Benefits of Technical SEO Services",
          subText:
            "Technical SEO builds the foundation that allows search engines and AI systems to properly understand and rank your website.",
          benefits: [
            {
              title: "Improved crawlability and indexing",
              desc: "Ensure search engines can efficiently access and process your content.",
            },
            {
              title: "Faster website performance",
              desc: "Optimize speed and technical structure to enhance user experience.",
            },
            {
              title: "Better rankings and AI visibility",
              desc: "Strengthen technical signals that improve search and AI discoverability.",
            },
            {
              title: "Stronger foundation for content SEO",
              desc: "Create a stable base that supports long-term organic growth.",
            },
          ],
        }}
      />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Is technical SEO a one-time task?",
            answer:
              "No. Technical SEO requires regular audits as websites evolve and search systems update.",
          },
          {
            question: "Does technical SEO affect AI search visibility?",
            answer:
              "Yes. AI systems rely on technically sound websites to extract and trust information.",
          },
          {
            question: "How to use technical SEO?",
            answer:
              "Technical SEO is used by optimizing a website’s technical setup so search engines can easily crawl, index, and understand it. This includes improving site speed, mobile usability, secure HTTPS, clean URLs, and fixing crawl errors.",
          },
        ]}
      />

      <PerformanceCta
        onStrategyClick={() => setShowPopup(true)}
        title="Ready to Strengthen Your Website’s Technical Foundation?"
        description={`Technical SEO ensures your website is fast, crawlable, and optimized for search engines. We help businesses fix hidden issues, improve performance, and build a strong foundation for sustainable organic growth.`}
      />

      <Footer />
    </>
  );
}

"use client";

import { useState } from "react";
import Footer from "../../components/Footer";
import { HeroAllSection } from "../../components/HeroAllSection";
import PopupForm from "../../components/PopupForm";
import { ServiceDetailsSection } from "../../components/ServiceDetailsSection";
import { WhoWeAre } from "../../components/WhoWeAre";

export default function Page() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      <div className="seo-expert-hero">
        <HeroAllSection
          id={"team-hero"}
          title1="Outrank Your Competition with the Best "
          title2="SEO Expert Powered by AI, Driven by Results."
          description={`Dotoli Digital combines human expertise with AI precision<br/> to deliver smarter rankings, faster growth, <br/>and long-term online success.`}
          btn_text="Book a Free Strategy Call"
          onBtnClick={() => setShowPopup(true)}
        />
      </div>
      <div id="team-hero">
        <div className="container"></div>
      </div>
      <WhoWeAre
        title1=" Why this"
        title2="works:"
        img="kimg.png"
        paragraph={`<ul>
              <li><strong>Bold promise </strong>("Outrank Your Competition") captures attention immediately.</li>
              <li><strong>Keyword included </strong>("Best SEO Expert") for SEO strength.</li>
              <li><strong>AI advantage </strong>highlights innovation and modern strategy.</li>
              <li><strong>Result-focused </strong>("Driven by Results") builds trust.</li>
              </ul>`}
      />
      <ServiceDetailsSection
        headertag="h1"
        heading="Skyrocket Rankings with the Best SEO Expert at Dotoli Digital"
        text={`
          <p>Struggling to rank higher on Google or AI platforms while your competitors keep taking the spotlight?</p><br/>
          <p>Skyrocket rankings with the best <strong>SEO expert</strong> at Dotoli Digital and unlock the full potential of your online presence.</p><br/>
          <p>Our proven strategies go beyond quick fixes; we focus on sustainable growth, higher visibility, and turning clicks into loyal customers.</p><br/>
          <p>Whether you're a small business aiming to outrank competitors or an established brand looking for advanced SEO solutions, Dotoli Digital's expertise ensures measurable success.</p><br/>
          <p>With data-driven insights, cutting-edge tools, and personalized strategies, we help your business dominate search results and maximize ROI.</p>
          `}
      />

      <ServiceDetailsSection
        heading="Key Benefits of Working with Dotoli Digital's Best SEO Expert"
        text={`<ul>
              <li><strong>Comprehensive Website Audit</strong> → Every project begins with a deep technical and content audit to uncover hidden issues, missed opportunities, and growth potential. This ensures our strategy is built on solid foundations, not assumptions.</li>
              <li><strong>Higher & More Stable Google Rankings</strong> → Through white-hat, sustainable SEO practices, you can achieve not just first-page visibility but long-lasting positions.</li>
              <li><strong>Targeted Organic Traffic</strong> → Attract audiences actively searching for your products or services, increasing qualified leads and reducing wasted clicks.</li>
              <li><strong>Long-Term Content Strategy</strong> → We don't chase trends, we build authority. By focusing on low-volume, easy-to-rank keywords alongside competitive ones, we secure quick wins while gradually positioning your site for high-value, long-tail growth.</li>
              <li><strong>Smarter Keyword Prioritization</strong> → Our expert approach balances high-intent “money keywords” with niche opportunities that help you rank faster and steadily build topical authority.</li>
              <li><strong>Improved User Experience & Conversions</strong> → From site speed and mobile optimization to intuitive navigation, we ensure your visitors stay longer and convert more often.</li>
              <li><strong>Proven ROI & Growth</strong> → Every tactic is measurable, with transparent reporting that ties directly to business outcomes, not just vanity metrics.</li>
              <li><strong>Future-Proof SEO</strong> → Our strategies evolve with Google's algorithm updates, ensuring your site remains compliant, competitive, and resilient against sudden ranking drops.</li>
              </ul>`}
      />

      <WhoWeAre
        headertag="h3"
        smclass={"sm-right-wwa"}
        title1="Start Your SEO Success "
        title2="Story Today"
        img="qvv3.webp"
        paragraph={`Ready to outrank your competitors? Partner with the Best SEO Expert at Dotoli Digital and start growing your business today. `}
        btn_text="Get Your Free SEO Consultation"
        btn_link="/contact"
      />

      <ServiceDetailsSection
        img="/images/x1.webp"
        heading="Growth in Organic Keywords Across Multiple Assets"
        text="The screenshot highlights a positive trend in organic keyword performance across four different digital assets. One asset saw a significant increase to 13.4K keywords (+5.24%), while
                  others recorded even more impressive growth rates +66.43% (476 keywords), +58.33% (494 keywords), and +7.24% (741 keywords). This data reflects improved SEO visibility and content
                  performance, indicating successful optimization strategies and rising organic search presence."
      />
      <ServiceDetailsSection
        img="/images/x2.webp"
        heading="Growth in Organic Clicks & Impressions"
        text="The screenshot displays a positive upward trend in SEO performance over the past three months. Total organic clicks reached 13.3K, while impressions climbed to 1.48 million, reflecting increased visibility in search results. The overall trajectory indicates successful optimization efforts and rising organic reach."
      />
      <ServiceDetailsSection
        img="/images/x3.webp"
        heading="Surge in Referring Domains Signals Stronger Backlink Profile"
        text="The screenshot from Backlink Analytics shows a substantial rise in high-quality backlinks over the past 12 months. Referring domains increased from around 300 in July 2024 to nearly 750 by May 2025, with the most dramatic growth occurring between February and April 2025. This upward trend indicates successful link-building efforts, improved domain authority, and enhanced SEO strength for the root domain."
      />
      <ServiceDetailsSection
        img="/images/x4.webp"
        heading="Strong Growth in Organic Traffic"
        text="The Google Search Console data shows a notable increase in organic traffic over the past six months. Total clicks reached 56.6K and impressions soared to 3.25 million, with a CTR of 1.7% and an average position of 21.5. The trend reflects consistent performance and successful SEO efforts, boosting search visibility and user engagement across web search results."
      />
      <ServiceDetailsSection
        img="/images/x5.webp"
        heading="Ranking High-Volume Keywords in Top 10"
        text="This keyword performance snapshot highlights multiple high-volume keywords currently ranking in the top 10 search positions. The keywords have monthly search volumes ranging from 1.9K to 4.4K and keyword difficulty (KD) scores between 38 and 50, indicating moderate competition. Traffic percentages, although small, reflect consistent visibility. These metrics demonstrate an effective SEO strategy targeting commercial intent queries with strong potential for scaling organic traffic."
      />
      <ServiceDetailsSection
        img="/images/x6.webp"
        heading="High Traffic Achieved from Competitive, High-Volume Keywords"
        text="This snapshot shows strong organic traffic driven by a handful of high-search-volume keywords, even in high keyword difficulty (KD). One standout term delivers 19.9K clicks from a 301K search volume with an 86 KD%, highlighting success in highly competitive SERPs. Despite challenging KD values (mostly above 70), the performance demonstrates effective SEO and content strategies capable of ranking for valuable, high-intent queries."
      />
      <Footer />
    </>
  );
}

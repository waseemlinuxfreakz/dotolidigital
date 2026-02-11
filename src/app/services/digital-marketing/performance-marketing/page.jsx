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
        title1="Performance"
        title2="Marketing"
        description={``}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>

      {/* Performance Marketing */}
      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="Performance Marketing Services for Measurable Growth & ROI"
        text={`Performance marketing is not about spending more. It is about spending smarter. In a digital landscape driven by data, algorithms, and AI-powered platforms, businesses need marketing strategies that deliver clear, measurable results.<br/><br/>
        At Dotoli Digital, our performance marketing services focus on accountability. Every campaign, click, and conversion is tracked, optimized, and tied directly to business outcomes such as leads, sales, and revenue growth.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="What Is Performance Marketing?"
        text={`Performance marketing is a results-driven digital marketing approach in which advertisers pay for measurable actions, such as clicks, leads, or sales. It uses data, analytics, and continuous optimization to ensure marketing budgets generate real, trackable business results.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Why Performance Marketing Matters Today"
        text={`Digital platforms are crowded, competition is high, and ad costs continue to rise. Businesses can no longer afford marketing based on assumptions or vague metrics.<br/><br/>
        Performance marketing matters because it:<br/>
        <ul>
          <li>Focuses on ROI, not impressions</li>
          <li>Aligns marketing spend with outcomes</li>
          <li>Adapts quickly using real-time data</li>
          <li>Supports scalable and predictable growth</li>
        </ul><br/>
        AI-driven ad platforms reward relevance, engagement, and efficiency. Performance marketing ensures your campaigns meet these expectations.<br/><br/>
        Global advertising revenue is projected to hit ~$1.08 trillion in 2025, with digital accounting for ~73.2% of total ad spend, reflecting a continued shift to measurable online strategies.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Our Performance Marketing Approach"
        text={`<strong>Built on Data, Not Guesswork</strong><br/><br/>
        Every performance marketing campaign we run starts with data. We analyze audience behavior, intent signals, funnel performance, and platform algorithms to design strategies that convert.<br/><br/>
        Decisions are made using real performance metrics, not assumptions.<br/><br/>
        <strong>Optimized for Humans and Algorithms</strong><br/><br/>
        Performance marketing sits at the intersection of human psychology and platform algorithms. Our campaigns are designed to resonate with users while aligning with how ad systems prioritize relevance and efficiency.<br/><br/>
        This balance allows us to reduce wasted spend and improve results over time.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Performance Marketing Services We Offer"
        text={`Our performance marketing services are structured to support every stage of the customer journey.<br/><br/>
        <strong>Funnel-Based Campaign Strategy</strong><br/>
        We design campaigns around funnels, not just ads. Each stage of the funnel has a clear purpose, from awareness to conversion. This ensures traffic is nurtured instead of wasted.<br/><br/>
        <strong>Paid Media Optimization</strong><br/>
        We continuously optimize campaigns across paid channels to improve efficiency and performance. This includes:<br/>
        <ul>
          <li>Audience targeting and segmentation</li>
          <li>Bid and budget optimization</li>
          <li>Ad creative testing</li>
          <li>Placement and format optimization</li>
        </ul><br/>
        <strong>Conversion Tracking & Analytics</strong><br/>
        Performance marketing relies on accurate data. We implement:<br/>
        <ul>
          <li>Conversion tracking</li>
          <li>Event and goal setup</li>
          <li>Funnel analysis</li>
          <li>Performance dashboards</li>
        </ul><br/>
        This allows us to measure what actually drives results.<br/><br/>
        <strong>Continuous Testing & Optimization</strong><br/>
        No campaign is static. We test creatives, audiences, messaging, and funnels continuously to improve performance. Small optimizations compound into significant gains over time.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Platforms We Use for Performance Marketing"
        text={`Our performance marketing strategies are executed across high-intent platforms, including:<br/>
        <ul>
          <li>Google Ads</li>
          <li>Meta (Facebook & Instagram)</li>
          <li>Retargeting networks</li>
          <li>Conversion-focused landing pages</li>
        </ul><br/>
        Platform selection depends on audience behavior and business goals.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="How Our Performance Marketing Process Works"
        text={`<strong>1. Goal & KPI Definition</strong><br/>
        We begin by clearly defining what success looks like for your business. This includes setting measurable KPIs such as leads, cost per acquisition, revenue, or return on ad spend. Clear goals ensure that every campaign decision aligns with real business outcomes.<br/><br/>
        <strong>2. Audience & Intent Research</strong><br/>
        We analyze audience behavior, search intent, and platform data to identify who is most likely to convert. This research helps us target users at the right stage of the buying journey, rather than wasting budget on low-intent traffic.<br/><br/>
        <strong>3. Campaign & Funnel Setup</strong><br/>
        Campaigns are built around structured funnels, not isolated ads. We align messaging, creatives, and landing pages so users move smoothly from first interaction to conversion, improving efficiency and consistency.<br/><br/>
        <strong>4. Launch & Continuous Optimization</strong><br/>
        Once campaigns go live, we closely monitor performance metrics in real time. Budgets, bids, targeting, and creatives are adjusted continuously to improve results and reduce wasted spend as data accumulates.<br/><br/>
        <strong>5. Reporting, Insights & Scaling</strong><br/>
        We track performance against KPIs and extract actionable insights from campaign data. High-performing campaigns are scaled strategically, while underperforming elements are refined or replaced to maintain growth momentum.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Industries That Benefit Most from Performance Marketing"
        text={`Performance marketing is effective across many industries, including:<br/>
        <ul>
          <li>eCommerce</li>
          <li>SaaS & technology</li>
          <li>Professional services</li>
          <li>Healthcare</li>
          <li>Real estate</li>
          <li>Agencies</li>
        </ul><br/>
        Each industry requires a tailored funnel and targeting strategy.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Benefits of Our Performance Marketing Services"
        text={`<ul>
          <li>Measurable ROI</li>
          <li>Lower cost per lead or acquisition</li>
          <li>Better budget control</li>
          <li>Scalable growth</li>
          <li>Data-backed decision making</li>
          <li>Reduced marketing waste</li>
        </ul><br/>
        Performance marketing ensures every marketing dollar works harder.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Why Businesses Choose Dotoli Digital for Performance Marketing"
        text={`Businesses choose Dotoli Digital because we treat performance marketing as a system, not a set of ads.<br/><br/>
        Our strategies are:<br/>
        <ul>
          <li>Data-driven and transparent</li>
          <li>Focused on conversions, not vanity metrics</li>
          <li>Integrated with SEO, CRO, and automation</li>
          <li>Continuously optimized for changing algorithms</li>
        </ul><br/>
        We build performance marketing engines that improve over time.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Frequently Asked Questions"
        text={`<strong>What makes performance marketing different from traditional digital marketing?</strong><br/>
        Performance marketing focuses strictly on measurable results such as leads and sales, not just visibility or engagement.<br/><br/>
        <strong>How quickly can performance marketing deliver results?</strong><br/>
        Paid performance campaigns can generate results quickly, often within days, while optimization improves results over time.<br/><br/>
        <strong>Is performance marketing expensive?</strong><br/>
        It depends on goals and competition, but performance marketing allows better budget control and ROI tracking.<br/><br/>
        <strong>Can performance marketing work with SEO and AEO?</strong><br/>
        Yes. Performance marketing complements SEO and AEO by driving demand and supporting conversion funnels.<br/><br/>
        <strong>Do you provide ongoing performance marketing management?</strong><br/>
        Yes. Continuous management and optimization are essential for sustained performance.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Ready to Turn Marketing Spend into Measurable Results?"
        text={`Performance marketing removes guesswork and replaces it with clarity, data, and growth.<br/><br/>
        <strong>Get a Free Performance Marketing Audit</strong><br/>
        or<br/>
        <strong>Book a Strategy Call to Scale Faster</strong>`}
      />

      <Footer />
    </>
  );
}

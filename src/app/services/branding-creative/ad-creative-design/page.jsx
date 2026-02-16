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
        title1="Ad Creative"
        title2="Design"
        description={``}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>

      {/* Ad Creative Design */}
      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="Ad Creative Design Services That Drive Clicks, Engagement & Conversions"
        text={`Ads do not fail because of platforms. They fail because of weak creativity. In a world where users scroll fast and algorithms reward engagement, ad creatives must communicate value instantly and clearly.<br/><br/>
        At Dotoli Digital, our ad creative design services focus on creating visuals and messaging that stop the scroll, align with user intent, and drive measurable results across digital advertising platforms.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="What Is Ad Creative Design?"
        text={`Ad creative design is the process of creating visual and messaging assets used in digital advertisements to attract attention and encourage action. It includes imagery, graphics, video concepts, and copy structure designed to align with platform requirements, audience behavior, and campaign goals.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Why Ad Creative Design Matters More Than Ever"
        text={`Digital advertising platforms are crowded and highly competitive. Algorithms prioritize ads that generate engagement, relevance, and positive user interaction. Poor creative leads to higher costs and lower performance, regardless of targeting.<br/><br/>
        Ad creative design matters because it:
        <ul>
          <li>Increases click-through rates</li>
          <li>Reduces cost per click and acquisition</li>
          <li>Improves ad relevance scores</li>
          <li>Supports conversion-focused campaigns</li>
          <li>Enhances brand recognition</li>
        </ul><br/>
        Strong creativity makes advertising more efficient and scalable.`}
      />

      <ServiceDetailsSection
        img="/images/x10.webp"
        heading="Our Ad Creative Design Approach"
        text={`<strong>Built for Performance, Not Just Aesthetics</strong><br/><br/>
        Our ad creatives are designed to perform. Every visual element and message is created with a clear objective, whether that is clicks, leads, or sales.<br/><br/>
        <strong>Designed for Humans and Algorithms</strong><br/><br/>
        Ad creatives must resonate with users while meeting platform algorithm requirements. We design creatives that balance visual appeal, clarity, and engagement signals that platforms reward.`}
      />

      <ServiceDetailsSection
        img="/images/x11.webp"
        heading="Ad Creative Design Services We Offer"
        text={`Our ad creative design services support performance marketing across platforms.<br/><br/>
        <strong>Static Ad Design</strong><br/>
        We design scroll-stopping static creatives optimized for clarity, messaging, and engagement across digital ad platforms.<br/><br/>
        <strong>Video & Motion Ad Concepts</strong><br/>
        Short-form video and motion-based creatives are designed to communicate value quickly and maintain attention.<br/><br/>
        <strong>Platform-Specific Creative Optimization</strong><br/>
        Creatives are optimized for different platforms, formats, and placements to maximize performance.<br/><br/>
        <strong>Creative Testing & Iteration Support</strong><br/>
        We design multiple creative variations to support A/B testing and continuous optimization.`}
      />

      <ServiceDetailsSection
        img="/images/x12.webp"
        heading="How Our Ad Creative Design Process Works"
        text={`<strong>1. Campaign Goal & Audience Alignment</strong><br/>
        We understand campaign objectives and audience intent to ensure the creative aligns with user expectations.<br/><br/>
        <strong>2. Messaging & Creative Direction</strong><br/>
        We define creative angles, messaging hooks, and visual direction before design begins.<br/><br/>
        <strong>3. Creative Design & Production</strong><br/>
        Ad creatives are designed using platform best practices and performance principles.<br/><br/>
        <strong>4. Testing & Performance Feedback</strong><br/>
        Creatives are tested in live campaigns to gather performance insights.<br/><br/>
        <strong>5. Optimization & Scaling</strong><br/>
        High-performing creatives are refined and scaled, while underperforming assets are improved or replaced.`}
      />

      <ServiceDetailsSection
        img="/images/x13.webp"
        heading="Platforms We Design Ad Creatives For"
        text={`Our ad creative design services support major advertising platforms, including:
        <ul>
          <li>Google Ads</li>
          <li>Meta (Facebook & Instagram)</li>
          <li>LinkedIn Ads</li>
          <li>Display & retargeting networks</li>
        </ul><br/>
        Creative formats are adapted based on platform behavior and campaign goals.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Industries That Benefit from Ad Creative Design"
        text={`Ad creative design is valuable across industries, including:
        <ul>
          <li>eCommerce</li>
          <li>SaaS and technology</li>
          <li>Professional services</li>
          <li>Healthcare</li>
          <li>Real estate</li>
          <li>Agencies and startups</li>
        </ul><br/>
        Any business running ads benefits from strong creative.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Benefits of Our Ad Creative Design Services"
        text={`<ul>
          <li>Higher click-through rates</li>
          <li>Better ad engagement</li>
          <li>Lower advertising costs</li>
          <li>Stronger campaign performance</li>
          <li>Improved brand consistency</li>
          <li>Faster creative iteration</li>
        </ul><br/>
        Effective ad creative turns ad spend into results.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Why Businesses Choose Dotoli Digital for Ad Creative Design"
        text={`Businesses choose Dotoli Digital because we design creatives with intent.<br/><br/>
        Our ad creative services are:
        <ul>
          <li>Performance-focused</li>
          <li>Data-informed</li>
          <li>Aligned with branding and messaging</li>
          <li>Optimized for continuous testing</li>
        </ul><br/>
        We help brands create ad creatives that perform consistently.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Frequently Asked Questions"
        text={`<strong>Do you design ads for different platforms?</strong><br/>
        Yes. We design platform-specific creatives optimized for each advertising environment.<br/><br/>
        <strong>Can ad creative really impact ad performance?</strong><br/>
        Yes. Creative quality directly affects engagement, cost, and conversion rates.<br/><br/>
        <strong>Do you support creative testing?</strong><br/>
        Yes. We design multiple creative variations for A/B testing and optimization.<br/><br/>
        <strong>Do you provide ad copy as well?</strong><br/>
        Yes. We help structure messaging and headlines for better performance.<br/><br/>
        <strong>Can ad creative support both branding and conversions?</strong><br/>
        Yes. Strong creative balances brand consistency with performance goals.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Ready to Improve Ad Performance with Better Creative?"
        text={`Your ads are only as strong as their creative. We help businesses design ad creatives that attract attention and drive action.<br/><br/>
        <strong>Get a Free Ad Creative Review</strong><br/>
        or<br/>
        <strong>Book an Ad Creative Strategy Call</strong>`}
      />

      <Footer />
    </>
  );
}

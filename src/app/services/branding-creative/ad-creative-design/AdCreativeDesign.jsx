"use client";
import { useState } from "react";
import PopupForm from "../../../components/PopupForm";
import Footer from "../../../components/Footer";
import { HeroAllSection } from "../../../components/HeroAllSection";
import { ServiceDetailsSection } from "../../../components/ServiceDetailsSection";
import PerformanceCta from "../../../components/PerformanceCta";
import { FAQSection } from "../../../components/FAQSection";
import WhyChooseSection from "../../../components/WhyChooseSection";
import BenefitsPerformance from "../../../components/BenefitsPerformance";
import IndustriesSection from "../../../components/IndustriesSection";
import ProcessTimeline from "../../../components/ProcessTimeline";
// ad-creative-design

export default function AdCreativeDesign() {
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

      <ProcessTimeline
        data={{
          heading: "How Our Ad Creative Design Process Works",
          steps: [
            {
              title: "Campaign Goal & Audience Alignment",
              desc: "We understand campaign objectives and audience intent to ensure the creative aligns with user expectations.",
            },
            {
              title: "Messaging & Creative Direction",
              desc: "We define creative angles, messaging hooks, and visual direction before design begins.",
            },
            {
              title: "Creative Design & Production",
              desc: "Ad creatives are designed using platform best practices and performance principles.",
            },
            {
              title: "Testing & Performance Feedback",
              desc: "Creatives are tested in live campaigns to gather performance insights.",
            },
            {
              title: "Optimization & Scaling",
              desc: "High-performing creatives are refined and scaled, while underperforming assets are improved or replaced.",
            },
          ],
        }}
      />

      <IndustriesSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          heading: "Industries That Benefit from Ad Creative Design",
          subText:
            "Ad creative design is valuable across industries, including:",
          industries: [
            "eCommerce",
            "SaaS and Technology",
            "Professional Services",
            "Healthcare",
            "Real Estate",
            "Agencies and Startups",
          ],
          note: "Any business running ads benefits from strong creative.",
          ctaText: "Book a Free Strategy Call",
        }}
      />

      <BenefitsPerformance
        data={{
          heading: "Benefits of Our Ad Creative Design Services",
          subText: "Effective ad creative turns ad spend into results.",
          benefits: [
            {
              title: "Higher click-through rates",
              desc: "Compelling visuals and messaging increase user interaction.",
            },
            {
              title: "Better ad engagement",
              desc: "Creative concepts designed to capture and retain attention.",
            },
            {
              title: "Lower advertising costs",
              desc: "Improved relevance and performance reduce cost per result.",
            },
            {
              title: "Stronger campaign performance",
              desc: "Creative assets aligned with clear performance objectives.",
            },
            {
              title: "Improved brand consistency",
              desc: "Maintain cohesive visuals and messaging across campaigns.",
            },
            {
              title: "Faster creative iteration",
              desc: "Structured testing enables rapid refinement and optimization.",
            },
          ],
        }}
      />

      <WhyChooseSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          pillText: "Ad creative design, built with intent",
          title: "Why businesses choose",
          highlightText: "Dotoli Digital for Ad Creative Design",
          subText:
            "Businesses choose Dotoli Digital because we design creatives with intent.",

          ctaText: "Book a Free Strategy Call",

          miniCards: [
            { k: "Performance", v: "Conversion-focused" },
            { k: "Insights", v: "Data-informed" },
            { k: "Testing", v: "Continuous optimization" },
          ],

          cards: [
            {
              title: "Performance-focused",
              desc: "Creatives are designed to drive engagement, clicks, and conversions.",
            },
            {
              title: "Data-informed",
              desc: "Design decisions are guided by campaign insights and testing results.",
            },
            {
              title: "Aligned with branding & messaging",
              desc: "Ad creatives stay consistent with brand identity and core messaging.",
            },
            {
              title: "Optimized for continuous testing",
              desc: "We create variations that support structured A/B testing and improvement.",
            },
          ],

          outcome:
            "We help brands create ad creatives that perform consistently.",
        }}
      />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Do you design ads for different platforms?",
            answer:
              "Yes. We design platform-specific creatives optimized for each advertising environment.",
          },
          {
            question: "Can ad creative really impact ad performance?",
            answer:
              "Yes. Creative quality directly affects engagement, cost, and conversion rates.",
          },
          {
            question: "Do you support creative testing?",
            answer:
              "Yes. We design multiple creative variations for A/B testing and optimization.",
          },
          {
            question: "Do you provide ad copy as well?",
            answer:
              "Yes. We help structure messaging and headlines for better performance.",
          },
          {
            question: "Can ad creative support both branding and conversions?",
            answer:
              "Yes. Strong creative balances brand consistency with performance goals.",
          },
        ]}
      />

      <PerformanceCta
        onStrategyClick={() => setShowPopup(true)}
        title="Ready to Improve Ad Performance with Better Creative?"
        description={`Your ads are only as strong as their creative. We help businesses design ad creatives that attract attention and drive action.`}
      />

      <Footer />
    </>
  );
}

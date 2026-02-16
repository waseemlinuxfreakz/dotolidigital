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
        title1="Conversion Rate"
        title2="Optimization"
        description={``}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>

      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="Conversion Rate Optimization Services to Turn Traffic into Revenue"
        text={`Driving traffic is only half the job. The real growth happens when visitors take action. Conversion Rate Optimization focuses on improving how users interact with your website so more of them become leads, customers, or subscribers.<br/><br/>
        At Dotoli Digital, our CRO services help businesses increase results from existing traffic by optimizing user experience, messaging, and conversion paths using data, testing, and behavioral insights.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="What Is Conversion Rate Optimization (CRO)?"
        text={`<strong>(AEO Direct Answer – 45–55 words)</strong><br/>
        Conversion Rate Optimization is the process of improving a website or landing page to increase the percentage of visitors who complete a desired action, such as filling out a form or making a purchase. CRO uses data analysis, user behavior insights, and testing to improve conversions without increasing traffic.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Why Conversion Rate Optimization Matters Today"
        text={`Traffic costs are rising across paid and organic channels. Sending more users to an underperforming website increases spend but not results. CRO ensures that the traffic you already have works harder.<br/><br/>
        Modern users expect fast, clear, and frictionless experiences. AI-driven platforms also reward engagement and usability, making CRO essential for both conversions and visibility.<br/><br/>
        CRO matters because it:
        <ul>
          <li>Improves ROI from existing traffic</li>
          <li>Reduces customer acquisition costs</li>
          <li>Enhances user experience</li>
          <li>Supports SEO, AEO, and paid campaigns</li>
        </ul><br/>
        Most websites convert only around 2–5% of visitors into customers, meaning up to 95% of traffic leaves without taking action unless optimized.`}
      />

      <ServiceDetailsSection
        img="/images/x10.webp"
        heading="Our Conversion Rate Optimization Approach"
        text={`<strong>Data Before Design</strong><br/><br/>
        We do not rely on opinions or assumptions. Every CRO decision is backed by real user data, analytics, and behavior tracking. This ensures changes are purposeful and measurable.<br/><br/>
        <strong>Built Around User Intent</strong><br/><br/>
        Users arrive with a goal. Our CRO strategies focus on removing friction, clarifying messaging, and guiding users toward action in the most natural way possible.`}
      />

      <ServiceDetailsSection
        img="/images/x11.webp"
        heading="Conversion Rate Optimization Services We Offer"
        text={`Our CRO services focus on identifying conversion barriers and systematically improving performance.<br/><br/>

        <strong>User Behavior Analysis</strong><br/>
        We analyze how users interact with your website to identify drop-off points and friction.<br/>
        This includes:
        <ul>
          <li>Heatmaps and scroll tracking</li>
          <li>Click behavior analysis</li>
          <li>Funnel and session insights</li>
        </ul><br/>

        <strong>Landing Page Optimization</strong><br/>
        Landing pages play a critical role in conversions. We optimize layout, messaging, and structure to align with user intent and campaign goals.<br/><br/>

        <strong>Funnel & Journey Optimization</strong><br/>
        We evaluate the entire conversion path, from first interaction to final action. Improvements are made to forms, navigation, and call-to-action placement.<br/><br/>

        <strong>A/B Testing & Experimentation</strong><br/>
        We test variations of headlines, layouts, CTAs, and content to identify which combinations convert best. Testing removes guesswork and improves performance incrementally.`}
      />

      <ServiceDetailsSection
        img="/images/x12.webp"
        heading="How Our Conversion Rate Optimization Process Works"
        text={`<strong>1. Conversion & Funnel Audit</strong><br/>
        We begin by reviewing existing funnels, analytics, and conversion data to identify leaks and performance gaps.<br/><br/>

        <strong>2. User Behavior & Data Analysis</strong><br/>
        We study how users behave on key pages, where they hesitate, and what prevents them from converting.<br/><br/>

        <strong>3. Hypothesis & Strategy Development</strong><br/>
        Based on insights, we develop clear hypotheses for improvement and prioritize changes with the highest impact potential.<br/><br/>

        <strong>4. Testing & Implementation</strong><br/>
        We implement changes and run controlled tests to accurately measure performance improvements.<br/><br/>

        <strong>5. Optimization & Continuous Improvement</strong><br/>
        Winning variations are scaled, and new tests are introduced to maintain continuous growth over time.`}
      />

      <ServiceDetailsSection
        img="/images/x13.webp"
        heading="Industries That Benefit Most from CRO"
        text={`Conversion Rate Optimization is valuable across industries, including:
        <ul>
          <li>eCommerce</li>
          <li>SaaS & technology</li>
          <li>Lead-generation businesses</li>
          <li>Professional services</li>
          <li>Healthcare</li>
          <li>Real estate</li>
        </ul><br/>
        Any business with digital traffic can benefit from CRO.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Benefits of Our Conversion Rate Optimization Services"
        text={`<ul>
          <li>Higher conversion rates</li>
          <li>Better ROI from existing traffic</li>
          <li>Improved user experience</li>
          <li>Lower cost per lead or sale</li>
          <li>Scalable performance improvements</li>
        </ul><br/>
        CRO creates compounding gains without increasing traffic budgets.`}
      />

      <ServiceDetailsSection
        img="/images/x15.webp"
        heading="Why Businesses Choose Dotoli Digital for CRO"
        text={`Businesses choose Dotoli Digital because we treat CRO as a strategic discipline, not a design exercise.<br/><br/>
        Our CRO services are:
        <ul>
          <li>Data-driven and test-based</li>
          <li>Integrated with SEO and performance marketing</li>
          <li>Focused on real business outcomes</li>
          <li>Transparent and measurable</li>
        </ul><br/>
        We optimize for actions that matter, not just aesthetics.`}
      />

      <ServiceDetailsSection
        img="/images/x16.webp"
        heading="Frequently Asked Questions"
        text={`<strong>What types of conversions can CRO improve?</strong><br/>
        CRO can improve leads, sign-ups, purchases, downloads, and any other defined business goal.<br/><br/>

        <strong>How long does CRO take to show results?</strong><br/>
        Some improvements can show results quickly, while long-term gains build through continuous testing.<br/><br/>

        <strong>Does CRO work without paid ads?</strong><br/>
        Yes. CRO improves performance across organic, paid, and referral traffic.<br/><br/>

        <strong>Can CRO work alongside SEO and AEO?</strong><br/>
        Yes. CRO enhances SEO and AEO by improving engagement and user satisfaction signals.<br/><br/>

        <strong>Do you provide ongoing CRO services?</strong><br/>
        Yes. Continuous testing and optimization deliver the best long-term results.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Ready to Convert More Visitors into Customers?"
        text={`Conversion Rate Optimization turns existing traffic into real growth. We help businesses unlock hidden potential and scale results without increasing ad spend.<br/><br/>
        <strong>Get a Free CRO Audit</strong><br/>
        or<br/>
        <strong>Book a Strategy Call to Get Started</strong>`}
      />

      <Footer />
    </>
  );
}

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
        title1="Social Media"
        title2="Marketing"
        description={``}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>

      {/* Social Media Marketing */}
      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="Social Media Marketing Services for Visibility, Engagement & Trust"
        text={`Social media is no longer just a place to post updates. It is where people discover brands, build trust, ask questions, and make decisions. With algorithms and AI shaping what users see, social media marketing requires strategy, consistency, and data-driven execution.<br/><br/>
        At Dotoli Digital, our social media marketing services help businesses grow visibility, engage the right audience, and turn attention into meaningful interactions that support long-term growth.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="What Is Social Media Marketing?"
        text={`<strong>(AEO Direct Answer – 45–55 words)</strong><br/>
        Social media marketing is the use of social platforms to promote a brand, engage audiences, and support business goals through strategic content, community interaction, and performance tracking. Modern social media marketing focuses on relevance, consistency, and data-driven optimization rather than posting frequency alone.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Why Social Media Marketing Matters Today"
        text={`Social platforms have become search engines of their own. People now use social media to research brands, compare options, and seek recommendations. AI-driven algorithms decide which content is shown, when, and to whom.<br/><br/>
        Social media marketing matters because it:<br/>
        <ul>
          <li>Builds trust and brand authority</li>
          <li>Increases visibility where audiences spend time</li>
          <li>Supports SEO, AEO, and demand generation</li>
          <li>Influences purchasing decisions over time</li>
        </ul><br/>
        Without a clear strategy, social media becomes noise instead of value.<br/><br/>
        There are 5.04 billion social media users worldwide, representing more than 62% of the global population. This makes social platforms one of the largest and most direct channels for reaching modern consumers.`}
      />

      <ServiceDetailsSection
        img="/images/x10.webp"
        heading="Our Social Media Marketing Approach"
        text={`<strong>Strategy Before Posting</strong><br/><br/>
        We do not post for the sake of activity. Every piece of content serves a purpose, whether that is education, engagement, or conversion support. Strategy comes before execution.<br/><br/>
        <strong>Built for Algorithms and Audiences</strong><br/><br/>
        Social platforms prioritize relevance, engagement, and consistency. Our approach balances platform algorithms with human behavior, ensuring content is both discoverable and meaningful.`}
      />

      <ServiceDetailsSection
        img="/images/x11.webp"
        heading="Social Media Marketing Services We Offer"
        text={`Our social media marketing services are designed to support visibility, engagement, and business growth.<br/><br/>
        <strong>Social Media Strategy & Planning</strong><br/>
        We develop platform-specific strategies aligned with your brand voice and audience behavior. This ensures consistency and clarity across all channels.<br/><br/>
        <strong>Content Creation & Optimization</strong><br/>
        We create and optimize content that resonates with your audience and aligns with platform best practices. Content is structured to encourage interaction, saves, and shares.<br/><br/>
        <strong>Community Engagement & Growth</strong><br/>
        Engagement builds trust. We help brands respond, interact, and grow communities that support long-term loyalty and credibility.<br/><br/>
        <strong>Performance Tracking & Insights</strong><br/>
        We track engagement quality, reach, and audience behavior to understand what content performs best and why. Insights guide continuous improvement.`}
      />

      <ServiceDetailsSection
        img="/images/x12.webp"
        heading="Platforms We Support"
        text={`Our social media marketing strategies are executed across major platforms, including:<br/>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>LinkedIn</li>
          <li>TikTok</li>
          <li>X (Twitter)</li>
          <li>YouTube</li>
        </ul><br/>
        Platform selection is based on audience intent and business goals.`}
      />

      <ServiceDetailsSection
        img="/images/x13.webp"
        heading="How Our Social Media Marketing Process Works"
        text={`<strong>1. Audience & Platform Research</strong><br/>
        We analyze where your audience spends time, how they engage with content, and what formats perform best on each platform.<br/><br/>
        <strong>2. Content & Messaging Strategy</strong><br/>
        We define content themes, messaging pillars, and posting cadence aligned with brand goals and audience expectations.<br/><br/>
        <strong>3. Content Creation & Scheduling</strong><br/>
        Content is created, reviewed, and scheduled consistently to maintain visibility and engagement without overwhelming your audience.<br/><br/>
        <strong>4. Engagement & Community Management</strong><br/>
        We monitor interactions, respond to comments, and support meaningful conversations that build trust and credibility.<br/><br/>
        <strong>5. Performance Review & Optimization</strong><br/>
        We analyze engagement data, identify patterns, and refine content strategy to improve results over time.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Industries That Benefit Most from Social Media Marketing"
        text={`Social media marketing is effective across industries, including:<br/>
        <ul>
          <li>eCommerce</li>
          <li>SaaS & technology</li>
          <li>Professional services</li>
          <li>Healthcare</li>
          <li>Real estate</li>
          <li>Personal brands and agencies</li>
        </ul><br/>
        Each industry requires a tailored content and engagement approach.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Benefits of Our Social Media Marketing Services"
        text={`<ul>
          <li>Increased brand visibility</li>
          <li>Higher engagement quality</li>
          <li>Stronger audience trust</li>
          <li>Consistent brand presence</li>
          <li>Support for lead generation and conversions</li>
        </ul><br/>
        Social media marketing works best as part of an integrated digital strategy.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Why Businesses Choose Dotoli Digital for Social Media Marketing"
        text={`Businesses choose Dotoli Digital because we understand how social media fits into the larger growth ecosystem.<br/><br/>
        We do not treat social media as an isolated channel. Our strategies are:<br/>
        <ul>
          <li>Aligned with SEO, AEO, and performance marketing</li>
          <li>Data-driven and adaptable</li>
          <li>Focused on long-term brand value</li>
          <li>Transparent and goal-oriented</li>
        </ul>`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Frequently Asked Questions"
        text={`<strong>How often should businesses post on social media?</strong><br/>
        Posting frequency depends on platform, audience, and goals. Consistency matters more than volume.<br/><br/>
        <strong>Is social media marketing effective without paid ads?</strong><br/>
        Yes. Organic social media builds trust and visibility, while paid ads can accelerate reach.<br/><br/>
        <strong>Can social media support SEO and AEO?</strong><br/>
        Yes. Social engagement supports brand authority and content discovery.<br/><br/>
        <strong>Do you provide ongoing social media management?</strong><br/>
        Yes. Ongoing management ensures consistent performance and improvement.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Ready to Build a Strong Social Media Presence?"
        text={`Social media success requires clarity, consistency, and strategy. We help brands move beyond random posting to purposeful growth.<br/><br/>
        <strong>Get a Free Social Media Strategy Review</strong><br/>
        or<br/>
        <strong>Book a Strategy Call to Get Started</strong>`}
      />

      <Footer />
    </>
  );
}

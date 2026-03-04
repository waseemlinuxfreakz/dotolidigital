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

import PlatformsWeUse from "../../../components/PlatformsWeUse";
import {
  SiInstagram,
  SiFacebook,
  SiLinkedin,
  SiTiktok,
  SiX,
  SiYoutube,
} from "react-icons/si";

export default function SocialMediaMarketing() {
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

      <PlatformsWeUse
        onCtaClick={() => setShowPopup(true)}
        data={{
          heading: "Platforms We Support",
          subText:
            "Our social media marketing strategies are executed across major platforms, including:",
          note: "Platform selection is based on audience intent and business goals.",
          ctaText: "Book a Free Strategy Call",

          platforms: [
            {
              title: "Instagram",
              desc: "Visual-first platform ideal for brand storytelling, short-form content, and engagement.",
              icon: <SiInstagram />,
            },
            {
              title: "Facebook",
              desc: "Strong reach and community engagement through content, ads, and groups.",
              icon: <SiFacebook />,
            },
            {
              title: "LinkedIn",
              desc: "Best suited for B2B marketing, professional networking, and thought leadership.",
              icon: <SiLinkedin />,
            },
            {
              title: "TikTok",
              desc: "High-growth platform for short-form video content and viral brand exposure.",
              icon: <SiTiktok />,
            },
            {
              title: "X (Twitter)",
              desc: "Real-time conversations, updates, and brand voice engagement.",
              icon: <SiX />,
            },
            {
              title: "YouTube",
              desc: "Long-form and short-form video content that builds authority and audience trust.",
              icon: <SiYoutube />,
            },
          ],

          footText:
            "We select platforms based on where your audience is most active and where your brand can create the most impact.",
        }}
      />

      <ProcessTimeline
        data={{
          heading: "How Our Social Media Marketing Process Works",
          steps: [
            {
              title: "Audience & Platform Research",
              desc: "We analyze where your audience spends time, how they engage with content, and what formats perform best on each platform.",
            },
            {
              title: "Content & Messaging Strategy",
              desc: "We define content themes, messaging pillars, and posting cadence aligned with brand goals and audience expectations.",
            },
            {
              title: "Content Creation & Scheduling",
              desc: "Content is created, reviewed, and scheduled consistently to maintain visibility and engagement without overwhelming your audience.",
            },
            {
              title: "Engagement & Community Management",
              desc: "We monitor interactions, respond to comments, and support meaningful conversations that build trust and credibility.",
            },
            {
              title: "Performance Review & Optimization",
              desc: "We analyze engagement data, identify patterns, and refine content strategy to improve results over time.",
            },
          ],
        }}
      />

      <IndustriesSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          heading: "Industries That Benefit Most from Social Media Marketing",
          subText:
            "Social media marketing is effective across industries, including:",
          industries: [
            "eCommerce",
            "SaaS & Technology",
            "Professional Services",
            "Healthcare",
            "Real Estate",
            "Personal Brands and Agencies",
          ],
          note: "Each industry requires a tailored content and engagement approach.",
          ctaText: "Book a Free Strategy Call",
        }}
      />

      <BenefitsPerformance
        data={{
          heading: "Benefits of Our Social Media Marketing Services",
          subText:
            "Social media marketing works best as part of an integrated digital strategy.",
          benefits: [
            {
              title: "Increased brand visibility",
              desc: "Expand your reach and maintain consistent visibility across key platforms.",
            },
            {
              title: "Higher engagement quality",
              desc: "Attract meaningful interactions that reflect real audience interest.",
            },
            {
              title: "Stronger audience trust",
              desc: "Build credibility through consistent messaging and valuable content.",
            },
            {
              title: "Consistent brand presence",
              desc: "Maintain brand alignment and recognition across all channels.",
            },
            {
              title: "Support for lead generation and conversions",
              desc: "Turn engagement into measurable business outcomes.",
            },
          ],
        }}
      />

      <WhyChooseSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          pillText: "Social media marketing, built for growth",
          title: "Why businesses choose",
          highlightText: "Dotoli Digital",
          subText:
            "Businesses choose Dotoli Digital because we understand how social media fits into the larger growth ecosystem — not as an isolated channel, but as part of a connected strategy.",

          ctaText: "Book a Free Strategy Call",

          miniCards: [
            { k: "Alignment", v: "SEO + AEO + performance" },
            { k: "Clarity", v: "Transparent goals & reporting" },
            { k: "Value", v: "Long-term brand growth" },
          ],

          cards: [
            {
              title: "Aligned with SEO, AEO & performance marketing",
              desc: "Your social strategy supports search visibility, demand capture, and measurable acquisition — working alongside your wider marketing stack.",
            },
            {
              title: "Data-driven and adaptable",
              desc: "We use performance insights to refine creative, targeting, and content — staying flexible as trends and algorithms shift.",
            },
            {
              title: "Focused on long-term brand value",
              desc: "We build trust, authority, and consistency — so your brand compounds over time, not just in short bursts.",
            },
            {
              title: "Transparent and goal-oriented",
              desc: "Clear objectives, realistic KPIs, and reporting that shows what’s working, what’s not, and what we’re improving next.",
            },
          ],

          outcome:
            "We build social media systems that strengthen your brand and drive sustainable growth.",
        }}
      />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "How often should businesses post on social media?",
            answer:
              "Posting frequency depends on platform, audience, and goals. Consistency matters more than volume.",
          },
          {
            question: "Is social media marketing effective without paid ads?",
            answer:
              "Yes. Organic social media builds trust and visibility, while paid ads can accelerate reach.",
          },
          {
            question: "Can social media support SEO and AEO?",
            answer:
              "Yes. Social engagement supports brand authority and content discovery.",
          },
          {
            question: "Do you provide ongoing social media management?",
            answer:
              "Yes. Ongoing management ensures consistent performance and improvement.",
          },
        ]}
      />

      <PerformanceCta
        onStrategyClick={() => setShowPopup(true)}
        title="Ready to Build a Strong Social Media Presence?"
        description={`Social media success requires clarity, consistency, and strategy. We help brands move beyond random posting to purposeful growth.`}
      />

      <Footer />
    </>
  );
}

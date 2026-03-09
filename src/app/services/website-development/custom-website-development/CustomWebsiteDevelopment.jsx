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
import Link from "next/link";

export default function CustomWebsiteDevelopment() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroAllSection
        id={"team-hero"}
        title1="Custom Website"
        title2="Development"
        description={``}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>

      {/* Custom Website Development */}
      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="Custom Website Development Services Built for Performance & Growth"
        text={`Every business is different, and your website should reflect that. Template-based websites often limit performance, flexibility, and scalability. Custom website development gives you full control over how your website looks, works, and grows with your business.<br/><br/>
        At <Link href="/">Dotoli Digital</Link>, we build custom websites designed around your goals, users, and long-term growth strategy. Our focus is not just design, but performance, usability, SEO readiness, and conversion support.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="What Is Custom Website Development?"
        text={`Custom website development is the process of designing and building a website from the ground up based on specific business requirements. Unlike templates, custom websites offer greater flexibility, performance, scalability, and control, ensuring they align perfectly with brand identity, user needs, and growth objectives.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Why Choose Custom Website Development Over Templates"
        text={`Templates may look convenient, but they often come with limitations such as slow performance, rigid layouts, and unnecessary code. As businesses grow, these limitations become costly.<br/><br/>
        Custom website development matters because it:
        <ul>
          <li>Delivers faster load times</li>
          <li>Supports unique user journeys</li>
          <li>Scales with business needs</li>
          <li><Link href="/services/seo-services" >Improves SEO</Link> and AI search readiness</li>
          <li>Provides full control over features and integrations</li>
        </ul><br/>
        A custom website is an investment in long-term digital success.`}
      />

      <ServiceDetailsSection
        img="/images/x10.webp"
        heading="Our Custom Website Development Approach"
        text={`<strong>Built Around Your Business Goals</strong><br/><br/>
        We start by understanding what your website needs to achieve. Whether the goal is lead generation, brand authority, or <Link href="/services/digital-marketing/conversion-rate-optimization" >conversion optimization</Link>, the website is designed to support those outcomes.<br/><br/>
        <strong>Designed for Users, Search Engines & AI</strong><br/><br/>
        Our custom websites are structured for clarity and usability. Clean architecture and logical content hierarchy help users navigate easily while enabling search engines and AI systems to understand and rank your site effectively.`}
      />

      <ServiceDetailsSection
        img="/images/x11.webp"
        heading="Custom Website Development Services We Offer"
        text={`Our custom <Link href="/services/website-development" >website development services</Link> are comprehensive and flexible.<br/><br/>
        <strong>Custom Design & UX Development</strong><br/>
        We design unique interfaces that align with your brand identity and guide users toward action without confusion or friction.<br/><br/>
        <strong>Performance-Focused Development</strong><br/>
        Websites are developed using clean, efficient code to ensure fast loading speeds, stability, and responsiveness across devices.<br/><br/>
        <strong>SEO & AEO-Ready Structure</strong><br/>
        We build websites with SEO, AEO, and future AI search visibility in mind, including optimized site architecture and content structure.<br/><br/>
        <strong>Integrations & Scalability</strong><br/>
        Custom websites are built to <Link href="/services/crm-automation/crm-setup-integration" >integrate with CRMs</Link>, analytics, automation tools, and third-party platforms, ensuring long-term scalability.`}
      />

      <ProcessTimeline
        data={{
          heading: "How Our Custom Website Development Process Works",
          steps: [
            {
              title: "Discovery & Planning",
              desc: "We gather requirements, define goals, and map user journeys to ensure clarity before development begins.",
            },
            {
              title: "Wireframing & UX Design",
              desc: "We design layouts and flows that prioritize usability, accessibility, and conversion efficiency.",
            },
            {
              title: "Custom Design & Development",
              desc: "Designs are transformed into fully functional websites using clean code and performance best practices.",
            },
            {
              title: "Testing & Optimization",
              desc: "We test speed, responsiveness, functionality, and usability across devices and browsers.",
            },
            {
              title: "Launch & Ongoing Support",
              desc: "After launch, we provide support and optimization to ensure continued performance as needs evolve.",
            },
          ],
        }}
      />

      <IndustriesSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          heading: "Industries That Benefit from Custom Website Development",
          subText: "Custom websites are ideal for:",
          industries: [
            "SaaS & Technology Companies",
            "Professional Services",
            "eCommerce Brands",
            "Healthcare Organizations",
            "Real Estate Businesses",
            "Agencies and Startups",
          ],
          note: "Any business requiring flexibility and scalability benefits from custom development.",
          ctaText: "Book a Free Strategy Call",
        }}
      />

      <BenefitsPerformance
        data={{
          heading: "Benefits of Our Custom Website Development Services",
          subText:
            "Custom websites grow with your business instead of holding it back.",
          benefits: [
            {
              title: "Faster website performance",
              desc: "Optimized architecture ensures speed, stability, and responsiveness.",
            },
            {
              title: "Better user experience",
              desc: "Structured navigation and design improve usability and engagement.",
            },
            {
              title: "Higher conversion rates",
              desc: "Strategic layouts guide users toward meaningful actions.",
            },
            {
              title: "SEO and AI search readiness",
              desc: "Built with technical foundations that support search and AI visibility.",
            },
            {
              title: "Scalable architecture",
              desc: "Flexible systems designed to grow with traffic and feature demands.",
            },
            {
              title: "Full design and feature control",
              desc: "Custom development allows complete flexibility and customization.",
            },
          ],
        }}
      />

      <WhyChooseSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          pillText: "Custom website development, built for results",
          title: "Why businesses choose",
          highlightText: "Dotoli Digital for Custom Website Development",
          subText:
            "Businesses choose Dotoli Digital because we focus on outcomes, not just design.",

          ctaText: "Book a Free Strategy Call",

          miniCards: [
            { k: "Performance", v: "Scalable build" },
            { k: "Visibility", v: "SEO & AEO aligned" },
            { k: "Conversions", v: "Action-focused design" },
          ],

          cards: [
            {
              title: "Built for performance and scalability",
              desc: "Websites are structured to handle growth while maintaining speed and stability.",
            },
            {
              title: (
                <>
                  Aligned with SEO and{" "}
                  <Link href="/services/seo-services/aeo-geo-optimization">
                    AEO strategies
                  </Link>
                </>
              ),
              desc: "Technical and content structure supports search visibility and AI discovery.",
            },
            {
              title: "Designed to support conversions",
              desc: "User journeys are built to guide visitors toward meaningful actions.",
            },
            {
              title: "Easy to maintain and expand",
              desc: "Flexible architecture allows future updates and feature expansion.",
            },
          ],

          outcome: "We build websites that work as long-term digital assets.",
        }}
      />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "Is a custom website better than using a template?",
            answer:
              "Yes. Custom websites offer better performance, flexibility, and scalability compared to templates.",
          },
          {
            question: "How long does custom website development take?",
            answer:
              "Timelines depend on complexity, but custom websites follow structured phases with clear milestones.",
          },
          {
            question: "Are custom websites SEO-friendly?",
            answer:
              "Yes. All custom websites are built with SEO, AEO, and performance best practices.",
          },
          {
            question: "Can custom websites integrate with CRM and tools?",
            answer:
              "Yes. Custom development allows seamless integration with third-party platforms and automation tools.",
          },
          {
            question: "Do you provide ongoing support after launch?",
            answer:
              "Yes. We offer maintenance and optimization services post-launch.",
          },
        ]}
      />

      <PerformanceCta
        onStrategyClick={() => setShowPopup(true)}
        title="Ready to Build a Website Tailored to Your Business?"
        description={`Your website should evolve as your business grows. Custom website development gives you the flexibility, performance, and scalability needed to support long-term success.`}
      />

      <Footer />
    </>
  );
}

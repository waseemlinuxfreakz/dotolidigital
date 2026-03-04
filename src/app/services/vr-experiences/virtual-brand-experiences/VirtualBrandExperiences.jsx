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
// VirtualBrandExperiences

export default function VirtualBrandExperiences() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroAllSection
        id={"team-hero"}
        title1="Virtual Brand"
        title2="Experiences"
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>

      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="Virtual Brand Experiences to Innovate, Engage & Connect"
        text={`As the digital landscape evolves, the need for innovative and engaging experiences becomes more important than ever. A Virtual Brand Experience allows businesses to stand out by creating immersive, interactive environments that capture users' attention, tell powerful brand stories, and connect with audiences more deeply. Whether you're showcasing products, promoting services, or telling your brand's story, Virtual Brand Experiences elevate how your customers engage with your brand.<br/><br/>
        At Dotoli Digital, we create Virtual Brand Experiences that give businesses a competitive edge by bringing their brands to life in a fully interactive, immersive virtual world. From immersive VR environments to virtual events, we design experiences that build lasting emotional connections and brand loyalty.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="What Is a Virtual Brand Experience?"
        text={`A Virtual Brand Experience is an immersive, interactive digital experience that allows users to engage with a brand in a virtual environment. It can involve virtual reality (VR), 3D simulations, or interactive digital experiences designed to connect audiences with a brand’s products, services, and identity in a meaningful way.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Why Virtual Brand Experiences Matter"
        text={`The digital world is crowded, and brands must capture attention and create lasting impressions quickly. Traditional marketing approaches, such as static ads or simple product descriptions, are no longer enough. Virtual Brand Experiences offer an innovative way to engage your audience by creating immersive environments that entertain, educate, and inspire.<br/><br/>
        Virtual Brand Experiences matter because they:<br/>
        <ul>
          <li>Create interactive and memorable brand moments</li>
          <li>Strengthen emotional connections with customers</li>
          <li>Improve brand recognition and loyalty</li>
          <li>Provide immersive storytelling opportunities</li>
          <li>Increase user engagement and interaction</li>
        </ul><br/>
        An impactful Virtual Brand Experience can differentiate your brand and transform how your customers perceive and connect with you.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Our Virtual Brand Experience Approach"
        text={`<strong>Tailored to Your Brand’s Goals & Story</strong><br/><br/>
        We believe that every brand has a unique story to tell. Our Virtual Brand Experiences are designed around your brand identity, messaging, and objectives. Whether you're launching a product, hosting a virtual event, or rebranding, we create customized experiences that align with your goals and values.<br/><br/>
        <strong>Built for Immersion & Engagement</strong><br/><br/>
        Immersive experiences engage users more deeply, encouraging exploration and interaction. We design Virtual Brand Experiences that captivate and guide your audience, keeping them engaged and invested in your brand’s narrative.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Virtual Brand Experience Services We Offer"
        text={`Our services are highly flexible and customizable to meet your specific needs.<br/><br/>
        <strong>Virtual Product Showcases</strong><br/>
        We build immersive virtual environments where users can explore your products in 3D, interact with features, and better understand their value. This experience is perfect for eCommerce brands or businesses with complex products that benefit from hands-on, virtual demonstrations.<br/><br/>
        <strong>Virtual Events & Exhibitions</strong><br/>
        Host virtual brand events, trade shows, or product launches that bring people together in a 3D environment. Our virtual events are designed to simulate in-person experiences, complete with interactive booths, live presentations, networking areas, and more.<br/><br/>
        <strong>Immersive Brand Storytelling</strong><br/>
        We help brands tell their story in an engaging way. Through virtual reality, 3D simulations, and interactive elements, we craft immersive experiences that build a deeper connection with your audience and communicate your brand’s values, mission, and vision.<br/><br/>
        <strong>Virtual Showrooms & 3D Experiences</strong><br/>
        Bring your products or services to life with a virtual showroom. We create 3D environments where customers can walk through your offerings, interact with products, and get a sense of your brand’s atmosphere and values.`}
      />

      <ProcessTimeline
        data={{
          heading: "How Our Virtual Brand Experience Process Works",
          steps: [
            {
              title: "Discovery & Goal Alignment",
              desc: "We start by understanding your brand, target audience, and business goals. This ensures that the experience we design aligns with your vision and objectives.",
            },
            {
              title: "Concept & Storyboarding",
              desc: "We create a clear roadmap for the experience, defining the key moments, interactions, and messaging that will guide users through the journey.",
            },
            {
              title: "Design & Development",
              desc: "Using cutting-edge VR and 3D design tools, we build immersive virtual environments that are interactive, engaging, and visually stunning.",
            },
            {
              title: "Testing & Optimization",
              desc: "We test the experience to ensure smooth navigation, performance, and usability across devices. Any friction points are identified and refined.",
            },
            {
              title: "Launch & Ongoing Support",
              desc: "Once the experience is live, we monitor user interactions and provide ongoing support to ensure it continues to meet your business needs.",
            },
          ],
        }}
      />

      <IndustriesSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          heading: "Industries That Benefit from Virtual Brand Experiences",
          subText:
            "Virtual Brand Experiences are valuable for businesses across a wide range of industries, including:",
          industries: [
            "eCommerce and Retail",
            "SaaS and Technology",
            "Real Estate",
            "Automotive and Manufacturing",
            "Professional Services",
            "Entertainment and Media",
          ],
          note: "Any brand looking to innovate and engage in new, interactive ways can benefit from a Virtual Brand Experience.",
          ctaText: "Book a Free Strategy Call",
        }}
      />

      <BenefitsPerformance
        data={{
          heading: "Benefits of Our Virtual Brand Experience Services",
          subText:
            "A Virtual Brand Experience is more than just a marketing tool; it’s an opportunity to create lasting memories with your audience.",
          benefits: [
            {
              title: "Enhanced brand engagement and interaction",
              desc: "Create immersive environments that encourage active audience participation.",
            },
            {
              title: "Deeper emotional connection with your audience",
              desc: "Build meaningful brand relationships through memorable experiences.",
            },
            {
              title: "Increased brand awareness and loyalty",
              desc: "Strengthen recognition and long-term customer retention.",
            },
            {
              title: "Real-time analytics and user insights",
              desc: "Track engagement behavior to optimize performance and strategy.",
            },
            {
              title: "Scalable and flexible branding solutions",
              desc: "Design adaptable virtual platforms that grow with your brand.",
            },
          ],
        }}
      />

      <WhyChooseSection
        onCtaClick={() => setShowPopup(true)}
        data={{
          pillText: "Virtual brand experiences, built for impact",
          title: "Why businesses choose",
          highlightText: "Dotoli Digital for Virtual Brand Experiences",
          subText:
            "Businesses choose Dotoli Digital because we create immersive, impactful brand experiences that drive results.",

          ctaText: "Book a Free Strategy Call",

          miniCards: [
            { k: "Strategy", v: "Business-goal focused" },
            { k: "Experience", v: "Immersive & interactive" },
            { k: "Scalability", v: "Built to grow" },
          ],

          cards: [
            {
              title: "Strategically designed for business goals",
              desc: "Every virtual experience is structured to support measurable growth objectives.",
            },
            {
              title: "Immersive, interactive, and engaging",
              desc: "We create digital environments that capture attention and deepen brand connection.",
            },
            {
              title: "Fully customized to your brand identity",
              desc: "Experiences are tailored to reflect your positioning, voice, and visual system.",
            },
            {
              title: "Built for long-term scalability",
              desc: "Virtual platforms are structured to evolve as your audience and business expand.",
            },
          ],

          outcome:
            "We help brands connect with their audiences in ways that drive real business value.",
        }}
      />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question:
              "What technology do you use to create virtual brand experiences?",
            answer:
              "We use cutting-edge VR, 3D modeling, and interactive design tools to create fully immersive brand experiences.",
          },
          {
            question:
              "Are Virtual Brand Experiences only for large businesses?",
            answer:
              "No. Virtual Brand Experiences can be scaled to fit businesses of all sizes and budgets.",
          },
          {
            question: "Can VR experiences be accessed on mobile devices?",
            answer:
              "Yes. While VR headsets provide the most immersive experience, many virtual experiences can also be accessed through mobile devices and browsers.",
          },
          {
            question:
              "How long does it take to create a Virtual Brand Experience?",
            answer:
              "The timeline depends on the complexity of the experience. Typically, projects take a few weeks to a few months, depending on the scope.",
          },
          {
            question: "Do you provide support after the launch?",
            answer:
              "Yes. We offer ongoing support, optimization, and updates to ensure your virtual experience continues to meet your business objectives.",
          },
        ]}
      />

      <PerformanceCta
        onStrategyClick={() => setShowPopup(true)}
        title="Ready to Create a Virtual Brand Experience That Engages & Inspires?"
        description={`Your brand’s story deserves to be told in a way that captures attention and leaves a lasting impact. We help businesses create immersive virtual experiences that drive engagement, trust, and conversions.`}
      />

      <Footer />
    </>
  );
}

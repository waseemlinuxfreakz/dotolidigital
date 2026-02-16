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
        title1="eCommerce Website"
        title2="Development"
        description={``}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />

      <div id="team-hero"></div>

      {/* eCommerce Website Development */}
      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="eCommerce Website Development Services Built to Sell & Scale"
        text={`An eCommerce website is more than an online store. It is a complete sales system that must attract users, build trust, and convert visitors into customers smoothly and efficiently. If an eCommerce website is slow, confusing, or poorly structured, even strong marketing efforts will fail to generate consistent sales.<br/><br/>
        At Dotoli Digital, our eCommerce website development services focus on building fast, scalable, and conversion-ready online stores that support SEO, digital marketing, and long-term revenue growth.`}
      />

      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="What is eCommerce Website Development?"
        text={`eCommerce website development is the process of designing and building online stores that allow businesses to sell products or services digitally. It focuses on performance, usability, secure payments, and scalable architecture to ensure customers can easily browse, purchase, and complete transactions across all devices.`}
      />

      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="Why eCommerce Website Development Matters Today"
        text={`Online shoppers expect speed, simplicity, and trust. Slow checkout, poor navigation, or unclear product information can lead to abandoned carts and lost revenue. Search engines and AI-driven platforms also prioritize e-commerce websites that providea strong user experience and technical performance.<br/><br/>
        eCommerce website development matters because it:
        <ul>
          <li>Directly impacts sales and revenue</li>
          <li>Supports SEO and product visibility</li>
          <li>Improves checkout and user experience</li>
          <li>Builds customer trust and credibility</li>
          <li>Enables scalability as product catalogs grow</li>
        </ul><br/>
        A well-built eCommerce website turns traffic into consistent sales.<br/><br/>
        Global e-commerce sales are projected to reach approximately $6.86 trillion in 2025, representing a sustained year-over-year increase and now accounting for more than 20% of total global retail sales.<br/><br/>
        Forecasts also indicate that e-commerce could reach nearly $7.89 trillion by 2028.`}
      />

      <ServiceDetailsSection
        img="/images/x10.webp"
        heading="Our eCommerce Website Development Approach"
        text={`<strong>Built for Conversions First</strong><br/><br/>
        Every design and development decision is made with conversions in mind. From product pages to checkout flows, we optimize the user journey to reduce friction and increase purchase completion rates.<br/><br/>
        <strong>Designed for Users, Search Engines & AI</strong><br/><br/>
        Our eCommerce websites are structured so users can find products easily, while search engines and AI systems can clearly understand product data, categories, and relevance. Clean architecture improves discoverability and performance.`}
      />

      <ServiceDetailsSection
        img="/images/x11.webp"
        heading="eCommerce Website Development Services We Offer"
        text={`Our eCommerce development services are flexible and customized to your business needs.<br/><br/>
        <strong>Custom eCommerce Design & Development</strong><br/>
        We build custom eCommerce websites tailored to your brand, products, and target audience. Layouts are designed to highlight products, guide decisions, and support conversions.<br/><br/>
        <strong>Product & Category Structure Optimization</strong><br/>
        We organize product categories, filters, and navigation to improve usability, SEO, and product discoverability.<br/><br/>
        <strong>Secure Payment & Checkout Integration</strong><br/>
        We implement secure, user-friendly checkout systems that support multiple payment methods and reduce cart abandonment.<br/><br/>
        <strong>Performance & Speed Optimization</strong><br/>
        eCommerce websites are optimized for fast loading times, smooth browsing, and reliable performance even with large product catalogs.<br/><br/>
        <strong>SEO & AEO-Ready eCommerce Architecture</strong><br/>
        We build eCommerce websites with SEO, AEO, and AI search readiness in mind, including clean URLs, structured product data, and scalable content frameworks.`}
      />

      <ServiceDetailsSection
        img="/images/x12.webp"
        heading="How Our eCommerce Website Development Process Works"
        text={`<strong>1. Business & Product Discovery</strong><br/>
        We understand your products, audience, pricing, and sales goals to design a store that supports growth.<br/><br/>
        <strong>2. Store Structure & UX Planning</strong><br/>
        We plan category hierarchy, product layouts, and user flows to simplify browsing and purchasing.<br/><br/>
        <strong>3. Custom Design & Development</strong><br/>
        The store is developed using clean code, responsive design, and scalable frameworks to ensure reliability.<br/><br/>
        <strong>4. Testing & Optimization</strong><br/>
        We test functionality, performance, checkout flow, and responsiveness across devices and browsers.<br/><br/>
        <strong>5. Launch & Growth Support</strong><br/>
        After launch, we support ongoing improvements, integrations, and optimization as your store grows.`}
      />

      <ServiceDetailsSection
        img="/images/x13.webp"
        heading="Industries That Benefit from eCommerce Website Development"
        text={`Our eCommerce development services support:
        <ul>
          <li>Retail brands</li>
          <li>DTC (Direct-to-Consumer) businesses</li>
          <li>Subscription-based businesses</li>
          <li>B2B product companies</li>
          <li>Digital product sellers</li>
        </ul><br/>
        Any business selling online benefits from a well-built eCommerce website.`}
      />

      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="Benefits of Our eCommerce Website Development Services"
        text={`<ul>
          <li>Higher conversion rates</li>
          <li>Faster website performance</li>
          <li>Improved product visibility</li>
          <li>Secure and smooth checkout experience</li>
          <li>Scalable store architecture</li>
          <li>SEO and AI search readiness</li>
        </ul><br/>
        A strong eCommerce website becomes a revenue engine, not just a storefront.`}
      />

      <ServiceDetailsSection
        img="/images/x13.webp"
        heading="Why Businesses Choose Dotoli Digital for eCommerce Development"
        text={`Businesses choose Dotoli Digital because we understand that eCommerce success depends on both technology and strategy.<br/><br/>
        Our eCommerce websites are:
        <ul>
          <li>Conversion-focused</li>
          <li>SEO and AEO ready</li>
          <li>Scalable and secure</li>
          <li>Built to support marketing and automation</li>
        </ul><br/>
        We create eCommerce platforms that grow with your business rather than limit it.`}
      />

      <ServiceDetailsSection
        img="/images/x13.webp"
        heading="Frequently Asked Questions"
        text={`<strong>Which platforms do you use for eCommerce development?</strong><br/>
        We work with modern, scalable platforms and custom solutions based on business requirements.<br/><br/>
        <strong>Can you redesign an existing eCommerce website?</strong><br/>
        Yes. We redesign and optimize existing stores to improve performance and conversions.<br/><br/>
        <strong>Are your eCommerce websites mobile-friendly?</strong><br/>
        Yes. All eCommerce websites are fully responsive and optimized for mobile users.<br/><br/>
        <strong>Do you provide ongoing support after launch?</strong><br/>
        Yes. We offer maintenance, performance optimization, and feature updates as needed.<br/><br/>
        <strong>Is SEO included in eCommerce website development?</strong><br/>
        Yes. SEO and AEO best practices are built into the development process from the start.`}
      />

      <ServiceDetailsSection
        img="/images/x13.webp"
        heading="Ready to Build an eCommerce Website That Sells?"
        text={`Your online store should work as hard as your marketing. We help businesses build eCommerce websites that convert visitors into customers and scale revenue.<br/><br/>
        <strong>Get a Free eCommerce Website Audit</strong><br/>
        or<br/>
        <strong>Book an eCommerce Strategy Call</strong>`}
      />

      <Footer />
    </>
  );
}

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import "./LandingPageHeader.css";

const LandingPageHeader = ({
  navLinks = [], // ডাইনামিক মেনু লিংকগুলোর অ্যারে
  ctaText = "Book a Call", // ডাইনামিক বাটনের নাম (ডিফল্ট)
  ctaHref = "#contact", // ডাইনামিক বাটনের লিংক (ডিফল্ট)
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth Scroll & Link Handler
  const handleLinkClick = (e, href) => {
    setIsMobileMenuOpen(false); // মেনুতে ক্লিক করলে মোবাইল মেনু বন্ধ হবে

    // যদি লিংকটি একই পেজের কোনো সেকশন হয় (যেমন: #contact)
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerOffset = 100; // হেডারের জন্য অফসেট
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header className="fixed-header-wrapper">
      <div className="header-pill">
        {/* LOGO (Updated with Image & Link) */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={140}
            height={60}
            priority
            className="header-logo-img"
          />
        </Link>

        {/* RIGHT SIDE GROUP: NAV + CTA BUTTON */}
        <div className="header-right-group">
          {/* DESKTOP NAV */}
          <nav className="desktop-nav">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA BUTTON */}
          <div className="desktop-cta">
            <a
              href={ctaHref}
              onClick={(e) => handleLinkClick(e, ctaHref)}
              className="btn-header-cta"
            >
              {ctaText}
              <span className="arrow-circle">
                <FaArrowRight size={12} />
              </span>
            </a>
          </div>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div className={`mobile-dropdown ${isMobileMenuOpen ? "open" : ""}`}>
        <nav className="mobile-nav-links">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="mobile-nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-cta-wrapper">
          {/* MOBILE CTA BUTTON */}
          <a
            href={ctaHref}
            onClick={(e) => handleLinkClick(e, ctaHref)}
            className="btn-mobile-cta"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </header>
  );
};

export default LandingPageHeader;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import "./LandingPageHeader.css";

const LandingPageHeader = ({
  navLinks = [],
  ctaText = "Book a Call",
  ctaHref = "#contact",
  onBtnClick, // <-- পপআপ ওপেন করার জন্য নতুন প্রপ
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth Scroll & Link Handler
  const handleLinkClick = (e, href) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerOffset = 100;
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
        {/* LOGO */}
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

        {/* RIGHT SIDE GROUP */}
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
            {/* যদি onBtnClick প্রপ থাকে, তাহলে বাটন রেন্ডার হবে, অন্যথায় লিংক */}
            {onBtnClick ? (
              <button
                onClick={onBtnClick}
                className="btn-header-cta"
                style={{
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                {ctaText}
                <span className="arrow-circle">
                  <FaArrowRight size={12} />
                </span>
              </button>
            ) : (
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
            )}
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

        {/* MOBILE CTA BUTTON */}
        <div className="mobile-cta-wrapper">
          {onBtnClick ? (
            <button
              onClick={() => {
                onBtnClick();
                setIsMobileMenuOpen(false); // পপআপ ওপেন হলে মোবাইল মেনু বন্ধ হবে
              }}
              className="btn-mobile-cta"
              style={{
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                width: "100%",
              }}
            >
              {ctaText}
            </button>
          ) : (
            <a
              href={ctaHref}
              onClick={(e) => handleLinkClick(e, ctaHref)}
              className="btn-mobile-cta"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default LandingPageHeader;

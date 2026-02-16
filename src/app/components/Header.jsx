"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { ThemeToggle } from "./ThemeToggle";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // ✅ separate submenu states
  const [digitalMarketingOpen, setDigitalMarketingOpen] = useState(false);
  const [websiteDevelopmentOpen, setWebsiteDevelopmentOpen] = useState(false);
  const [brandingCreativeOpen, setBrandingCreativeOpen] = useState(false);
  const [crmAutomationOpen, setCrmAutomationOpen] = useState(false);
  const [aiAgentsAutomationOpen, setAiAgentsAutomationOpen] = useState(false);
  const [vrExperiencesOpen, setVRExperiencesOpen] = useState(false);
  const [seoServicesOpen, setSeoServicesOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeAllSubmenus = () => {
    setDigitalMarketingOpen(false);
    setWebsiteDevelopmentOpen(false);
    setBrandingCreativeOpen(false);
    setCrmAutomationOpen(false);
    setAiAgentsAutomationOpen(false);
    setVRExperiencesOpen(false);
    setSeoServicesOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen((p) => !p);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setDropdownOpen(false);
    closeAllSubmenus();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);

    // ✅ Handle scroll locking
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <section className={`header-wrapper ${isMenuOpen ? "active" : ""}`}>
        <div className="container">
          <header className="header">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={140}
                height={60}
                priority
              />
            </Link>

            <div className="toggle-container">
              <ThemeToggle />
            </div>

            <div className="header-controls">
              <button
                type="button"
                onClick={toggleMenu}
                className="menu-button"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <span>{isMenuOpen ? "Close" : "Menu"}</span>
                <div className="menu-icon">
                  {isMenuOpen ? (
                    <RxCross1 style={{ fontSize: "1.25rem" }} />
                  ) : (
                    <RxHamburgerMenu style={{ fontSize: "1.25rem" }} />
                  )}
                </div>
              </button>
            </div>
          </header>
        </div>
      </section>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMenuOpen ? "visible" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="menu-container">
          <div className="menu-wrapper">
            <nav className="menu-nav">
              <ul>
                <li>
                  <Link
                    href="/our-work"
                    className="title-1 menu-link"
                    onClick={closeMenu}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    Our Work
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about-us"
                    className="title-1 menu-link"
                    onClick={closeMenu}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    About Us
                  </Link>
                </li>

                {/* Services Dropdown */}
                <li className="menu-dropdown">
                  <div className="services-link-wrapper">
                    <Link
                      href="/services"
                      className="title-1 menu-link"
                      onClick={closeMenu}
                      tabIndex={isMenuOpen ? 0 : -1}
                    >
                      Services
                    </Link>

                    <button
                      type="button"
                      className="dropdown-toggle-btn"
                      onClick={() => {
                        setDropdownOpen((prev) => {
                          const next = !prev;
                          // ✅ if closing OR opening fresh, reset submenus
                          closeAllSubmenus();
                          return next;
                        });
                      }}
                      tabIndex={isMenuOpen ? 0 : -1}
                      aria-label="Toggle Services Dropdown"
                    >
                      {dropdownOpen ? "▲" : "▼"}
                    </button>
                  </div>

                  {dropdownOpen && (
                    <ul className="dropdown-list">
                      {/* Digital Marketing with Submenu */}
                      <li className="dropdown-item-with-submenu">
                        <div className="submenu-title-row sm-submenu">
                          <Link
                            href="/services/digital-marketing"
                            className="dropdown-link"
                            onClick={closeMenu}
                          >
                            Digital Marketing
                          </Link>

                          <button
                            type="button"
                            className="dropdown-toggle-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              setDigitalMarketingOpen((prev) => !prev);
                              setWebsiteDevelopmentOpen(false);
                              setBrandingCreativeOpen(false);
                              setCrmAutomationOpen(false);
                              setAiAgentsAutomationOpen(false);
                            }}
                            aria-label="Toggle Digital Marketing Submenu"
                            tabIndex={isMenuOpen ? 0 : -1}
                          >
                            {digitalMarketingOpen ? "▲" : "▼"}
                          </button>
                        </div>

                        {digitalMarketingOpen && (
                          <ul className="sub-dropdown-list sub-dropdown-list-2">
                            <li>
                              <Link
                                href="/services/digital-marketing/performance-marketing"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                Performance Marketing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/digital-marketing/social-media-marketing"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                Social Media Marketing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/digital-marketing/conversion-rate-optimization"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                Conversion Rate Optimization
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>

                      {/* Website Development with Submenu */}
                      <li className="dropdown-item-with-submenu">
                        <div className="submenu-title-row sm-submenu">
                          <Link
                            href="/services/website-development"
                            className="dropdown-link"
                            onClick={closeMenu}
                          >
                            Website Development
                          </Link>

                          <button
                            type="button"
                            className="dropdown-toggle-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              setWebsiteDevelopmentOpen((prev) => !prev);
                              setDigitalMarketingOpen(false);
                              setBrandingCreativeOpen(false);
                              setCrmAutomationOpen(false);
                              setAiAgentsAutomationOpen(false);
                            }}
                            aria-label="Toggle Website Development Submenu"
                            tabIndex={isMenuOpen ? 0 : -1}
                          >
                            {websiteDevelopmentOpen ? "▲" : "▼"}
                          </button>
                        </div>

                        {websiteDevelopmentOpen && (
                          <ul className="sub-dropdown-list sub-dropdown-list-2">
                            <li>
                              <Link
                                href="/services/website-development/custom-website-development"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                Custom Website Development
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/website-development/ecommerce-website-development"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                eCommerce Website Development
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/website-development/landing-page-design-development"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                Landing Page Design & Development
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>

                      {/* 
                      SEO Services - seo-services
                      dropdown with 4 subservices:
                      URL: https://dotolidigital.com/services/seo/technical-seo/
                      URL: https://dotolidigital.com/services/seo/local-seo/
                      URL: https://dotolidigital.com/services/seo/ecommerce-seo/
                      URL: https://dotolidigital.com/services/seo/aeo-geo-optimization/
                      */}
                      <li className="dropdown-item-with-submenu">
                        <div className="submenu-title-row sm-submenu">
                          <Link
                            href="/services/seo-services"
                            className="dropdown-link"
                            onClick={closeMenu}
                          >
                            SEO Services
                          </Link>

                          <button
                            type="button"
                            className="dropdown-toggle-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSeoServicesOpen((prev) => !prev);
                              // toggle SEO submenu
                              setDigitalMarketingOpen(false);
                              setWebsiteDevelopmentOpen(false);
                              setBrandingCreativeOpen(false);
                              setCrmAutomationOpen(false);
                              setAiAgentsAutomationOpen(false);
                              setVRExperiencesOpen(false);
                            }}
                            aria-label="Toggle SEO Services Submenu"
                            tabIndex={isMenuOpen ? 0 : -1}
                          >
                            {seoServicesOpen ? "▲" : "▼"}
                          </button>
                        </div>

                        {seoServicesOpen && (
                          <ul className="sub-dropdown-list sub-dropdown-list-2">
                            <li>
                              <Link
                                href="/services/seo-services/technical-seo"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                Technical SEO
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/seo-services/local-seo"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                Local SEO
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/seo-services/ecommerce-seo"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                eCommerce SEO
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/seo-services/aeo-geo-optimization"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                AEO & Geo Optimization
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                      {/* 
                       VR Experiences
                       dropdown with 2-3 subservices:
                      URL: http://dotolidigital.com/services/vr-experiences/virtual-brand/
                      URL: http://dotolidigital.com/services/vr-experiences/vr-marketing-product-showcases/
                      */}
                      <li className="dropdown-item-with-submenu">
                        <div className="submenu-title-row sm-submenu">
                          <Link
                            href="/services/vr-experiences"
                            className="dropdown-link"
                            onClick={closeMenu}
                          >
                            VR Experiences
                          </Link>

                          <button
                            type="button"
                            className="dropdown-toggle-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              setVRExperiencesOpen((prev) => !prev);
                              setDigitalMarketingOpen(false);
                              setWebsiteDevelopmentOpen(false);
                              setBrandingCreativeOpen(false);
                              setCrmAutomationOpen(false);
                              setAiAgentsAutomationOpen(false);
                            }}
                            aria-label="Toggle VR Experiences Submenu"
                            tabIndex={isMenuOpen ? 0 : -1}
                          >
                            {vrExperiencesOpen ? "▲" : "▼"}
                          </button>
                        </div>

                        {vrExperiencesOpen && (
                          <ul className="sub-dropdown-list sub-dropdown-list-2">
                            <li>
                              <Link
                                href="/services/vr-experiences/virtual-brand-experiences"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                Virtual Brand Experiences
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/vr-experiences/vr-marketing-product-showcases"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                VR Marketing & Product Showcases
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>

                      {/* Branding & Creative with Submenu */}
                      <li className="dropdown-item-with-submenu">
                        <div className="submenu-title-row sm-submenu">
                          <Link
                            href="/services/branding-creative"
                            className="dropdown-link"
                            onClick={closeMenu}
                          >
                            Branding & Creative
                          </Link>

                          <button
                            type="button"
                            className="dropdown-toggle-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              setBrandingCreativeOpen((prev) => !prev);
                              setDigitalMarketingOpen(false);
                              setWebsiteDevelopmentOpen(false);
                              setCrmAutomationOpen(false);
                              setAiAgentsAutomationOpen(false);
                            }}
                            aria-label="Toggle Branding & Creative Submenu"
                            tabIndex={isMenuOpen ? 0 : -1}
                          >
                            {brandingCreativeOpen ? "▲" : "▼"}
                          </button>
                        </div>

                        {brandingCreativeOpen && (
                          <ul className="sub-dropdown-list sub-dropdown-list-2">
                            <li>
                              <Link
                                href="/services/branding-creative/brand-identity-design"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                Brand Identity Design
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/branding-creative/ui-ux-design"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                UI/UX Design
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/branding-creative/ad-creative-design"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                Ad Creative Design
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>

                      {/* CRM & Automation with Submenu */}
                      <li className="dropdown-item-with-submenu">
                        <div className="submenu-title-row sm-submenu">
                          <Link
                            href="/services/crm-automation"
                            className="dropdown-link"
                            onClick={closeMenu}
                          >
                            CRM & Automation
                          </Link>

                          <button
                            type="button"
                            className="dropdown-toggle-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              setCrmAutomationOpen((prev) => !prev);
                              setDigitalMarketingOpen(false);
                              setWebsiteDevelopmentOpen(false);
                              setBrandingCreativeOpen(false);
                              setAiAgentsAutomationOpen(false);
                            }}
                            aria-label="Toggle CRM & Automation Submenu"
                            tabIndex={isMenuOpen ? 0 : -1}
                          >
                            {crmAutomationOpen ? "▲" : "▼"}
                          </button>
                        </div>

                        {crmAutomationOpen && (
                          <ul className="sub-dropdown-list sub-dropdown-list-2">
                            <li>
                              <Link
                                href="/services/crm-automation/crm-setup-integration"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                CRM Setup & Integration
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/crm-automation/marketing-automation"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                Marketing Automation
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/crm-automation/sales-automation"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                Sales Automation
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>

                      {/* AI Agents & Chatbots with Submenu */}
                      <li className="dropdown-item-with-submenu">
                        <div className="submenu-title-row sm-submenu">
                          <Link
                            href="/services/ai-agents-automation"
                            className="dropdown-link"
                            onClick={closeMenu}
                          >
                            AI Agents & Chatbots
                          </Link>

                          <button
                            type="button"
                            className="dropdown-toggle-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              setAiAgentsAutomationOpen((prev) => !prev);
                              setDigitalMarketingOpen(false);
                              setWebsiteDevelopmentOpen(false);
                              setBrandingCreativeOpen(false);
                              setCrmAutomationOpen(false);
                            }}
                            aria-label="Toggle AI Agents & Chatbots Submenu"
                            tabIndex={isMenuOpen ? 0 : -1}
                          >
                            {aiAgentsAutomationOpen ? "▲" : "▼"}
                          </button>
                        </div>

                        {aiAgentsAutomationOpen && (
                          <ul className="sub-dropdown-list sub-dropdown-list-2">
                            <li>
                              <Link
                                href="/services/ai-agents-automation/ai-chatbot-development"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                AI Chatbot Development
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/services/ai-agents-automation/sales-lead-generation-ai-agents"
                                className="dropdown-link"
                                onClick={closeMenu}
                              >
                                Sales Lead Generation AI Agents
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link
                    href="/team"
                    className="title-1 menu-link"
                    onClick={closeMenu}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    Teams
                  </Link>
                </li>

                <li>
                  <Link
                    href="/blog"
                    className="title-1 menu-link"
                    onClick={closeMenu}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    Blog
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="title-1 menu-link"
                    onClick={closeMenu}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Social */}
            <div className="menu-social">
              <div className="info">
                <a
                  className="email"
                  href="mailto:info@dotolidigital.com"
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  info@dotolidigital.com
                </a>
                <a href="tel:9543838093" tabIndex={isMenuOpen ? 0 : -1}>
                  (954) 383-8093
                </a>
              </div>

              <div className="socials-m">
                <a
                  className="s-item"
                  target="_blank"
                  href="https://www.linkedin.com/company/dotoli-digital/"
                  tabIndex={isMenuOpen ? 0 : -1}
                  rel="noreferrer"
                >
                  <Image
                    src="/images/linkedin.svg"
                    alt="linkedin"
                    width={64}
                    height={64}
                  />
                </a>
                <a
                  className="s-item"
                  target="_blank"
                  href="https://www.instagram.com/dotolidigital/"
                  tabIndex={isMenuOpen ? 0 : -1}
                  rel="noreferrer"
                >
                  <Image
                    src="/images/instagram.svg"
                    alt="instagram"
                    width={64}
                    height={64}
                  />
                </a>
                <a
                  className="s-item"
                  target="_blank"
                  href="https://www.youtube.com/@DotoliDigital"
                  tabIndex={isMenuOpen ? 0 : -1}
                  rel="noreferrer"
                >
                  <Image
                    src="/images/youtube1.svg"
                    alt="youtube1"
                    width={64}
                    height={64}
                  />
                </a>
                <a
                  className="s-item"
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61578050977417"
                  tabIndex={isMenuOpen ? 0 : -1}
                  rel="noreferrer"
                >
                  <Image
                    src="/images/facebook.svg"
                    alt="facebook"
                    width={64}
                    height={64}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`menu-overlay ${isMenuOpen ? "visible" : ""}`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />
    </>
  );
}

export default Header;

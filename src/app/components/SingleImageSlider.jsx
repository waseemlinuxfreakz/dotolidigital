// src/app/components/SingleImageSlider.jsx
"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  A11y,
  Keyboard,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const slides = [
  { src: "/images/crm-slide1.png", alt: "CRM slide 1" },
  { src: "/images/crm-slide2.png", alt: "CRM slide 2" },
  { src: "/images/crm-slide3.jpg", alt: "CRM slide 3" },
];

export function SingleImageSlider() {
  return (
    <>
      <div className="container">
        <div className="sis-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y, Keyboard]}
            slidesPerView={1}
            loop
            centeredSlides
            speed={700}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            keyboard={{ enabled: true, onlyInViewport: true }}
            navigation={{ prevEl: ".crm-prev", nextEl: ".crm-next" }}
            pagination={{ el: ".crm-pagination", clickable: true }}
            breakpoints={{
              0: { spaceBetween: 12 },
              640: { spaceBetween: 16 },
              1024: { spaceBetween: 24 },
            }}
            className="sis-swiper"
          >
            {slides.map((s, i) => (
              <SwiperSlide key={s.src}>
                <div className="sis-media-frame">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    className="sis-media"
                    priority={i === 0}
                    sizes="(max-width: 1024px) 100vw, 1200px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* arrows inside image */}
          <div className="sis-nav-overlay">
            <button
              className="sis-nav-btn crm-prev"
              aria-label="Previous slide"
              type="button"
            >
              <IoChevronBack size={20} />
            </button>
            <button
              className="sis-nav-btn crm-next"
              aria-label="Next slide"
              type="button"
            >
              <IoChevronForward size={20} />
            </button>
          </div>

          {/* dots outside (below) */}
          <div className="crm-pagination" />
        </div>

        <div className="sis-ox-grid">
          <div className="text-box">
            <h2 className="title-4">
              Streamlining Sales & Marketing Success with HubSpot CRM
            </h2>
            <p className="text-1">
              At Dotoli Digital, we go beyond running ads—we build seamless
              systems that convert. With Complete HubSpot CRM Setup, we help
              businesses capture, organize, and nurture leads effortlessly. From
              deal pipelines to contact management, our expertise ensures every
              interaction is tracked, every opportunity is maximized, and your
              sales process runs smarter, not harder.
            </p>
          </div>

          <div className="text-box">
            <h2 className="title-4">
              AI-Powered Blog Automation for WordPress: Publish Smarter, Not
              Harder
            </h2>
            <p className="text-1">
              From content that writes and posts itself, to customer journeys
              powered by intelligent workflows—our AI Agents transform hours of
              manual work into seamless automation. If you can imagine it, we
              can automate it. Let’s build your growth engine together.
            </p>
          </div>
        </div>

        {/* ===== CSS (same file) ===== */}
        <style jsx>{`
          @media (max-width: 767px) {
            .sis-ox-grid {
              grid-template-columns: 1fr !important;
            }
          }
          .sis-ox-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            margin-top: 50px;
          }
          .sis-wrapper img.sis-media {
            border-radius: 32px;
          }

          .sis-swiper {
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 28px rgba(0, 0, 0, 0.18);
          }
          .sis-media-frame {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 9;
          }
          .sis-media {
            object-fit: cover;
          }

          .sis-nav-overlay {
            pointer-events: none;
            position: absolute;
            inset: 0;
            z-index: 50;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 12px;
          }

          /* default (light) arrow styles */
          .sis-nav-btn {
            pointer-events: auto;
            display: grid;
            place-items: center;
            width: 44px;
            height: 44px;
            border: 0;
            border-radius: 999px;
            color: #1e1e1e; /* arrow icon color (light theme) */
            background: rgba(255, 255, 255, 0.75); /* light bg on light theme */
            backdrop-filter: blur(2px);
            cursor: pointer;
            transition: background 0.2s ease, color 0.2s ease;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
          }
          .sis-nav-btn:hover {
            background: rgba(255, 255, 255, 0.95);
          }

          /* dots container outside */
          .crm-pagination {
            position: static;
            margin-top: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
          }

          @media (min-width: 640px) {
            .sis-nav-btn {
              width: 46px;
              height: 46px;
            }
          }
          @media (min-width: 1024px) {
            .sis-nav-btn {
              width: 48px;
              height: 48px;
            }
          }
        `}</style>

        {/* Theme-aware global overrides */}
        <style jsx global>{`
          /* Ensure Swiper doesn't absolute-position the custom container */
          .crm-pagination.swiper-pagination {
            position: static !important;
            width: auto !important;
            left: auto !important;
            bottom: auto !important;
            transform: none !important;
          }

          /* ===== Light theme (html:not(.dark)) ===== */
          html:not(.dark) .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: rgba(0, 0, 0, 0.25);
            opacity: 1;
            transition: transform 0.2s, background 0.2s;
          }
          html:not(.dark) .swiper-pagination-bullet-active {
            background: #0b67ff;
            transform: scale(1.15);
          }

          /* ===== Dark theme (html.dark) ===== */
          html.dark .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: rgba(255, 255, 255, 0.45);
            opacity: 1;
            transition: transform 0.2s, background 0.2s;
          }
          html.dark .swiper-pagination-bullet-active {
            background: #ffffff;
            transform: scale(1.15);
          }

          /* Dark theme arrow styles */
          html.dark .sis-nav-btn {
            color: #ffffff; /* icon */
            background: rgba(0, 0, 0, 0.35); /* darker glass for dark bg */
          }
          html.dark .sis-nav-btn:hover {
            background: rgba(0, 0, 0, 0.55);
          }
        `}</style>
      </div>
    </>
  );
}

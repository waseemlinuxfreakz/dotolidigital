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
  { src: "/images/crm-slide3.jpg", alt: "CRM slide 3" },
  { src: "/images/crm-slide4.jpg", alt: "CRM slide 4" },
];

export function SingleImageSlider1() {
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
            onSwiper={(swiper) => {
              const prev = document.querySelector(".crm-prev");
              const next = document.querySelector(".crm-next");
              const pag = document.querySelector(".crm-pagination");
              if (prev && next) {
                // @ts-ignore
                swiper.params.navigation.prevEl = prev;
                // @ts-ignore
                swiper.params.navigation.nextEl = next;
                swiper.navigation.init();
                swiper.navigation.update();
              }
              if (pag) {
                // @ts-ignore
                swiper.params.pagination.el = pag;
                swiper.pagination.init();
                swiper.pagination.update();
              }
            }}
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
                    className="sis-media" // 👈 now 'contain'
                    priority={i === 0}
                    sizes="(max-width: 1024px) 100vw, 1200px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* arrows inside (left/right center) */}
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

          {/* dots outside */}
          <div className="crm-pagination" />
        </div>
      </div>
      <br /> <br />
      <div className="container">
        <div className="sis-ox-grid">
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
      </div>
      {/* ===== CSS (same file) ===== */}
      <style jsx>{`
        .sis-wrapper {
          position: relative;
          margin: 0 auto;
        }
        .sis-swiper {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.18);
        }

        /* ইমেজ পুরো দেখাতে: fixed responsive height + object-fit: contain */
        .sis-media-frame {
          position: relative;
          width: 100%;
          /* 16:9 বাধ্য করি না; responsive height রাখি */
          height: clamp(240px, 56vw, 640px);
          /* letterbox-এর জন্য একটা ব্যাকগ্রাউন্ড */
          background: var(--frame-bg, #0b0b0b);
        }
        .sis-media {
          object-fit: contain; /* ✅ আর কাটবে না */
          object-position: center center;
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
        .sis-nav-btn {
          pointer-events: auto;
          display: grid;
          place-items: center;
          width: 44px;
          height: 44px;
          border: 0;
          border-radius: 999px;
          color: #1e1e1e;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(2px);
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
        }
        .sis-nav-btn:hover {
          background: rgba(255, 255, 255, 0.95);
        }

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
      {/* Theme-aware + Swiper overrides */}
      <style jsx global>{`
        .crm-pagination.swiper-pagination {
          position: static !important;
          width: auto !important;
          left: auto !important;
          bottom: auto !important;
          transform: none !important;
        }

        /* light theme bullets */
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

        /* dark theme bullets + frame bg + arrows */
        html.dark :root {
          --frame-bg: #0b0b0b;
        }
        html:not(.dark) :root {
          --frame-bg: #f4f4f4;
        }

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

        html.dark .sis-nav-btn {
          color: #ffffff;
          background: rgba(0, 0, 0, 0.35);
        }
        html.dark .sis-nav-btn:hover {
          background: rgba(0, 0, 0, 0.55);
        }
      `}</style>
    </>
  );
}

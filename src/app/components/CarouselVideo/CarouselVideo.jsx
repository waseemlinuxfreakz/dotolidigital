"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Autoplay মডিউল ইমপোর্ট করা হয়েছে
import { Navigation, Autoplay } from "swiper/modules";
import {
  FaPlay,
  FaArrowRight,
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import "swiper/css";
import "swiper/css/navigation";
import "./CarouselVideo.css";

const reelData = [
  {
    id: 1,
    category: "META ADS",
    title: "Stop Wasting $3K/Month on Meta Ads",
    bgImage: "/images/yt1.png",
    videoUrl: "https://www.youtube.com/embed/9kf57TUquEI",
  },
  {
    id: 2,
    category: "REAL ESTATE",
    title: "Marina Landings: Elite Marina Homes",
    bgImage: "/images/yt2.png",
    videoUrl: "https://www.youtube.com/embed/2znxs0OmI0U",
  },
  {
    id: 3,
    category: "SUCCESS STORY",
    title: "South Florida Contractor Doubles Deals",
    bgImage: "/images/yt3.png",
    videoUrl: "https://www.youtube.com/embed/JWpRYCz-hbY",
  },
  {
    id: 4,
    category: "CONTRACTOR SALES",
    title: "How Contractors Close More Jobs",
    bgImage: "/images/yt4.png",
    videoUrl: "https://www.youtube.com/embed/njsorqQz1Fc",
  },
  {
    id: 5,
    category: "LUXURY REAL ESTATE",
    title: "Selene Fort Lauderdale Oceanfront Condo",
    bgImage: "/images/yt5.png",
    videoUrl: "https://www.youtube.com/embed/yf1d29v4iRw",
  },
  {
    id: 6,
    category: "GOOGLE ADS",
    title: "Finding the Best Clients with Google Ads",
    bgImage: "/images/yt6.png",
    videoUrl: "https://www.youtube.com/embed/ABFFS53kqWI",
  },
  {
    id: 7,
    category: "VIDEO PRODUCTION",
    title: "The Forty Collection Reel Script",
    bgImage: "/images/yt7.png",
    videoUrl: "https://www.youtube.com/embed/pXIgrLpByaM",
  },
  {
    id: 8,
    category: "WELLNESS",
    title: "Rose Therapeutic Farm Goat Yoga",
    bgImage: "/images/yt8.png",
    videoUrl: "https://www.youtube.com/embed/kez6nKR6XCY",
  },
  {
    id: 9,
    category: "SUCCESS STORY",
    title: "Florida Demolition Experts Record Growth",
    bgImage: "/images/yt9.png",
    videoUrl: "https://www.youtube.com/embed/LELkDqKWpPo",
  },
  {
    id: 10,
    category: "PLASTIC SURGERY",
    title: "Restoralift Facelift Video",
    bgImage: "/images/yt10.png",
    videoUrl: "https://www.youtube.com/embed/t5mRTgMemc4",
  },
  {
    id: 11,
    category: "PLASTIC SURGERY",
    title: "Aestira's Unique Recovery Process",
    bgImage: "/images/yt11.png",
    videoUrl: "https://www.youtube.com/embed/1Di5pyUxyPk",
  },
  {
    id: 12,
    category: "PLASTIC SURGERY",
    title: "Restoralift Facelift Showcase",
    bgImage: "/images/yt12.png",
    videoUrl: "https://www.youtube.com/embed/a5Yhb70kde4",
  },
  {
    id: 13,
    category: "PLASTIC SURGERY",
    title: "Rhinoplasty Procedure Video",
    bgImage: "/images/yt13.png",
    videoUrl: "https://www.youtube.com/embed/MBM68MWXlpI",
  },
  {
    id: 14,
    category: "VEHICLE BUILDS",
    title: "Bronco & Defender Chassis",
    bgImage: "/images/yt14.png",
    videoUrl: "https://www.youtube.com/embed/cAePchQJl1c",
  },
  {
    id: 15,
    category: "LUXURY REAL ESTATE",
    title: "Only 4 Luxury Homes Left",
    bgImage: "/images/yt15.png",
    videoUrl: "https://www.youtube.com/embed/EIg-R76nZk4",
  },
];

/**






 */
const extendedReelData = [...reelData, ...reelData, ...reelData];

export default function CarouselVideo({ title }) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Modal Handlers
  const handleOpenVideo = (index) => {
    setActiveVideoIndex(index);
    document.body.style.overflow = "hidden";
  };

  const handleCloseVideo = () => {
    setActiveVideoIndex(null);
    document.body.style.overflow = "auto";
  };

  const handleNextVideo = (e) => {
    e.stopPropagation();
    setActiveVideoIndex((prev) => (prev + 1) % extendedReelData.length);
  };

  const handlePrevVideo = (e) => {
    e.stopPropagation();
    setActiveVideoIndex((prev) =>
      prev === 0 ? extendedReelData.length - 1 : prev - 1,
    );
  };

  return (
    <>
      <div className="carousel-video-section">
        <h2 className="cv-centered-title">{title}</h2>

        {/* --- Carousel --- */}
        <div className="cv-swiper-wrapper">
          <Swiper
            // Autoplay যুক্ত করা হয়েছে
            modules={[Navigation, Autoplay]}
            centeredSlides={true}
            loop={true}
            speed={800} // একটু স্মুথ ট্রানজিশনের জন্য স্পিড বাড়ানো হয়েছে
            autoplay={{
              delay: 3000, // ৩ সেকেন্ড পর পর স্লাইড চেঞ্জ হবে
              disableOnInteraction: false, // ইউজার ক্লিক করার পরও অটো-প্লে চলতে থাকবে
              pauseOnMouseEnter: true, // মাউস রাখলে অটো-প্লে পজ হবে
            }}
            slidesPerView="auto"
            spaceBetween={0}
            initialSlide={3}
            navigation={{
              nextEl: ".cv-nav-btn-next",
              prevEl: ".cv-nav-btn-prev",
            }}
          >
            {extendedReelData.map((item, index) => (
              <SwiperSlide key={`${item.id}-${index}`}>
                <div className="cv-card" onClick={() => handleOpenVideo(index)}>
                  <div
                    className="cv-card-bg"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                  />
                  <div className="cv-card-overlay" />

                  <div className="cv-card-content">
                    <div className="cv-card-top">
                      <div className="cv-play-icon">
                        <FaPlay />
                      </div>
                    </div>

                    <div className="cv-card-bottom">
                      <p>{item.category}</p>
                      <h4 title={item.title}>{item.title}</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Navigation Arrows */}
          <div className="cv-nav-controls">
            <button className="cv-nav-btn cv-nav-btn-prev">
              <FaArrowLeft />
            </button>
            <button className="cv-nav-btn cv-nav-btn-next">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* --- Video Modal Popup --- */}
      {isMounted &&
        createPortal(
          <div
            className={`cv-modal-overlay ${activeVideoIndex !== null ? "active" : ""}`}
            onClick={handleCloseVideo}
          >
            <div
              className="cv-modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button className="cv-modal-close" onClick={handleCloseVideo}>
                <IoClose />
              </button>

              {/* Slider Navigation inside Modal */}
              {activeVideoIndex !== null && (
                <>
                  <button
                    className="cv-modal-arrow cv-modal-prev"
                    onClick={handlePrevVideo}
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    className="cv-modal-arrow cv-modal-next"
                    onClick={handleNextVideo}
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}

              {/* Video Player */}
              <div className="cv-modal-video-wrapper">
                {activeVideoIndex !== null && (
                  <iframe
                    src={`${extendedReelData[activeVideoIndex].videoUrl}?autoplay=1`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Video Player"
                  />
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

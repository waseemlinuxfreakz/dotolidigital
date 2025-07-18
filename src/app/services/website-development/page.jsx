"use client";
import { useState } from "react";
import Footer from "../../components/Footer";
import { HeroAllSection } from "../../components/HeroAllSection";
import PopupForm from "../../components/PopupForm";
import { PortfolioImage } from "../../components/PortfolioImage";

/* 
PortfolioImage.jsx
*/
export default function Page() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      <HeroAllSection
        id={"team-hero"}
        title1="Building Stunning "
        title2="Websites that Convert"
        description={`Our web development team crafts high-end, mobile-responsive websites<br/> that not only look exceptional but also drive business growth.Specializing<br/>   in sitesthat wow investors and customers alike.`}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />
      <div id="team-hero"></div>
      <PortfolioImage
        img1="/images/w2.webp"
        img2="/images/w1.webp"
        img3="/images/w3.webp"
        img4="/images/w4.webp"
        img5="/images/w5.webp"
        img6="/images/w6.webp"
        img7="/images/w7.webp"
        img8="/images/w8.webp"
        img9="/images/w9.webp"
        img10="/images/w10.webp"
        img11="/images/w11.webp"
        img12="/images/w12.webp"
        img13="/images/project-1.webp"
        img14="/images/project-2.webp"
        img15="/images/project-3.webp"
        img16="/images/project-4.webp"
        img17="/images/project-5.webp"
        img18="/images/project-6.webp"
        img19="/images/project-7.webp"
        img20="/images/project-last.webp"
        
      />
      <Footer />
    </>
  );
}

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

      {/*     img25="/images/project-last.webp"*/}
      <PortfolioImage
        img1="/images/dd-web-1.jpg"
        img2="/images/dd-web-2.jpg"
        img3="/images/dd-web-3.jpg"
        img4="/images/dd-web-4.jpg"
        img5="/images/dd-web-5.jpg"
        img6="/images/dd-web-7.jpg"
        img7="/images/w1.webp"
        img8="/images/w3.webp"
        img9="/images/w4.webp"
        img10="/images/w5.webp"
        img11="/images/w6.webp"
        img12="/images/w7.webp"
        img13="/images/w8.webp"
        img14="/images/w9.webp"
        img15="/images/w10.webp"
        img16="/images/w11.webp"
        img17="/images/w12.webp"
        img18="/images/project-1.webp"
        img19="/images/project-2.webp"
        img20="/images/project-3.webp"
        img21="/images/project-4.webp"
        img22="/images/project-5.webp"
        img23="/images/project-6.webp"
        img24="/images/project-7.webp"
      />
      <Footer />
    </>
  );
}

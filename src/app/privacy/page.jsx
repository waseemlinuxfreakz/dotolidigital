"use client";
import { useState } from "react";
import PopupForm from "../components/PopupForm";
import { BannerSection } from "../components/BannerSection";
import Footer from "../components/Footer";
import { HeroAllSection } from "../components/HeroAllSection";
import { JungleSection } from "../components/JungleSection";

import { TeamMemberSection } from "../components/TeamMemberSection";
import { TextCounterSection } from "../components/TextCounterSection";
export default function page() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      <HeroAllSection
        title1={"Privacy Policy"}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
        id={"team-hero"}
      />

      <div id="team-hero"></div>
      
      

      

      {/* <JungleSection
        title1={"we're hiring"}
        title2={"talented marketers"}
        title3={"& creators"}
        description={`Passionate about SEO, storytelling, <br/>or digital content? We’d love to hear from you.`}
        btn_text={"Meet the Team"}
        btn_link={"/about"}
      /> */}

      <BannerSection title={"Built On Strategy. Backed By Results."} />
      <Footer />
    </>
  );
}

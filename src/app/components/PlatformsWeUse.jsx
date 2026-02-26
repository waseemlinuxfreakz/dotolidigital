// components/PlatformsWeUse.jsx
import Link from "next/link";
import { SiGoogleads, SiFacebook, SiGoogleanalytics } from "react-icons/si";

import { FaRedoAlt } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

export default function PlatformsWeUse() {
  const platforms = [
    {
      title: "Google Ads",
      desc: "High-intent search campaigns built to convert.",
      icon: <SiGoogleads />,
    },
    {
      title: "Meta (Facebook & Instagram)",
      desc: "Demand generation + retargeting across social.",
      icon: <SiFacebook />,
    },
    {
      title: "Retargeting Networks",
      desc: "Bring visitors back and close more leads.",
      icon: <FaRedoAlt />,
    },
    {
      title: "Conversion Landing Pages",
      desc: "Fast pages designed for higher conversion rate.",
      icon: <MdOutlineWeb />,
    },
  ];

  return (
    <section className="pm-platforms">
      <div className="container-w1">
        <div className="pm-platforms-grid">
          {/* LEFT */}
          <div className="pm-platforms-left">
            <h2 className="title-4">
              Platforms We Use for Performance Marketing
            </h2>

            <p className="text-1 pm-platforms-sub">
              Our performance marketing strategies are executed across
              high-intent platforms, depending on your audience and goals.
            </p>

            <div className="pm-platforms-note">
              <span className="pm-platforms-note-dot" />
              Platform selection depends on audience behavior and business
              goals.
            </div>
            <div className="btn-group whychoose-cta">
              <div className="btn btn--pulse">
                <Link className="btn-elem" href="/contact">
                  Book a Free Strategy Call
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="pm-platforms-right">
            <div className="pm-platforms-cards">
              {platforms.map((p) => (
                <div className="pm-platforms-card" key={p.title}>
                  <div className="pm-platforms-icon">{p.icon}</div>

                  <div className="pm-platforms-text">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pm-platforms-foot">
              <p>
                We’ll choose the mix that drives the best ROI for your funnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

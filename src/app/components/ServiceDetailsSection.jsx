"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function ServiceDetailsSection({
  img,
  heading,
  text,
  headertag = "h2",
  cta, // ✅ new prop
}) {
  const sectionRef = useRef(null);
  const imgBoxRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        })
        .from(imgBoxRef.current, {
          scale: 0.95,
          opacity: 0,
          y: 50,
          duration: 1.2,
          ease: "power2.out",
        })
        .from(headingRef.current, { opacity: 0, y: 30, duration: 0.8 }, "-=0.6")
        .from(textRef.current, { opacity: 0, y: 20, duration: 0.8 }, "-=0.4");
    },
    { scope: sectionRef },
  );

  const HeaderTag = headertag;

  return (
    <section className="work-sec1" ref={sectionRef}>
      <div className="container-w1">
        <div className="img-text-box">
          <div className="img-box" ref={imgBoxRef}>
            {img && (
              <Image
                src={img}
                alt={heading}
                width={1240}
                height={700}
                onLoadingComplete={() => ScrollTrigger.refresh()}
              />
            )}
          </div>

          <div className="content">
            <HeaderTag className="title-4" ref={headingRef}>
              <span>{heading}</span>
            </HeaderTag>

            <div
              className="text-1"
              ref={textRef}
              dangerouslySetInnerHTML={{ __html: text }}
            />

            {/* ✅ Dynamic Button */}
            {cta && (
              <div className="btn-group whychoose-cta">
                <div className="btn btn--pulse">
                  <Link className="btn-elem" href={cta.link}>
                    {cta.text}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

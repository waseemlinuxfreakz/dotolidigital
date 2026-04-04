"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function normalizeCustomLinks(text) {
  if (!text) return "";

  return text.replace(
    /<Link\s+([^>]*?)href=(["'])(.*?)\2([^>]*)>(.*?)<\/Link>/gis,
    (_, beforeHref, _quote, href, afterHref, content) => {
      const attrs = `${beforeHref} href="${href}" ${afterHref}`.trim();
      return `<a data-next-link="true" ${attrs}>${content}</a>`;
    },
  );
}

function renderTextWithLink(text) {
  if (!text) return null;

  const normalizedText = normalizeCustomLinks(text);
  const parser = new DOMParser();
  const doc = parser.parseFromString(normalizedText, "text/html");

  function convertNode(node, key) {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return null;
    }

    const tag = node.tagName.toLowerCase();
    const children = Array.from(node.childNodes).map((child, index) =>
      convertNode(child, `${key}-${index}`),
    );

    if (tag === "br") {
      return <br key={key} />;
    }

    if (tag === "a") {
      const href = node.getAttribute("href") || "#";
      const target = node.getAttribute("target") || undefined;
      const rel =
        node.getAttribute("rel") ||
        (target === "_blank" ? "noopener noreferrer" : undefined);
      const isNextLink = node.getAttribute("data-next-link") === "true";
      const isExternal =
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("//") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:");

      if (isNextLink || !isExternal) {
        return (
          <Link key={key} href={href} target={target || undefined} rel={rel}>
            {children}
          </Link>
        );
      }

      return (
        <a key={key} href={href} target={target} rel={rel}>
          {children}
        </a>
      );
    }

    const allowedTags = ["p", "ul", "ol", "li", "strong", "em", "span", "div"];

    if (allowedTags.includes(tag)) {
      return React.createElement(tag, { key }, children);
    }

    return React.createElement("span", { key }, children);
  }

  return Array.from(doc.body.childNodes).map((node, index) =>
    convertNode(node, `node-${index}`),
  );
}

// ইউটিউব ভিডিও আইডি বের করার ফাংশন
function getYouTubeId(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

export function ServiceDetailsSection({
  img,
  videoUrl, // নতুন প্রপ: ইউটিউব ভিডিও লিংক
  heading,
  text,
  headertag = "h2",
  cta,
}) {
  const sectionRef = useRef(null);
  const mediaBoxRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  const videoId = videoUrl ? getYouTubeId(videoUrl) : null;
  const hasVideo = videoUrl && videoId;

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
        .from(mediaBoxRef.current, {
          scale: 0.95,
          opacity: 0,
          y: 50,
          duration: 1.2,
          ease: "power2.out",
        })
        .from(
          headingRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.6",
        )
        .from(
          textRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.4",
        );
    },
    { scope: sectionRef },
  );

  const HeaderTag = headertag;

  return (
    <section className="work-sec1" ref={sectionRef}>
      <div className="container-w1">
        <div className="img-text-box">
          <div className="img-box" ref={mediaBoxRef}>
            {hasVideo ? (
              // ইউটিউব ভিডিও এম্বেড
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={heading}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="youtube-iframe"
                  onLoad={() => ScrollTrigger.refresh()}
                ></iframe>
              </div>
            ) : img ? (
              // ইমেজ দেখানো হবে যদি ভিডিও না থাকে
              <Image
                src={img}
                alt={heading}
                width={1240}
                height={700}
                onLoadingComplete={() => ScrollTrigger.refresh()}
              />
            ) : null}
          </div>

          <div className="content">
            <HeaderTag className="title-4" ref={headingRef}>
              <span>{heading}</span>
            </HeaderTag>

            <div className="text-1" ref={textRef}>
              {renderTextWithLink(text)}
            </div>

            {cta && (
              <div className="btn-group whychoose-cta">
                <div className="btn btn--pulse">
                  {cta.onClick ? (
                    <button
                      type="button"
                      className="btn-elem"
                      onClick={cta.onClick}
                    >
                      {cta.text}
                    </button>
                  ) : (
                    <Link className="btn-elem" href={cta.link}>
                      {cta.text}
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

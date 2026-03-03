import React from "react";

export default function WhyChooseSection({ data, onCtaClick }) {
  const {
    pillText,
    title,
    highlightText,
    subText,
    ctaText,
    miniCards = [],
    cards = [],
    outcome,
  } = data || {};

  return (
    <section className="whychoose-sec">
      <div className="container-w1">
        <div className="whychoose-grid">
          {/* LEFT SIDE */}
          <div className="whychoose-left">
            {pillText && (
              <div className="whychoose-pill">
                <span className="whychoose-dot" />
                {pillText}
              </div>
            )}

            <h2 className="title-4 whychoose-title">
              {title} {highlightText ? <span>{highlightText}</span> : null}
            </h2>

            {subText && <p className="text-1 whychoose-sub">{subText}</p>}

            {ctaText && (
              <div className="btn-group whychoose-cta">
                <div className="btn btn--pulse">
                  <button
                    type="button"
                    className="btn-elem"
                    onClick={onCtaClick}
                  >
                    {ctaText}
                  </button>
                </div>
              </div>
            )}

            {/* small proof row */}
            {miniCards?.length > 0 && (
              <div className="whychoose-mini">
                {miniCards.map((item, idx) => (
                  <div className="whychoose-mini-card" key={idx}>
                    <p className="k">{item.k}</p>
                    <p className="v">{item.v}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="whychoose-right">
            {cards?.length > 0 && (
              <div className="whychoose-cards">
                {cards.map((card, idx) => (
                  <div className="whychoose-card" key={idx}>
                    <div className="icon" />
                    <div className="txt">
                      <h3>{card.title}</h3>
                      <p>{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {outcome && (
              <div className="whychoose-outcome">
                <p>
                  <strong>Outcome:</strong> {outcome}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

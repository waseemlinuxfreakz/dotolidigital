// components/PlatformsWeUse.jsx

export default function PlatformsWeUse({ onCtaClick, data }) {
  const {
    heading,
    subText,
    note,
    ctaText,
    platforms = [],
    footText,
  } = data || {};

  return (
    <section className="pm-platforms">
      <div className="container-w1">
        <div className="pm-platforms-grid">
          {/* LEFT */}
          <div className="pm-platforms-left">
            <h2 className="title-4">{heading}</h2>

            <p className="text-1 pm-platforms-sub">{subText}</p>

            <div className="pm-platforms-note">
              <span className="pm-platforms-note-dot" />
              {note}
            </div>

            <div className="btn-group whychoose-cta">
              <div className="btn btn--pulse">
                <button type="button" className="btn-elem" onClick={onCtaClick}>
                  {ctaText}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="pm-platforms-right">
            <div className="pm-platforms-cards">
              {platforms.map((p, i) => (
                <div className="pm-platforms-card" key={`${p.title}-${i}`}>
                  <div className="pm-platforms-icon">{p.icon}</div>
                  <div className="pm-platforms-text">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pm-platforms-foot">
              <p>{footText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

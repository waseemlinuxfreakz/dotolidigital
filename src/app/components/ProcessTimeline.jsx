// components/ProcessTimeline.jsx

export default function ProcessTimeline({ data }) {
  const { heading, steps = [] } = data || {};

  return (
    <section className="pm-timeline">
      <div className="container-w1">
        <div className="pm-timeline-head">
          <h2 className="title-4">{heading}</h2>
        </div>

        <div className="pm-timeline-wrap">
          {steps.map((s, i) => (
            <div className="pm-timeline-row" key={`${s.title}-${i}`}>
              {/* left rail */}
              <div className="pm-timeline-rail">
                <div className="pm-timeline-dot">
                  <span>{i + 1}</span>
                </div>

                {i !== steps.length - 1 && <div className="pm-timeline-line" />}
              </div>

              {/* content */}
              <div className="pm-timeline-card">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

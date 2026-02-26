// components/ProcessTimeline.jsx

export default function ProcessTimeline() {
  const steps = [
    {
      title: "Goal & KPI Definition",
      desc: "We begin by clearly defining what success looks like for your business. This includes setting measurable KPIs such as leads, cost per acquisition, revenue, or return on ad spend. Clear goals ensure that every campaign decision aligns with real business outcomes.",
    },
    {
      title: "Audience & Intent Research",
      desc: "We analyze audience behavior, search intent, and platform data to identify who is most likely to convert. This research helps us target users at the right stage of the buying journey, rather than wasting budget on low-intent traffic.",
    },
    {
      title: "Campaign & Funnel Setup",
      desc: "Campaigns are built around structured funnels, not isolated ads. We align messaging, creatives, and landing pages so users move smoothly from first interaction to conversion, improving efficiency and consistency.",
    },
    {
      title: "Launch & Continuous Optimization",
      desc: "Once campaigns go live, we closely monitor performance metrics in real time. Budgets, bids, targeting, and creatives are adjusted continuously to improve results and reduce wasted spend as data accumulates.",
    },
    {
      title: "Reporting, Insights & Scaling",
      desc: "We track performance against KPIs and extract actionable insights from campaign data. High-performing campaigns are scaled strategically, while underperforming elements are refined or replaced to maintain growth momentum.",
    },
  ];

  return (
    <section className="pm-timeline">
      <div className="container-w1">
        <div className="pm-timeline-head">
          <h2 className="title-4">
            How Our Performance Marketing Process Works
          </h2>
        </div>

        <div className="pm-timeline-wrap">
          {steps.map((s, i) => (
            <div className="pm-timeline-row" key={s.title}>
              {/* left rail */}
              <div className="pm-timeline-rail">
                <div className="pm-timeline-dot">
                  <span>{i + 1}</span>
                </div>
                {/* line below dot */}
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

// components/BenefitsPerformance.jsx

export default function BenefitsPerformance() {
  const benefits = [
    {
      title: "Measurable ROI",
      desc: "Know what’s working with conversion + revenue reporting.",
    },
    {
      title: "Lower cost per lead",
      desc: "Testing + better targeting reduces CPA over time.",
    },
    {
      title: "Better budget control",
      desc: "Shift spend to winners fast—cut waste early.",
    },
    {
      title: "Scalable growth",
      desc: "A system that scales with consistent performance.",
    },
    {
      title: "Data-backed decisions",
      desc: "Optimize based on evidence, not opinions.",
    },
    {
      title: "Reduced marketing waste",
      desc: "Stop paying for clicks that don’t convert.",
    },
  ];

  return (
    <section className="pm-benefits3">
      <div className="container-w1">
        <div className="pm-benefits3-header">
          <h2 className="title-4">
            Benefits of Our Performance Marketing Services
          </h2>
          <p className="text-1">
            Performance marketing ensures every marketing dollar works harder.
          </p>
        </div>

        <div className="pm-benefits3-grid">
          {benefits.map((b, i) => (
            <div className="pm-benefits3-item" key={b.title}>
              <div className="pm-benefits3-num">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="pm-benefits3-text">
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

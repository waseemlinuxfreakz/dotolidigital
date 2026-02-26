// components/IndustriesSection.jsx
import Link from "next/link";
export default function IndustriesSection() {
  const industries = [
    "eCommerce",
    "SaaS & technology",
    "Professional services",
    "Healthcare",
    "Real estate",
    "Agencies",
  ];

  return (
    <section className="pm-industries">
      <div className="container-w1">
        <div className="pm-industries-head">
          <h2 className="title-4">
            Industries That Benefit Most from Performance Marketing
          </h2>
          <p className="text-1">
            Performance marketing is effective across many industries,
            including:
          </p>
        </div>

        <div className="pm-industries-grid">
          {industries.map((item) => (
            <div className="pm-industries-chip" key={item}>
              <span className="pm-industries-dot" />
              <span className="pm-industries-text">{item}</span>
            </div>
          ))}
        </div>
        <p className="pm-industries-note">
          Each industry requires a tailored funnel and targeting strategy.
        </p>
        <div className="btn-group whychoose-cta">
          <div className="btn btn--pulse">
            <Link className="btn-elem" href="/contact">
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/PerformanceCta.jsx
import Link from "next/link";

export default function PerformanceCta({ onStrategyClick }) {
  return (
    <section className="pm-cta">
      <div className="container-w1">
        <div className="pm-cta-box">
          <div className="pm-cta-left">
            <h2 className="pm-cta-title">
              Ready to Turn Marketing Spend into Measurable Results?
            </h2>

            <p className="pm-cta-sub">
              Performance marketing removes guesswork and replaces it with
              clarity, data, and growth.
            </p>
          </div>

          <div className="pm-cta-right">
            {/* এটা link থাকুক */}
            <Link className="pm-cta-btn pm-cta-btn-primary" href="/contact">
              Get a Free Performance Marketing Audit
            </Link>

            <div className="pm-cta-or">or</div>

            {/* ✅ এটা popup হবে */}
            <button
              type="button"
              className="pm-cta-btn pm-cta-btn-ghost"
              onClick={onStrategyClick}
            >
              Book a Strategy Call to Scale Faster
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

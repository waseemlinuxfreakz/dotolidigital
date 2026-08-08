import React from "react";
import "./TopStatsRow.css";

export default function TopStatsRow() {
  return (
    <section className="container1 gsap-fade-up">
      <div className="stats-top-row">
        <div className="stat-card-small">
          <div className="val">28.4x</div>
          <div className="label">Best client return on ad spend</div>
        </div>
        <div className="stat-card-small">
          <div className="val">19x</div>
          <div className="label">Peak organic click growth in a year</div>
        </div>
        <div className="stat-card-small">
          <div className="val">$2.27M</div>
          <div className="label">Pipeline traced in 60 days, one client</div>
        </div>
        <div className="stat-card-small">
          <div className="val">5.77x</div>
          <div className="label">ROAS rebuilt on a stalled account</div>
        </div>
      </div>
    </section>
  );
}

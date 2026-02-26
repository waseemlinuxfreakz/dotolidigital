// components/ServicesWeOfferBoxes.jsx

export default function ServicesWeOfferBoxes() {
  return (
    <section className="pm-box">
      <div className="container-w1">
        <div className="pm-box-head">
          <h2 className="title-4">Performance Marketing Services We Offer</h2>
          <p className="text-1">
            Our performance marketing services are structured to support every
            stage of the customer journey.
          </p>
        </div>

        <div className="pm-box-grid">
          {/* 2 */}
          <div className="pm-box-card">
            <h3>Paid Media Optimization</h3>
            <p>
              We continuously optimize campaigns across paid channels to improve
              efficiency and performance. This includes:
            </p>

            <ul>
              <li>Audience targeting and segmentation</li>
              <li>Bid and budget optimization</li>
              <li>Ad creative testing</li>
              <li>Placement and format optimization</li>
            </ul>
          </div>

          {/* 3 */}
          <div className="pm-box-card">
            <h3>Conversion Tracking & Analytics</h3>
            <p>Performance marketing relies on accurate data. We implement:</p>

            <ul>
              <li>Conversion tracking</li>
              <li>Event and goal setup</li>
              <li>Funnel analysis</li>
              <li>Performance dashboards</li>
            </ul>

            <p className="pm-box-note">
              This allows us to measure what actually drives results.
            </p>
          </div>
          {/* 1 */}
          <div className="pm-box-card">
            <h3>Funnel-Based Campaign Strategy</h3>
            <p>
              We design campaigns around funnels, not just ads. Each stage of
              the funnel has a clear purpose, from awareness to conversion. This
              ensures traffic is nurtured instead of wasted.
            </p>
          </div>

          {/* 4 */}
          <div className="pm-box-card">
            <h3>Continuous Testing & Optimization</h3>
            <p>
              No campaign is static. We test creatives, audiences, messaging,
              and funnels continuously to improve performance. Small
              optimizations compound into significant gains over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

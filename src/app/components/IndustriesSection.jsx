// // components/IndustriesSection.jsx
// "use client";
// import Link from "next/link";
// export default function IndustriesSection({ onCtaClick }) {
//   const industries = [
//     "eCommerce",
//     "SaaS & technology",
//     "Professional services",
//     "Healthcare",
//     "Real estate",
//     "Agencies",
//   ];

//   return (
//     <section className="pm-industries">
//       <div className="container-w1">
//         <div className="pm-industries-head">
//           <h2 className="title-4">
//             Industries That Benefit Most from Performance Marketing
//           </h2>
//           <p className="text-1">
//             Performance marketing is effective across many industries,
//             including:
//           </p>
//         </div>

//         <div className="pm-industries-grid">
//           {industries.map((item) => (
//             <div className="pm-industries-chip" key={item}>
//               <span className="pm-industries-dot" />
//               <span className="pm-industries-text">{item}</span>
//             </div>
//           ))}
//         </div>
//         <p className="pm-industries-note">
//           Each industry requires a tailored funnel and targeting strategy.
//         </p>

//         {/* ✅ Popup Button */}
//         <div className="btn-group whychoose-cta">
//           <div className="btn btn--pulse">
//             <button type="button" className="btn-elem" onClick={onCtaClick}>
//               Book a Free Strategy Call
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// components/IndustriesSection.jsx
"use client";

export default function IndustriesSection({ data, onCtaClick }) {
  const { heading, subText, industries = [], note, ctaText } = data || {};

  return (
    <section className="pm-industries">
      <div className="container-w1">
        <div className="pm-industries-head">
          <h2 className="title-4">{heading}</h2>
          <p className="text-1">{subText}</p>
        </div>

        <div className="pm-industries-grid">
          {industries.map((item, index) => (
            <div className="pm-industries-chip" key={`${item}-${index}`}>
              <span className="pm-industries-dot" />
              <span className="pm-industries-text">{item}</span>
            </div>
          ))}
        </div>

        {note && <p className="pm-industries-note">{note}</p>}

        {ctaText && (
          <div className="btn-group whychoose-cta">
            <div className="btn btn--pulse">
              <button type="button" className="btn-elem" onClick={onCtaClick}>
                {ctaText}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// export default function BenefitsPerformance({ data }) {
//   const { heading, subText, benefits = [] } = data || {};

//   return (
//     <section className="pm-benefits3">
//       <div className="container-w1">
//         <div className="pm-benefits3-header">
//           <h2 className="title-4">{heading}</h2>
//           <p className="text-1">{subText}</p>
//         </div>

//         <div className="pm-benefits3-grid">
//           {benefits.map((b, i) => (
//             <div className="pm-benefits3-item" key={`${b.title}-${i}`}>
//               <div className="pm-benefits3-num">
//                 {String(i + 1).padStart(2, "0")}
//               </div>

//               <div className="pm-benefits3-text">
//                 <h3>{b.title}</h3>
//                 {b.desc ? <p>{b.desc}</p> : null}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function BenefitsPerformance({ data }) {
  const { heading, subText, benefits = [] } = data || {};

  return (
    <section className="pm-benefits3">
      <div className="container-w1">
        <div className="pm-benefits3-header">
          <h2 className="title-4">{heading}</h2>
          <p className="text-1">{subText}</p>
        </div>

        <div className="pm-benefits3-grid">
          {benefits.map((b, i) => (
            <div className="pm-benefits3-item" key={`${i}`}>
              <div className="pm-benefits3-num">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="pm-benefits3-text">
                <h3>{b.title}</h3>
                {b.desc && <p>{b.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

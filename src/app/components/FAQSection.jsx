"use client";
import { useState } from "react";

export function FAQSection({ title, faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-section">
      <h2 className="title-4">{title}</h2>

      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div key={i} className={`faq-item ${openIndex === i ? "open" : ""}`}>
            <button className="faq-question" onClick={() => toggle(i)}>
              {faq.question}
              <span className="faq-icon">{openIndex === i ? "−" : "+"}</span>
            </button>

            {openIndex === i && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

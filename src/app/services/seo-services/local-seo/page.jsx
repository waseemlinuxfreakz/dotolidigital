import LocalSeo from "./LocalSeo";

export const metadata = {
  title: "Results-Driven Local SEO | DOTOLI DIGITAL",
  description:
    "Turn local searches into customers with DOTOLI DIGITAL’s expert Local SEO. Optimized listings, reviews, and keyword targeting for real growth.",
  alternates: {
    canonical: "https://www.dotolidigital.com/services/seo-services/local-seo",
  },
};
export default function Page() {
  return <LocalSeo />;
}

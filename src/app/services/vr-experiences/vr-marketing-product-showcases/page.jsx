import VrMarketingProductShowcases from "./VrMarketingProductShowcases";

export const metadata = {
  title: "Future-Ready VR Product Marketing | DOTOLI DIGITAL",
  description:
    "Lead with innovation. DOTOLI DIGITAL builds immersive VR showcases that attract attention, increase engagement, and elevate brand perception.",
  alternates: {
    canonical:
      "https://www.dotolidigital.com/services/vr-experiences/vr-marketing-product-showcases",
  },
  robots: {
    index: false,
    follow: false, // optional
  },
};
export default function Page() {
  return <VrMarketingProductShowcases />;
}

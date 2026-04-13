import VirtualBrandExperiences from "./VirtualBrandExperiences";

export const metadata = {
  title: "Build a Virtual Brand World | DOTOLI DIGITAL",
  description:
    "DOTOLI DIGITAL designs virtual brand environments that engage users, strengthen storytelling, and create unforgettable digital impressions.",
  alternates: {
    canonical: "https://www.dotolidigital.com/services/vr-experiences",
  },
  robots: {
    index: false,
    follow: false, // optional
  },
};
export default function Page() {
  return <VirtualBrandExperiences />;
}

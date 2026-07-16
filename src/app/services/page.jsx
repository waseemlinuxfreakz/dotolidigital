import Services from "./Services";
import Header from "../components/Header/Header";

export const metadata = {
  title:
    "Best Digital Marketing Services | SEO, AI Automation & Lead Generation Agency",
  description:
    "Explore our digital marketing services including SEO, AI automation, and lead generation solutions to grow your business and increase conversions.",
  alternates: {
    canonical: "",
  },
};
export default function Page() {
  return (
    <>
      <Header />
      <Services />
    </>
  );
}

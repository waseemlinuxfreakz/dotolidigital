import { Montserrat, Plus_Jakarta_Sans } from "next/font/google"; // ✅ Plus Jakarta Sans import করা হয়েছে
import localFont from "next/font/local";
//import LayoutWrapper from "./LayoutWrapper";
//import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingWrapper from "./components/LoadingWrapper";
import ThemeProvider from "./components/ThemeProvider";
import "./globals.css";

// ✅ Local font: Nourd
const Nourd = localFont({
  src: "../../public/fonts/nourd-regular.ttf",
  variable: "--font-nourd",
  display: "swap",
});

// ✅ Google font: Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// ✅ Google font: Plus Jakarta Sans (New Added)
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title:
    "Dotoli Digital | AI-Powered Marketing, Automation & Creative Solutions",
  description:
    "Dotoli Digital helps brands scale smarter with AI-driven marketing, CRM automation, VR experiences, and bold creative. Based in Florida, Serving Worldwide.",
  openGraph: {
    title:
      "Dotoli Digital | AI-Powered Marketing, Automation & Creative Solutions",
    description:
      "Dotoli Digital helps brands scale smarter with AI-driven marketing, CRM automation, VR experiences, and bold creative. Based in Florida, Serving Worldwide.",
    url: "https://dotolidigital.com",
    siteName: "Dotoli Digital",
    images: [
      {
        url: "../../public/images/aai5.webp",
        width: 1200,
        height: 630,
        alt: "Dotoli Digital - AI-Powered Marketing, Automation & Creative Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      // ✅ এখানে plusJakartaSans.variable যুক্ত করা হয়েছে
      className={`${montserrat.variable} ${Nourd.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="nHO9-iQizhbV-n_oaaEX9jehexiiB6eg5_AI7_C8KS8"
        />

        {/* Google Tag Manager - Head */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5Z686QQK');
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager - NoScript (must be first element in <body>) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5Z686QQK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingWrapper>
            <Header />
            {children}
            {/* <Footer /> */}
          </LoadingWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

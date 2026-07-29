import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  Services,
  Stays,
  Destinations,
  Hajj,
  Catering,
  About,
  Why,
  Steps,
  Faq,
} from "@/components/site/Sections";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";


const TITLE = "شركة راحة الزائر للسياحة | حجوزات الفنادق ووحدات الضيافة";
const DESC =
  "شركة راحة الزائر للسياحة تقدم حجوزات الفنادق والشقق والمنتجعات ووحدات الضيافة في مكة المكرمة والمدينة المنورة وجميع مناطق المملكة.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar_SA" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/images/social-preview.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "/images/social-preview.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "شركة راحة الزائر للسياحة",
          description: DESC,
          image: "/images/social-preview.jpg",
          telephone: "+966558344453",
          areaServed: "SA",
          address: {
            "@type": "PostalAddress",
            addressLocality: "مكة المكرمة",
            addressRegion: "حي العوالي",
            addressCountry: "SA",
          },
          sameAs: [
            "https://www.instagram.com/rahaalzaaer",
            "https://www.tiktok.com/@rahatalzaer",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Stays />
        <Destinations />
        <Hajj />
        <Catering />
        <About />
        <Why />
        <Steps />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

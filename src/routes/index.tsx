import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Catalogue } from "@/components/site/Catalogue";
import { Certifications } from "@/components/site/Certifications";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { MobileCTA } from "@/components/site/MobileCTA";
import { SITE } from "@/lib/site";

const TITLE =
  "Krishna Copy Udyog | Notebook & Register Manufacturer in Patna, Bihar";
const DESCRIPTION =
  "Krishna Copy Udyog is a Patna-based manufacturer and wholesale supplier of school notebooks, spiral notebooks, A4 registers, writing copies, and stationery products. Contact for catalogue and bulk orders.";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  image: `${SITE.url}/og-image.jpg`,
  "@id": SITE.url,
  url: SITE.url,
  telephone: SITE.phoneDisplay,
  email: SITE.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kamaldah Path, Navneet Housing Society",
    addressLocality: "Patna City",
    addressRegion: "Bihar",
    postalCode: "800008",
    addressCountry: "IN",
  },
  areaServed: ["Patna", "Bihar", "India"],
  description: DESCRIPTION,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Notebook manufacturer in Patna, Register manufacturer in Bihar, School notebook supplier Patna, A4 register wholesale Bihar, Spiral notebook manufacturer, Notebook bulk supplier, Stationery manufacturer Patna, Krishna Copy Udyog",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE.url },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "theme-color", content: "#0F2A44" },
    ],
    links: [{ rel: "canonical", href: SITE.url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Products />
        <Catalogue />
        <Certifications />
        <WhyUs />
        <Process />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}

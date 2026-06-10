import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyWhatsApp } from "@/components/layout/StickyWhatsApp";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "School Notebook Manufacturer Patna | Bulk Export | ZED Certified — Krishna Copy Udyog" },
      {
        name: "description",
        content:
          "Bulk school notebook manufacturer from Patna Bihar India. 5 Lakh+ units/month. Export to Africa, Gulf, Nepal. ZED, MSME, IEC, GST certified. Custom OEM branding. WhatsApp: 8210150897",
      },
      {
        name: "keywords",
        content:
          "school notebook manufacturer India, bulk notebook exporter Bihar, notebook manufacturer Patna, exercise book exporter India, ZED certified notebook",
      },
      { name: "author", content: "Krishna Copy Udyog" },
      { property: "og:title", content: "School Notebook Manufacturer Patna | Bulk Export | ZED Certified — Krishna Copy Udyog" },
      { property: "og:description", content: "Bulk school notebook manufacturer from Patna Bihar India. 5 Lakh+ units/month. Export to Africa, Gulf, Nepal. ZED, MSME, IEC, GST certified. Custom OEM branding. WhatsApp: 8210150897" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://krishnacopyudyog.com/" },
      { property: "og:image", content: "https://krishnacopyudyog.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://krishnacopyudyog.com/og-image.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://krishnacopyudyog.com/",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/logo.png" },
      { rel: "apple-touch-icon", href: "/logo.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Krishna Copy Udyog",
          "image": "https://krishnacopyudyog.com/logo.png",
          "url": "https://krishnacopyudyog.com",
          "telephone": "+918210150897",
          "email": "krishnacopyudyog2021@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kamaldah Path, Navneet Housing Society",
            "addressLocality": "Patna City",
            "addressRegion": "Bihar",
            "postalCode": "800008",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.5941,
            "longitude": 85.1376
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://wa.me/918210150897",
            "https://www.linkedin.com/company/krishna-copy-udyog"
          ]
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}

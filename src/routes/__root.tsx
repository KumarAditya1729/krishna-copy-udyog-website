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
          "Bulk school notebook manufacturer from Patna Bihar India. 1 Lakh+ units/month. Export to Africa, Gulf, Nepal. ZED, MSME, IEC, GST certified. Custom OEM branding. WhatsApp: 8210150897",
      },
      {
        name: "keywords",
        content:
          "school notebook manufacturer India, bulk notebook exporter Bihar, notebook manufacturer Patna, exercise book exporter India, ZED certified notebook",
      },
      { name: "author", content: "Krishna Copy Udyog" },
      { property: "og:title", content: "School Notebook Manufacturer Patna | Bulk Export | ZED Certified — Krishna Copy Udyog" },
      { property: "og:description", content: "Bulk school notebook manufacturer from Patna Bihar India. 1 Lakh+ units/month. Export to Africa, Gulf, Nepal. ZED, MSME, IEC, GST certified. Custom OEM branding. WhatsApp: 8210150897" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/logo.png" },
      { rel: "apple-touch-icon", href: "/logo.png" },
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

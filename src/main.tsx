import React from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./components/site/Header";
import { Hero } from "./components/site/Hero";
import { TrustStrip } from "./components/site/TrustStrip";
import { About } from "./components/site/About";
import { Products } from "./components/site/Products";
import { Catalogue } from "./components/site/Catalogue";
import { Testimonials } from "./components/site/Testimonials";
import { Certifications } from "./components/site/Certifications";
import { Process } from "./components/site/Process";
import { WhyUs } from "./components/site/WhyUs";
import { Contact } from "./components/site/Contact";
import { MobileCTA } from "./components/site/MobileCTA";
import { Footer } from "./components/site/Footer";

import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Products />
        <Catalogue />
        <Testimonials />
        <Certifications />
        <Process />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

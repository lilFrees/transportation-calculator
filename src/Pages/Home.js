<<<<<<< HEAD
import React, { useContext } from "react";
import { VerificationContext } from "../components/verification/VerificationContext";
import Success from "../components/submit/Success";
import Hero from "../components/Layout/Hero/Hero";
import About from "../components/Layout/About/About";
import CTA from "../components/Layout/CTA/CTA";
import FAQ from "../components/Layout/FAQ/FAQ";
import { Helmet } from "react-helmet";

function Home() {
  const { isVerified } = useContext(VerificationContext);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Get instant quotes for car shipping services across the USA. Reliable and affordable vehicle transport services. Contact us now for a free quote."
        />
        <meta
          name="keywords"
          content="Vehicle shipping quotes, Car shipping quotes, Auto transport quotes, Vehicle transport quotes, Car shipping services, Auto transport services, Vehicle shipping companies, Car shipping across USA, Vehicle transport across USA, Car shipping quotes online"
        />

        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

        <meta
          property="og:title"
          content="Prime Transport | Vehicle Transport | Car Shipping Companies"
        />
        <meta
          property="og:description"
          content="Get instant quotes for car shipping services across the USA. Reliable and affordable vehicle transport services. Contact us now for a free quote."
        />
        <title>
          Prime Transport | Vehicle Transport | Car Shipping Companies
        </title>
      </Helmet>
      {isVerified && <Success />}
      <Hero />
      <About />
      <FAQ />
      <CTA />
    </>
  );
}

export default Home;
=======
import React, { useContext } from "react";
import { VerificationContext } from "../components/verification/VerificationContext";
import Success from "../components/submit/Success";
import Hero from "../components/Layout/Hero/Hero";
import About from "../components/Layout/About/About";
import CTA from "../components/Layout/CTA/CTA";
import FAQ from "../components/Layout/FAQ/FAQ";
import { Helmet } from "react-helmet";

function Home() {
  const { isVerified } = useContext(VerificationContext);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Get instant quotes for car shipping services across the USA. Reliable and affordable vehicle transport services. Contact us now for a free quote."
        />
        <meta
          name="keywords"
          content="Vehicle shipping quotes, Car shipping quotes, Auto transport quotes, Vehicle transport quotes, Car shipping services, Auto transport services, Vehicle shipping companies, Car shipping across USA, Vehicle transport across USA, Car shipping quotes online"
        />

        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

        <meta
          property="og:title"
          content="Prime Transport | Vehicle Transport | Car Shipping Companies"
        />
        <meta
          property="og:description"
          content="Get instant quotes for car shipping services across the USA. Reliable and affordable vehicle transport services. Contact us now for a free quote."
        />
        <title>
          Prime Transport | Vehicle Transport | Car Shipping Companies
        </title>
      </Helmet>
      {isVerified && <Success />}
      <Hero />
      <About />
      <FAQ />
      <CTA />
    </>
  );
}

export default Home;
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf

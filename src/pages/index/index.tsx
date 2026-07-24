import React, { lazy, Suspense } from "react";
import { Navbar } from "src/components";
import { Layout } from "src/components/base";
import { Heading3 } from "src/styles";
import styled from "styled-components";

const Hero = lazy(() => import("src/sections/Hero"));
const History = lazy(() => import("src/sections/History"));
const Showcase = lazy(() => import("src/sections/Showcase"));
const Footer = lazy(() => import("src/sections/Footer"));

const IndexPage: React.FC = () => (
  <Layout>
    <Navbar />
    <Suspense fallback={<div />}>
      <Hero />
    </Suspense>
    <Suspense fallback={<div />}>
      <History />
    </Suspense>
    <Suspense fallback={<div />}>
      <Showcase />
    </Suspense>
    <Suspense fallback={<div />}>
      <Footer />
    </Suspense>
  </Layout>
);

export default IndexPage;

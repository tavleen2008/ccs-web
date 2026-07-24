import React from "react";
import { Navbar } from "src/components";
import { Layout } from "src/components/base";
import { NAVBAR_HEIGHT_PX } from "src/components/Navbar/constants";
import { Heading1, LargeBody } from "src/styles";
import { mediaQueries } from "src/utils";
import styled from "styled-components";

interface ComingSoonProps {
  title: string;
  blurb?: string;
}

/**
 * Lightweight placeholder page for nav destinations that don't have content
 * yet (Team, Events, Announcements, Alumni). Keeps the site's navbar and
 * dark theme so it feels consistent; swap in real content when ready.
 */
const ComingSoon: React.FC<ComingSoonProps> = ({ title, blurb }) => (
  <Layout>
    <Navbar notMainPage />
    <Center>
      <Eyebrow>Creative Computing Society</Eyebrow>
      <Title>{title}</Title>
      <Sub>
        {blurb ??
          "We’re putting this page together. Check back soon — it’s coming shortly."}
      </Sub>
    </Center>
  </Layout>
);

export default ComingSoon;

const Center = styled.div`
  min-height: calc(100vh - ${NAVBAR_HEIGHT_PX}px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 24px;
  gap: 16px;
`;

const Eyebrow = styled.p`
  margin: 0;
  font-family: "Satoshi";
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary.cyan};
`;

const Title = styled(Heading1)`
  color: ${({ theme }) => theme.colors.text.dark.white};
  font-size: 64px;
  letter-spacing: -0.02em;

  ${mediaQueries.tablet} {
    font-size: 44px;
  }
`;

const Sub = styled(LargeBody)`
  max-width: 460px;
  color: ${({ theme }) => theme.colors.text.dark.gray};
  line-height: 1.6;
`;

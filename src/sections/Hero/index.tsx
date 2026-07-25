import React from "react";
import { Collaboration, Learning } from "src/assets/img";
import {
  ContentWrapper,
  SectionWrapper,
  BrowserWindow,
} from "src/components/base";
import { SectionId } from "src/constants";
import { useDeviceSize } from "src/utils";
import styled, { useTheme } from "styled-components";

import About from "./About";
import { Column, GradientOverlay } from "./Constants";
import FullPageScroller from "./FullPageScroller";
import Heading from "./Heading";
import YouBelongInTech from "./YouBelongInTech";

const Hero: React.FC = () => {
  const theme = useTheme();

  return (
    <SectionWrapper id={SectionId.HERO}>
      <ContentWrapper style={{ maxWidth: "1200px" }}>
        {!useDeviceSize("tablet") ? (
          <FullPageScroller Background={Heading}>
            {/* Step 0: text-first view — heading shows "Learn" on its own,
                like the reference. Scrolling advances to the image steps,
                cycling the word Learn → Code → Collaborate. */}
            <IntroStep aria-hidden="true" />
            <LeftImgContainer style={{ paddingLeft: "30px" }}>
              <BrowserWindow color={theme.colors.solid.dustyGold}>
                <div style={{ position: "relative" }}>
                  <GradientOverlay color={theme.colors.solid.dustyGold} />
                  <img
                    src={Learning}
                    alt="Students sitting at tables with their laptops"
                    style={{
                      width: "480px",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </BrowserWindow>
            </LeftImgContainer>
            <RightImgContainer style={{ paddingRight: "20px" }}>
              <BrowserWindow color={theme.colors.solid.softTeal}>
                <div style={{ position: "relative" }}>
                  <GradientOverlay color={theme.colors.solid.softTeal} />
                  <img
                    src={Collaboration}
                    alt="Two students consult a mentor for assistance at the Mentor Hub"
                    style={{
                      width: "496px",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </BrowserWindow>
            </RightImgContainer>
          </FullPageScroller>
        ) : (
          <Column>
            <Heading currentStepIndex={0} />
          </Column>
        )}
        <About />
        <YouBelongInTech />
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default Hero;

const IntroStep = styled.div`
  width: 100%;
`;

const LeftImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
`;

const RightImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: right;
  justify-content: right;
`;

const LastContainer = styled(Column)`
  padding-top: 270px;
`;

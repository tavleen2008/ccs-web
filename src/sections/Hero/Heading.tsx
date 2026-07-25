import React from "react";
import TextLoop from "react-text-loop";
import { LeftStarsAndGears, RightStarsAndGears } from "src/assets/img";
import CornerArcs from "src/assets/img/hero/cornerArcs.svg";
import CornerStripes from "src/assets/img/hero/cornerStripes.svg";
import { FlickerAnimationKeyframes } from "src/components/base/Animation";
import { useDeviceSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import styled from "styled-components";

import { Heading1 } from "../../styles";

import { Column } from "./Constants";

const words = ["Learn", "Code", "Collaborate"];

const Heading: React.FC<{ currentStepIndex: number }> = ({
  currentStepIndex,
}) => {
  const currentWordIndex = currentStepIndex % words.length;

  const isTablet = useDeviceSize("tablet");

  return (
    <HeadingContainer>
      <GlitchWrapper>
        <HeroLeftGlow />
        <HeroRightGlow />
      </GlitchWrapper>
      <Title>
        Creative Computing Society
        <br />
        <div>
          {isTablet ? (
            <FullWidth>
              <TextLoop adjustingSpeed={10}>
                <BottomPadding>Learn</BottomPadding>
                <BottomPadding>Code</BottomPadding>
                <BottomPadding>Collaborate</BottomPadding>
                {/*words*/}
              </TextLoop>
            </FullWidth>
          ) : (
            <WordWrapper>
              {words.map((word, idx) => (
                <WordItem key={word} $active={idx === currentWordIndex}>
                  {word}
                </WordItem>
              ))}
            </WordWrapper>
          )}
        </div>
      </Title>

      <HeroSupport
        style={{
          opacity: currentStepIndex === 0 ? 1 : 0,
          pointerEvents: currentStepIndex === 0 ? "auto" : "none",
        }}
      >
        <Tagline>
          A student community at Thapar Institute — learning, building, and
          collaborating with code.
        </Tagline>
      </HeroSupport>

      <FullBleedDecor>
        <LeftStarsGears src={LeftStarsAndGears} alt="" />
        <RightStarsGears src={RightStarsAndGears} alt="" />
        <BottomLeftDecor
          src={CornerStripes}
          alt=""
          aria-hidden="true"
          style={{ opacity: currentStepIndex === 0 ? 1 : 0 }}
        />
        <BottomRightDecor
          src={CornerArcs}
          alt=""
          aria-hidden="true"
          style={{ opacity: currentStepIndex === 0 ? 1 : 0 }}
        />
      </FullBleedDecor>
    </HeadingContainer>
  );
};

export default Heading;

const BottomPadding = styled.div`
  padding-bottom: 5px;
  color: ${({ theme }) => theme.colors.primary.cyan};
  ${mediaQueries.largeMobile} {
    width: 100vw;
  }
`;

const FullWidth = styled.div`
  ${mediaQueries.tablet} {
    width: 100%;
    height: 100%;
  }
`;

const WordWrapper = styled.div`
  position: relative;
  display: block;
  height: 1.2em;
  width: 100%;
`;

const WordItem = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.primary.cyan};
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transform: ${({ $active }) =>
    $active
      ? "translate3d(0, 0, 0) scale(1)"
      : "translate3d(0, 12px, 0) scale(0.96)"};
  filter: ${({ $active }) => ($active ? "blur(0px)" : "blur(6px)")};
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: ${({ $active }) => ($active ? "auto" : "none")};
`;

const HeroSupport = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
  transition: opacity 0.45s ease;
  ${mediaQueries.tablet} {
    margin-top: 26px;
  }
`;

/* Full-viewport decoration layer: breaks out of the centred 1200px content
   box so the background graphics sit at the real screen edges/corners
   instead of leaving dead side margins. */
const FullBleedDecor = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
`;

const BottomLeftDecor = styled.img`
  position: absolute;
  left: 3vw;
  bottom: 24px;
  width: 190px;
  height: auto;
  pointer-events: none;
  transition: opacity 0.6s ease;
  ${mediaQueries.tablet} {
    display: none;
  }
`;

const BottomRightDecor = styled.img`
  position: absolute;
  right: 3vw;
  bottom: 20px;
  width: 172px;
  height: auto;
  pointer-events: none;
  transition: opacity 0.6s ease;
  ${mediaQueries.tablet} {
    display: none;
  }
`;

const Tagline = styled.p`
  margin: 0 0 26px;
  max-width: 440px;
  font-family: "Satoshi";
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.dark.gray};
  ${mediaQueries.tablet} {
    font-size: 16px;
    margin-bottom: 22px;
    padding: 0 16px;
  }
`;

const HeadingContainer = styled(Column)`
  color: ${({ theme }) => theme.colors.text.dark.white};
  padding-top: 160px;
  text-align: center;
  margin-top: 0px;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
  width: 100%;
  ${mediaQueries.tablet} {
    padding-top: 240px;
  }
  @media (max-width: 600px) {
    padding-top: 150px;
  }
  ${mediaQueries.largeMobile} {
    padding-top: 100px;
  }
`;

const Title = styled(Heading1)`
  font-size: 92px;
  font-weight: 900;
  line-height: 120px;
  letter-spacing: 0em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  backface-visibility: hidden;
  transform: translateZ(0);
  ${mediaQueries.tablet} {
    font-size: 80px;
    line-height: 96px;
  }
  @media (max-width: 700px) {
    font-size: 68px;
    line-height: 78px;
  }
  @media (max-width: 595px) {
    font-size: 56px;
    line-height: 64px;
  }
  @media (max-width: 500px) {
    font-size: 48px;
    line-height: 54px;
  }
  ${mediaQueries.largeMobile} {
    font-size: 36px;
    line-height: 43px;
    padding: 0 25px;
    margin: 0 5px;
  }
`;

const GlitchWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Glitch = styled.img`
  max-width: 40vw;
  width: 450px;
  ${mediaQueries.large} {
    width: 35vw;
  }
  position: relative;
`;
const HeroRightGlow = styled.div`
  position: absolute;
  width: 600.85px;
  height: 900px;
  left: 800px;
  top: 250px;

  background: rgba(59, 130, 246, 0.14);
  filter: blur(200px);
  transform: rotate(-20.03deg) translateZ(0);

  ${mediaQueries.tablet} {
    top: -110px;
    left: 50%;
  }
  @media (max-width: 600px) {
    width: 400px;
    height: 600px;
    top: 0px;
    left: 50%;
  }
  ${mediaQueries.largeMobile} {
    width: 300px;
    height: 450px;
    top: 0px;
    right: 45%;
  }
`;

const HeroLeftGlow = styled.div`
  position: absolute;
  width: 600.85px;
  height: 900px;
  left: 250x;
  top: -200px;

  background: rgba(99, 102, 241, 0.12);
  filter: blur(225px);
  transform: rotate(51.04deg) translateZ(0);

  ${mediaQueries.tablet} {
    top: -110px;
    right: 50%;
  }
  @media (max-width: 600px) {
    width: 400px;
    height: 600px;
    top: 0px;
    right: 50%;
  }

  ${mediaQueries.largeMobile} {
    width: 300px;
    height: 450px;
    top: 0px;
    right: 45%;
  }
`;

const LeftStarsGears = styled(Glitch)`
  position: absolute;
  top: 104px;
  left: 2.5vw;
  width: 320px;
  height: auto;
  animation: ${FlickerAnimationKeyframes} 1.5s infinite;
  z-index: -1;
  overflow: hidden;
  ${mediaQueries.tablet} {
    width: 200px;
    top: 250px;
    left: 1vw;
  }
  @media (max-width: 600px) {
    width: 150px;
    top: 190px;
  }
  ${mediaQueries.largeMobile} {
    display: none;
  }
`;

const RightStarsGears = styled(Glitch)`
  position: absolute;
  top: 132px;
  right: 2.5vw;
  width: 320px;
  height: auto;
  animation: ${FlickerAnimationKeyframes} 1.2s infinite;
  z-index: -1;
  ${mediaQueries.tablet} {
    width: 220px;
    top: 240px;
    right: 1vw;
  }
  @media (max-width: 600px) {
    width: 160px;
    top: 190px;
  }
  ${mediaQueries.largeMobile} {
    display: none;
  }
`;

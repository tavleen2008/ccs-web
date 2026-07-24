import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import TextLoop from "react-text-loop";
import {
  MLHLogo,
  Left1,
  Left2,
  Left3,
  Right1,
  Right2,
  Right3,
  LeftStarsAndGears,
  RightStarsAndGears,
} from "src/assets/img";
import { FlickerAnimationKeyframes } from "src/components/base/Animation";
import { useDeviceSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import styled, { css } from "styled-components";

import { Heading1, Heading2 } from "../../styles";

import { Column } from "./Constants";
import GlitchEffect from "./Glitch";

const words = ["Learn", "Code", "Collaborate"];

const GLITCH_DURATION1 = 500;
const GLITCH_DURATION2 = 700;
const GLITCH_DURATION3 = 500;

const Heading: React.FC<{ currentStepIndex: number }> = ({
  currentStepIndex,
}) => {
  const currentWordIndex = currentStepIndex % words.length;
  const currentWord = words[currentWordIndex];

  const [glitchFrame, setGlitchFrame] = useState(0); // done if === 4
  const isTablet = useDeviceSize("tablet");
  const brk = useDeviceSize(581);
  const titleBrk = useDeviceSize(1124);

  useEffect(() => {
    setGlitchFrame(1);
    setTimeout(() => {
      setGlitchFrame(2);
    }, GLITCH_DURATION1);
    setTimeout(() => {
      setGlitchFrame(3);
    }, GLITCH_DURATION1 + GLITCH_DURATION2);
    setTimeout(() => {
      setGlitchFrame(4);
    }, GLITCH_DURATION1 + GLITCH_DURATION2 + GLITCH_DURATION3);
  }, []);

  return (
    <HeadingContainer>
      <GlitchWrapper>
        <HeroLeftGlow />
        <HeroRightGlow />
      </GlitchWrapper>
      <Title style={{ visibility: glitchFrame >= 1 ? "visible" : "hidden" }}>
        Creative Computing Society
        <br />
        <div style={{ visibility: glitchFrame >= 2 ? "visible" : "hidden" }}>
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
          opacity: glitchFrame >= 2 && currentStepIndex === 0 ? 1 : 0,
          pointerEvents: currentStepIndex === 0 ? "auto" : "none",
        }}
      >
        <Tagline>
          A student community at Thapar Institute — learning, building, and
          collaborating with code.
        </Tagline>
        <CtaRow>
          <PrimaryCta smooth to="/#about">
            Explore More <span aria-hidden="true">&rarr;</span>
          </PrimaryCta>
          {/* TODO(CCS): point to a dedicated events page/section once it exists */}
          <GhostCta smooth to="/#about">
            See Events
          </GhostCta>
        </CtaRow>
      </HeroSupport>

      <GlitchWrapper
        style={{
          display: glitchFrame === 1 ? "" : "none",
        }}
      >
        <GlitchEffect image={Left1} alt={""} style={leftGlitch1Styles} />
        <GlitchEffect image={Right1} alt={""} style={rightGlitch1Styles} />
      </GlitchWrapper>
      <GlitchWrapper
        style={{
          display: glitchFrame === 2 ? "" : "none",
        }}
      >
        <GlitchEffect image={Left2} alt={""} style={leftGlitch2Styles} />
        <GlitchEffect image={Right2} alt={""} style={rightGlitch2Styles} />
      </GlitchWrapper>
      <GlitchWrapper
        style={{
          display: glitchFrame === 3 ? "" : "none",
        }}
      >
        <GlitchEffect image={Left3} alt={""} style={leftGlitch3Styles} />
        <GlitchEffect image={Right3} alt={""} style={rightGlitch3Styles} />
      </GlitchWrapper>
      <GlitchWrapper
        style={{
          display: glitchFrame >= 2 ? "" : "none",
        }}
      >
        <LeftStarsGears src={LeftStarsAndGears} alt="" />
        <RightStarsGears src={RightStarsAndGears} alt="" />
      </GlitchWrapper>
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

const CtaRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ctaBase = css`
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  padding: 12px 22px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease,
    border-color 0.15s ease, filter 0.15s ease;
  will-change: transform;
`;

const PrimaryCta = styled(HashLink)`
  ${ctaBase}
  color: #ffffff;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary.blue} 0%,
    ${({ theme }) => theme.colors.primary.cyan} 100%
  );
  box-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.6);
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 26px -10px rgba(0, 0, 0, 0.65);
    filter: brightness(1.05);
  }
`;

const GhostCta = styled(HashLink)`
  ${ctaBase}
  color: ${({ theme }) => theme.colors.text.dark.white};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(148, 163, 184, 0.28);
  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(148, 163, 184, 0.45);
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

const Subtitle = styled(Heading2)`
  font-size: 20px;
  margin-top: 20px;
  ${mediaQueries.tablet} {
    font-weight: 700;
    line-height: 32px;
    margin-top: 15px;
  }
  @media (max-width: 640px) {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
  }
  @media (max-width: 500px) {
    font-family: "Satoshi";
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    padding: 0 10px;
  }
`;

const StyledLogo = styled.img`
  margin-bottom: -4px;
  scale: 0.8;
  opacity: 0.85;
  ${mediaQueries.tablet} {
    margin-bottom: -5px;
  }
  @media (max-width: 600px) {
    scale: 0.7;
    margin-right: -2px;
  }
  ${mediaQueries.largeMobile} {
    margin-bottom: -5.5px;
    margin-right: -5px;
    scale: 0.65;
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
// for mobile

const leftGlitch1Styles = {
  top: "-25px",
  left: "15px",
  [mediaQueries.tablet]: {
    top: "200px",
    width: "40vw",
    "-webkit-transform": "scaleY(-1)",
    transform: "scaleY(-1) translateY(-90px);",
  },
  [mediaQueries.largeMobile]: {
    top: "-100px",
    width: "40vw",
    transform: "translateY(-20px);",
  },
};

const rightGlitch1Styles = {
  top: "115px",
  right: "25px",
  [mediaQueries.tablet]: {
    top: "165px",
    width: "40vw",
  },
  "@media (max-width: 600px)": {
    top: "35px",
  },
  [mediaQueries.largeMobile]: {
    top: "25px",
    transform: "translateY(-70px);",
  },
};

const leftGlitch2Styles = {
  top: "170px",
  left: "94px",
  [mediaQueries.tablet]: {
    top: "200px",
    width: "40vw",
    "-webkit-transform": "scaleY(-1)",
    transform: "scaleY(-1) translateY(130px) translateX(-30px);",
  },
  [mediaQueries.largeMobile]: {
    top: "-120px",
    width: "40vw",
    transform: "translateY(-50px) translateX(-40px);",
  },
};

const rightGlitch2Styles = {
  top: "113px",
  right: "50px",
  [mediaQueries.tablet]: {
    width: "40vw",
    transform: "translateY(50px) translateX(30px);",
  },
  "@media (max-width: 600px)": {
    top: "80px",
  },
  [mediaQueries.largeMobile]: {
    top: "30px",
    width: "40vw",
    transform: "translateY(50px) translateX(30px);",
  },
};

const leftGlitch3Styles = {
  top: "230px",
  [mediaQueries.tablet]: {
    "-webkit-transform": "scaleY(-1)",
    transform: "scaleY(-1) translateY(250px);",
    top: "-90px",
    width: "40vw",
  },
  [mediaQueries.largeMobile]: {
    top: "-90px",
    width: "40vw",
    transform: "translateY(-100px);",
  },
};

const rightGlitch3Styles = {
  top: "285px",
  right: "130px",
  [mediaQueries.tablet]: {
    top: "330px",
    right: "-170px",
    width: "40vw",
    transform: "translateY(-50px) translateX(100px) ;",
  },
  "@media (max-width: 600px)": {
    top: "230px",
  },
  "@media (max-width: 500px)": {
    top: "200px",
  },
  [mediaQueries.largeMobile]: {
    top: "150px",
    transform: "translateY(-150px) translateX(100px) ;",
  },
};

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
  top: 80px;
  right: calc(50% + 290px);
  width: 300px;
  height: auto;
  animation: ${FlickerAnimationKeyframes} 1.5s infinite;
  z-index: -1;
  overflow: hidden;
  ${mediaQueries.tablet} {
    width: 250px;
    top: 290px;
    right: calc(50% + 220px);
  }
  @media (max-width: 600px) {
    width: 170px;
    top: 200px;
    right: calc(50% + 150px);
  }

  ${mediaQueries.largeMobile} {
    width: 100px;
    top: 155px;
    right: calc(50% + 85px);
  }
`;

const RightStarsGears = styled(Glitch)`
  position: absolute;
  top: 110px;
  left: calc(50% + 280px);
  width: 300px;
  height: auto;
  animation: ${FlickerAnimationKeyframes} 1.2s infinite;
  z-index: -1;
  ${mediaQueries.tablet} {
    width: 300px;
    top: 270px;
    left: calc(50% + 180px);
  }
  @media (max-width: 600px) {
    width: 200px;
    top: 200px;
    left: calc(50% + 150px);
  }
  ${mediaQueries.largeMobile} {
    width: 100px;
    top: 175px;
    left: calc(50% + 80px);
  }
`;

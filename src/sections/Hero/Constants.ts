import { theme } from "src/styles";
import { mediaQueries } from "src/utils/responsive";
import styled, { css } from "styled-components";

import { Heading2, LargeBody } from "../../styles";

export const AboutText =
  "Creative Computing Society (CCS) is one of the oldest and the most prestigious societies of Thapar Institute of Engineering and Technology. With the knowledge and experience of 22 years, the society aims to create and promote a healthy technical environment at TIET.";

export const YouBelongText =
  "At CCS, you'll find a community that helps you learn, create, and grow. From hands-on workshops and real-world projects to design opportunities, mentorship from a strong alumni network, and exposure to emerging technologies, you'll build technical skills, meaningful connections, and the confidence to thrive in tech.";

interface BrowserProps {
  inView: boolean;
}

export const PopUpWrapper = styled.div<BrowserProps>`
  transform: scale(0);
  ${({ inView }) =>
    inView
      ? css`
          animation: scaleUp 0.9s 1 forwards;
          animation-delay: 0.1s;
        `
      : css`
          animation: none;
          transform: scale(0);
        `}

  @keyframes scaleUp {
    0% {
      transform: scale(0);
    }
    70% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

interface TintProps {
  color: string;
}

export const GradientOverlay = styled.div<TintProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.color};
  opacity: 0.16;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ResponsiveH2 = styled(Heading2)`
  padding-bottom: 20px;
  color: ${({ theme }) => theme.colors.text.dark.white};
  ${mediaQueries.tablet} {
    font-size: 36px;
    font-weight: 900;
    line-height: 43px;
  }
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 36px;
  }
  ${mediaQueries.largeMobile} {
    font-size: 24px;
  }
`;

export const ResponsiveLB = styled(LargeBody)`
  color: ${({ theme }) => theme.colors.text.dark.gray};
  line-height: 32px;
  ${mediaQueries.tablet} {
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 28px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
    line-height: 25.6px;
  }
`;

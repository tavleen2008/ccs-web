import { mediaQueries } from "src/utils/responsive";
import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components";
import tw from "twin.macro";

/**
 * CCS palette — professional deep-navy system.
 * NOTE: token keys (primary.pink, primary.cyan, …) are intentionally kept the
 * same so every consumer keeps working; only the hex values were refined away
 * from the old neon set toward calm cool tones (steel / cyan / indigo).
 */
export const theme: DefaultTheme = {
  colors: {
    background: {
      dark: "#0B1220",
      light: "#172239",
    },
    text: {
      dark: {
        white: "#FFFFFFDE",
        gray: "#FFFFFF99",
        black: "#FFFFFF61",
      },
      light: {
        black: "#0D0D0B",
        gray: "#6D6D6D",
        white: "#BDBDBD",
      },
    },
    primary: {
      cyan: "#38BDF8",
      blue: "#3B82F6",
      purple: "#6366F1",
      pink: "#A78BFA",
      yellow: "#2563EB",
      orange: "#2FB4A6",
    },
    secondary: {
      cyan: "#0E7490",
      blue: "#1D4ED8",
      purple: "#4338CA",
      pink: "#4F46E5",
      yellow: "#1E3A8A",
      orange: "#1D4ED8",
    },
    state: {
      error: "#F87171",
      success: "#4ADE80",
      infomative: "#7DD3FC",
      warning: "#FCD34D",
    },
  },
};

export const Heading1 = styled.h1`
  margin: 0px;
  font-family: "Castledown";
  font-size: 48px;
  font-weight: 900;

  ${mediaQueries.tablet} {
    font-size: 36px;
  }

  ${mediaQueries.largeMobile} {
    font-size: 24px;
  }
`;

export const Heading2 = styled.h2`
  margin: 0px;
  font-family: "Castledown";
  font-size: 36px;
  font-weight: 900;

  ${mediaQueries.tablet} {
    font-size: 24px;
  }
`;

export const Heading3 = styled.h3`
  margin: 0px;
  font-family: "Castledown";
  font-size: 24px;
  font-weight: 900;

  ${mediaQueries.tablet} {
    font-size: 20px;
  }
`;

export const LargeBody = styled.p`
  margin: 0px;
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 400;

  ${mediaQueries.tablet} {
    font-size: 16px;
  }
`;

export const LargeBodyMedium = styled.p`
  margin: 0px;
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 500;

  ${mediaQueries.tablet} {
    font-size: 16px;
  }
`;

export const LargeBodyBold = styled.p`
  margin: 0px;
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 700;

  ${mediaQueries.tablet} {
    font-size: 16px;
  }
`;

export const Body = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
`;

export const BodyBold = styled.p`
  margin: 0px;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 700;
  padding: 0px;
  margin: 0px;
`;

export const BodyHeavy = styled.p`
  margin: 0px;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 900;
`;

export const Caption = styled.p`
  margin: 0px;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
  font-style: italic;
`;

export const TWText = {
  // mobile not finalized
  // Unfixed : https://github.com/tailwindlabs/tailwindcss/issues/2920
  title: tw`font-heading font-weight[900] text-high-emphasis text-56 leading-normal tb:(text-56) lm:(text-36!) mb:(text-36!)`,
  h1: tw`font-heading font-weight[900] text-high-emphasis text-48 leading-normal tb:(text-36) lm:(text-32!)`,
  h2: tw`font-heading font-weight[900] text-high-emphasis text-36 leading-normal tb:(text-32) lm:(text-28! leading-relaxed)`,
  h3: tw`font-heading font-weight[900] text-high-emphasis text-28 leading-normal tb:(text-24 leading-relaxed) lm:(text-18!) mb:(text-16!)`,
  largeBody: tw`font-body font-weight[400] text-high-emphasis text-20 leading-relaxed lm:(text-18)`,
  largeBodyMed: tw`font-body font-weight[500] text-high-emphasis text-20 leading-relaxed lm:(font-weight[400] text-16)`,
  largeBodyBold: tw`font-body font-weight[700] text-high-emphasis text-20 leading-relaxed`,
  body: tw`font-body font-weight[400] text-high-emphasis text-16 leading-relaxed tb:(text-14 leading-extra)`,
  button: tw`font-heading font-weight[400] text-high-emphasis text-16 leading-relaxed tb:(text-14 leading-extra)`,
  bodyBold: tw`font-body font-weight[700] text-high-emphasis text-16 leading-relaxed tb:(text-14 leading-extra)`,
  overline: tw`font-body font-weight[500] text-high-emphasis text-16 tracking-wide leading-relaxed`,
  caption: tw`font-body font-weight[400] text-high-emphasis text-14 leading-loose tb:(text-10)`,
  note: tw`font-note font-weight[400] text-blue-gray text-20 leading-relaxed`,
  cta: tw`font-body font-weight[500] text-high-emphasis text-16 leading-extra tb:(text-10)`,
  link: tw`font-body font-weight[700] underline text-high-emphasis text-16 leading-extra tb:(text-14)`,
};

export const TWShared = {
  hover: css`
    &:hover {
      transition: opacity 200ms;
      &:not(:disabled) {
        opacity: 0.85;
      }
    }
  `,
  avatar: css`
    transform: scale(1);
    opacity: 1;
    transition: all 150ms ease-in-out;

    &:hover {
      transform: scale(1.05);
      opacity: 0.85;
    }
  `,
  focus: css``,
  disabled: css`
    &:disabled {
      cursor: not-allowed;
      filter: grayscale(1);
      will-change: filter;
    }
  `,
};

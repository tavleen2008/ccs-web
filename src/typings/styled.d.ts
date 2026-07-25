import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: {
        dark: string;
        light: string;
      };
      text: {
        dark: {
          white: string;
          gray: string;
          black: string;
        };
        light: {
          black: string;
          gray: string;
          white: string;
        };
      };
      primary: {
        cyan: string;
        blue: string;
        purple: string;
        pink: string;
        yellow: string;
        orange: string;
      };
      secondary: {
        cyan: string;
        blue: string;
        purple: string;
        pink: string;
        yellow: string;
        orange: string;
      };
      state: {
        error: string;
        success: string;
        infomative: string;
        warning: string;
      };
      solid: {
        navy: string;
        slateBlue: string;
        steelBlue: string;
        mutedCyan: string;
        softTeal: string;
        graphite: string;
        coolGray: string;
        mutedIndigo: string;
        warmAmber: string;
        dustyGold: string;
        softLavender: string;
        darkOlive: string;
        offWhite: string;
      };
    };
  }
}

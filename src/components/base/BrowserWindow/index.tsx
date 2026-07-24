import React, { ComponentPropsWithoutRef } from "react";
import { mediaQueries } from "src/utils/responsive";
import styled from "styled-components";

interface WindowProps {
  gradientStartColor: string;
  gradientEndColor: string;
}

type Props = ComponentPropsWithoutRef<"div"> & WindowProps;

const WindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid rgba(148, 163, 184, 0.24);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 20px -6px rgba(0, 0, 0, 0.5);
`;

const WindowToolbar = styled.div<WindowProps>`
  padding: 12px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 8px;
  background: linear-gradient(
    90deg,
    ${(props) => props.gradientStartColor},
    ${(props) => props.gradientEndColor}
  );
  border-bottom: 1px solid rgba(148, 163, 184, 0.18);

  ${mediaQueries.largeMobile} {
    padding: 9px;
    gap: 6px;
  }
`;

/**
 * Subtle realistic depth behind the window (replaces the old neon color
 * bloom). Kept as an element so component structure is unchanged.
 */
const ShadowBox = styled.div<WindowProps>`
  content: "";
  z-index: -1;
  position: absolute;
  top: 8px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.55);
  filter: blur(18px);
  opacity: 0.5;
  transition: opacity 0.3s;
  border-radius: inherit;
`;

const WindowToolbarIcon = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);

  ${mediaQueries.largeMobile} {
    width: 10px;
    height: 10px;
  }
`;

const WindowContent = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.dark.white};
`;

const WindowContentGradient = styled.div<WindowProps>`
  display: flex;
  justify-content: center;
  background: linear-gradient(
      90deg,
      ${(props) => props.gradientStartColor}22,
      ${(props) => props.gradientEndColor}22
    ),
    ${({ theme }) => theme.colors.background.dark};
`;

const BrowserWindow: React.FC<Props> = ({
  gradientStartColor,
  gradientEndColor,
  ...props
}) => (
  <WindowContainer>
    <ShadowBox
      gradientStartColor={gradientStartColor}
      gradientEndColor={gradientEndColor}
    />
    <WindowToolbar
      gradientStartColor={gradientStartColor}
      gradientEndColor={gradientEndColor}
    >
      <WindowToolbarIcon />
      <WindowToolbarIcon />
      <WindowToolbarIcon />
    </WindowToolbar>
    <WindowContent>{props.children}</WindowContent>
  </WindowContainer>
);

const BrowserWindowGradient: React.FC<Props> = ({
  gradientStartColor,
  gradientEndColor,
  ...props
}) => (
  <WindowContainer>
    <ShadowBox
      gradientStartColor={gradientStartColor}
      gradientEndColor={gradientEndColor}
    />
    <WindowToolbar
      gradientStartColor={gradientStartColor}
      gradientEndColor={gradientEndColor}
    >
      <WindowToolbarIcon />
      <WindowToolbarIcon />
      <WindowToolbarIcon />
    </WindowToolbar>
    <WindowContentGradient
      gradientStartColor={gradientStartColor}
      gradientEndColor={gradientEndColor}
    >
      {props.children}
    </WindowContentGradient>
  </WindowContainer>
);

export {
  BrowserWindow as BrowserWindow,
  BrowserWindowGradient as BrowserWindowGradient,
};

import React from "react";
import { mediaQueries } from "src/utils/responsive";
import styled, { keyframes } from "styled-components";

const SvgContainer = styled.svg`
  max-width: 40vw;
  width: 450px;
  ${mediaQueries.large} {
    width: 35vw;
  }
  position: relative;
`;

const GlitchImage = styled.image<{ $filterId: string; $animation: any }>`
  filter: url(#${({ $filterId }) => $filterId});
  animation: 0.6s ${({ $animation }) => $animation} alternate infinite;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

interface GlitchEffectProps {
  image: string;
  alt: string;
  style?: React.CSSProperties;
}

let instanceCounter = 0;

const GlitchEffect: React.FC<GlitchEffectProps> = ({ image, alt, style }) => {
  const [uniqueId] = React.useState(() => ++instanceCounter);
  const filter1Id = `filter-1-${uniqueId}`;
  const filter2Id = `filter-2-${uniqueId}`;
  const filter3Id = `filter-3-${uniqueId}`;

  const myAnimation = React.useMemo(
    () => keyframes`
      0% {
        filter: none;
      }
      20% {
        filter: url(#${filter1Id});
      }
      50% {
        filter: url(#${filter2Id});
      }
      80% {
        filter: url(#${filter3Id});
      }
      94% {
        filter: none;
      }
    `,
    [filter1Id, filter2Id, filter3Id]
  );

  return (
    <SvgContainer viewBox="0 0 900 900" style={style}>
      <defs>
        <filter
          id={filter1Id}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="linearRGB"
        >
          <feMorphology
            operator="dilate"
            radius="10 0"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            result="morphology1"
          />
        </filter>
        <filter
          id={filter2Id}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="linearRGB"
        >
          <feMorphology
            operator="dilate"
            radius="10 2"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            result="morphology1"
          />
        </filter>
        <filter
          id={filter3Id}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="linearRGB"
        >
          <feMorphology
            operator="dilate"
            radius="15 0"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            result="morphology1"
          />
        </filter>
      </defs>
      <g>
        <title>{alt}</title>
        <GlitchImage
          x="0%"
          y="0%"
          preserveAspectRatio="xMidYMid meet"
          href={image}
          id="my-image"
          $filterId={filter1Id}
          $animation={myAnimation}
        />
      </g>
    </SvgContainer>
  );
};

export default GlitchEffect;

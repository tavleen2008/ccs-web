import React from "react";
import { mediaQueries } from "src/utils/responsive";
import styled from "styled-components";

// TODO(CCS): drop in a real CCS / HackTU recap video.
// When you have a YouTube ID, this static poster can be swapped back for an
// <iframe> embed — the surrounding tile geometry stays the same.

const RecapVideoContainer = styled.div`
  text-align: center;
  overflow: hidden;
  position: absolute;
  width: 95%;
  left: 0.8%;
  top: 9%;
  height: 87.3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: ${({ theme }) => theme.colors.solid.graphite};

  ${mediaQueries.tablet} {
    width: 95%;
    left: 0.8%;
    top: 6.8%;
    height: 62.5%;
  }

  ${mediaQueries.largeMobile} {
    width: 95%;
    left: 0.8%;
    top: 7.5%;
    height: 69.2%;
  }
`;

const PlayGlyph = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    margin-left: 4px;
    border-style: solid;
    border-width: 12px 0 12px 20px;
    border-color: transparent transparent transparent
      ${({ theme }) => theme.colors.text.dark.white};
  }

  ${mediaQueries.tablet} {
    width: 40px;
    height: 40px;
    &::after {
      border-width: 8px 0 8px 13px;
    }
  }
`;

const RecapTitle = styled.p`
  margin: 0;
  font-family: "Castledown", sans-serif;
  font-weight: 900;
  font-size: 20px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.text.dark.white};

  ${mediaQueries.tablet} {
    font-size: 14px;
  }
`;

const RecapSubtitle = styled.p`
  margin: 0;
  font-family: "Satoshi", sans-serif;
  font-size: 13px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary.cyan};

  ${mediaQueries.tablet} {
    font-size: 10px;
  }
`;

interface RecapVideoProps {
  onMouseEnter: () => void;
  onMouseOut: () => void;
}

const RecapVideo: React.FC<RecapVideoProps> = ({
  onMouseEnter,
  onMouseOut,
}) => {
  return (
    <RecapVideoContainer onMouseEnter={onMouseEnter} onMouseOut={onMouseOut}>
      <PlayGlyph />
      <RecapTitle>CCS Recap</RecapTitle>
      <RecapSubtitle>Coming Soon</RecapSubtitle>
    </RecapVideoContainer>
  );
};

export default RecapVideo;

import React, { useEffect } from "react";
import { ContentWrapper, SectionWrapper } from "src/components/base";
import { ORGANIZERS, Organizer } from "src/copy/organizers";
import { LargeBodyBold, theme } from "src/styles";
import { mediaQueries } from "src/utils";
import styled, { css } from "styled-components";

const OrganizerContentWrapper = styled(ContentWrapper)`
  margin: 100px 0px;
  max-width: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .default {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
    width: 45px;
    height: 45px;
    pointer-events: none;

    ${mediaQueries.medium} {
      width: 40px;
      height: 40px;
    }

    ${mediaQueries.largeMobile} {
      width: 35px;
      height: 35px;
    }
  }

  .active {
    border: 4px solid #ffffff;
  }

  ${mediaQueries.custom(768)} {
    flex-direction: column;
    gap: 30px;
  }
`;

const LeftGrid = styled.div`
  color: white;
  display: grid;
  grid-template-areas:
    "a . . . . . . . . ."
    "b . h . . . . . . ."
    ". e . j . n . . t ."
    ". . i . . o q . u ."
    "c f . k . p . s . ."
    "d . . . m . r . . w"
    ". g . l . . . . v .";
`;

const OrganizerImg = styled.img`
  z-index: 100;
  width: 45px;
  height: 45px;
  border: 2.28463px solid #ffffff;
  object-fit: cover;

  ${mediaQueries.medium} {
    width: 40px;
    height: 40px;
  }

  ${mediaQueries.largeMobile} {
    width: 35px;
    height: 35px;
  }
`;

const RightGrid = styled.div`
  color: white;
  display: grid;
  grid-template-areas:
    ". . . f h . . . . t"
    ". . . . . . n p . u"
    ". . d . i l . . . v"
    ". b . g . . o . s ."
    "a . . . j m . q . w"
    ". c e . k . . r . .";
`;

const FooterContainer = styled.div`
  ${mediaQueries.custom(1200)} {
    position: absolute;
    top: -100px;
  }

  ${mediaQueries.custom(768)} {
    position: static;
  }
`;

const FooterText = styled(LargeBodyBold)`
  color: ${({ theme }) => theme.colors.text.dark.white};
  text-align: center;
  line-height: 200%;
`;

// One deliberate solid per organizer chip, cycling through the site's
// muted "no-gradient" palette instead of blending between two colors.
const SOLID_CYCLE = [
  theme.colors.solid.steelBlue,
  theme.colors.solid.mutedIndigo,
  theme.colors.solid.softTeal,
  theme.colors.solid.warmAmber,
  theme.colors.solid.slateBlue,
  theme.colors.solid.mutedCyan,
  theme.colors.solid.coolGray,
  theme.colors.solid.dustyGold,
  theme.colors.solid.softLavender,
  theme.colors.solid.graphite,
  theme.colors.solid.navy,
  theme.colors.solid.darkOlive,
];

const chipStyle = css`
  position: absolute;
  z-index: -1;
  top: -5px;
  width: 45px;
  height: 45px;
  opacity: 0.8;

  ${mediaQueries.medium} {
    width: 40px;
    height: 40px;
  }

  ${mediaQueries.largeMobile} {
    width: 35px;
    height: 35px;
  }
`;

const ColourfulBg1 = styled.div<{ i: number }>`
  ${chipStyle}
  left: 5px;
  background: ${({ i }) => SOLID_CYCLE[i % SOLID_CYCLE.length]};
`;

const ColourfulBg2 = styled.div<{ i: number }>`
  ${chipStyle}
  left: -5px;
  background: ${({ i }) => SOLID_CYCLE[(i + 5) % SOLID_CYCLE.length]};
`;


const Footer: React.FC = () => {
  useEffect(() => {
    let intervalId: number | undefined;
    let curOrganizer = 0;

    const startInterval = () => {
      intervalId = window.setInterval(() => {
        const prevOrganizer = curOrganizer;
        curOrganizer = Math.floor(Math.random() * (ORGANIZERS.length - 1));
        showOrganizer(curOrganizer, prevOrganizer);
      }, 1800);
    };

    const stopInterval = () => {
      clearInterval(intervalId);
      intervalId = undefined;
    };

    const onMouseEnter = (e: any): void => {
      if (e.target.dataset.key) {
        const prevOrganizer = curOrganizer;
        curOrganizer = e.target.dataset.key;
        stopInterval();
        showOrganizer(curOrganizer, prevOrganizer);
      }
    };

    const onMouseLeave = (): void => {
      if (!intervalId) {
        startInterval();
      }
    };

    startInterval();
    const randomOrganizerContainers = document.querySelectorAll("[data-key]");
    randomOrganizerContainers.forEach((container) => {
      container.addEventListener("mouseover", onMouseEnter);
      container.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      clearInterval(intervalId);
      randomOrganizerContainers.forEach((container) => {
        container.removeEventListener("mouseenter", onMouseEnter);
        container.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  function showOrganizer(curOrganizer: number, prevOrganizer: number): void {
    const randomOrganizer = ORGANIZERS[curOrganizer];
    const randomOrganizerContainer = document.querySelector(
      `[data-key="${curOrganizer}"]`
    );
    const darkBox = randomOrganizerContainer?.querySelector(".darkbox");
    darkBox?.classList.remove("default");
    const randomOrganizerImg =
      randomOrganizerContainer?.querySelector("#organizer");
    randomOrganizerImg?.classList.add("active");

    const personalText = document.getElementById("personal");
    if (personalText) {
      personalText.innerText = `${randomOrganizer.name}, ${randomOrganizer.team} ${randomOrganizer.emoji}`;
    }

    if (curOrganizer !== prevOrganizer) {
      const prevOrganizerContainer = document.querySelector(
        `[data-key="${prevOrganizer}"]`
      );
      const prevDarkBox = prevOrganizerContainer?.querySelector(".darkbox");
      prevDarkBox?.classList.add("default");
      const prevOrganizerImg =
        prevOrganizerContainer?.querySelector("#organizer");
      prevOrganizerImg?.classList.remove("active");
    }
  }

  const HALF_ORGANIZERS = ORGANIZERS.length / 2;
  const firstHalf = ORGANIZERS.slice(0, HALF_ORGANIZERS);
  const secondHalf = ORGANIZERS.slice(HALF_ORGANIZERS, ORGANIZERS.length);

  return (
    <SectionWrapper>
      <OrganizerContentWrapper>
        <LeftGrid>
          {firstHalf.map((organizer: Organizer, i: number) => (
            <div
              key={i}
              data-key={i}
              style={{
                gridArea: String.fromCharCode(97 + i),
                position: "relative",
              }}
            >
              <ColourfulBg1 i={i} />
              <div className="default darkbox"></div>
              <OrganizerImg
                id="organizer"
                src={organizer.img}
                alt={`${organizer.name}`}
                data-key={i}
                loading="lazy"
              />
            </div>
          ))}
        </LeftGrid>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <FooterContainer>
            <FooterText>
              Made with 💙 by the Creative Computing Society, Thapar Institute,
              Patiala 🇮🇳
            </FooterText>
            <FooterText id="personal"></FooterText>
          </FooterContainer>
        </div>
        <RightGrid>
          {secondHalf.map((organizer: Organizer, i: number) => (
            <div
              key={i}
              data-key={i + HALF_ORGANIZERS}
              style={{
                gridArea: String.fromCharCode(97 + i),
                position: "relative",
              }}
            >
              <ColourfulBg2 i={i} />
              <div className="default darkbox"></div>
              <OrganizerImg
                id="organizer"
                src={organizer.img}
                alt={`${organizer.name}`}
                data-key={i + HALF_ORGANIZERS}
                loading="lazy"
              />
            </div>
          ))}
        </RightGrid>
      </OrganizerContentWrapper>
    </SectionWrapper>
  );
};

export default Footer;

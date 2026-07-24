import { trackGoal } from "fathom-client";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "styled-components/macro";
import Icon from "src/components/base/Icon";
import { SOCIALS } from "src/constants/social";
import { TWShared, BodyBold, theme } from "src/styles";

import { NavBarProps, SECTIONS, NAV_LINKS } from "./constants";

const navGroupStyles: React.CSSProperties = {
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: "28px",
  height: "80px",
};

const socialGroupStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "18px",
};

const linkStyles: React.CSSProperties = {
  textDecoration: "none",
  color: theme.colors.text.dark.white,
};

const Menu: React.FC<NavBarProps> = () => {
  return (
    <>
      <div style={navGroupStyles}>
        {Object.entries(SECTIONS).map(([id, name]) => (
          <Link
            key={id}
            to={"/#" + id}
            css={[TWShared.hover]}
            style={linkStyles}
          >
            <BodyBold>
              <span>{name}</span>
            </BodyBold>
          </Link>
        ))}

        {NAV_LINKS.map(({ to, label }) => (
          <Link key={to} to={to} css={[TWShared.hover]} style={linkStyles}>
            <BodyBold>
              <span>{label}</span>
            </BodyBold>
          </Link>
        ))}
      </div>

      <div style={socialGroupStyles}>
        {Object.entries(SOCIALS).map(
          ([id, { icon, link, fathomEventCode }]) => (
            <a
              key={id}
              aria-label={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackGoal(fathomEventCode, 0)}
            >
              <Icon name={icon} hover={true}></Icon>
            </a>
          )
        )}
      </div>
    </>
  );
};

export default Menu;

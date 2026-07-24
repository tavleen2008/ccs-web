import { IconName } from "src/components/base/Icon";

export enum SocialPlatforms {
  INSTA = "Instagram",
  FACEBOOK = "Facebook",
  TWITTER = "Twitter",
  LINKEDIN = "LinkedIn",
  TIKTOK = "TikTok",
  MEDIUM = "Medium",
}

type TSocialInfo = {
  icon: IconName;
  link: string;
  fathomEventCode: string;
};

// TODO(CCS): replace the placeholder "#" links with the society's real social
// profiles (and remove any platforms CCS does not use).
export const SOCIALS: Record<SocialPlatforms, TSocialInfo> = {
  [SocialPlatforms.INSTA]: {
    icon: "instagram",
    link: "#",
    fathomEventCode: "LX6A0MAL",
  },
  [SocialPlatforms.TWITTER]: {
    icon: "twitter",
    link: "#",
    fathomEventCode: "XMBYPYVQ",
  },
  [SocialPlatforms.FACEBOOK]: {
    icon: "facebook",
    link: "#",
    fathomEventCode: "N8KZMCWY",
  },
  [SocialPlatforms.LINKEDIN]: {
    icon: "linkedin",
    link: "#",
    fathomEventCode: "3ADUIO8D",
  },
  [SocialPlatforms.TIKTOK]: {
    icon: "tiktok",
    link: "#",
    fathomEventCode: "YF125KX9",
  },
  [SocialPlatforms.MEDIUM]: {
    icon: "medium",
    link: "#",
    fathomEventCode: "K5RP1B2Z",
  },
};

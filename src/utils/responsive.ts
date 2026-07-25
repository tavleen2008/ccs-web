import { deviceBreakpoints, DeviceType } from "src/constants/deviceBreakpoints";

export type TDeviceType = DeviceType;
export { deviceBreakpoints };

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const mediaQueries = {
  custom: customMediaQuery,
  large: customMediaQuery(deviceBreakpoints.large),
  medium: customMediaQuery(deviceBreakpoints.medium),
  tablet: customMediaQuery(deviceBreakpoints.tablet),
  largeMobile: customMediaQuery(deviceBreakpoints.largeMobile),
  mobile: customMediaQuery(deviceBreakpoints.mobile),
  smallMobile: customMediaQuery(deviceBreakpoints.smallMobile),
};

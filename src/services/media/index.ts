import { SIZES } from '../../records/Theme';

const customMediaQuery = (minWidth: number): string => `@media (min-width: ${minWidth}px)`;

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(SIZES.DESKTOP),
  tablet: customMediaQuery(SIZES.TABLET),
  bigMobile: customMediaQuery(SIZES.BIG_MOBILE),
  mobile: customMediaQuery(SIZES.MIDDLE_MOBILE),
  smallMobile: customMediaQuery(SIZES.SMALL_MOBILE),
};

export default media;

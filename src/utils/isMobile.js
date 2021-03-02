import { MOBILE } from '../constants/rs-breakpoints';

const isMobile = () => {
  return !(window.innerWidth > MOBILE);
};

export default isMobile;

import { SMALL } from '../constants/rs-breakpoints';

const isSMALL = () => {
  return !(window.innerWidth > SMALL);
};

export default isSMALL;

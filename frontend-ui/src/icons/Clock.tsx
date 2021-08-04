import * as React from 'react';
import { createSvgIcon } from '../utils';
const ClockIcon = createSvgIcon(
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
    <path d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm92.49 313l-20 25a16 16 0 01-22.49 2.5l-67-49.72a40 40 0 01-15-31.23V112a16 16 0 0116-16h32a16 16 0 0116 16v144l58 42.5a16 16 0 012.49 22.5z' />
  </svg>,
  'ClockIcon'
);
export default ClockIcon;

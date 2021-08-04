import * as React from 'react';
import { createSvgIcon } from '../utils';
const BinderIcon = createSvgIcon(
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 16'>
    <path
      d='M13.62 5a.38.38 0 00.38-.38V3.38a.38.38 0 00-.38-.38H13V1.5A1.5 1.5 0 0011.5 0h-10A1.5 1.5 0 000 1.5v13A1.5 1.5 0 001.5 16h10a1.5 1.5 0 001.5-1.5V13h.62a.38.38 0 00.38-.38v-1.24a.38.38 0 00-.38-.38H13V9h.62a.38.38 0 00.38-.38V7.38a.38.38 0 00-.38-.38H13V5z'
      fill='currentColor'
    />
    <rect x={3} y={3.5} width={7} height={1} rx={0.2} fill='#fcfcfc' />
    <rect x={3} y={6.5} width={7} height={1} rx={0.2} fill='#fcfcfc' />
    <rect x={3} y={9.5} width={7} height={1} rx={0.2} fill='#fcfcfc' />
  </svg>,
  'BinderIcon'
);
export default BinderIcon;

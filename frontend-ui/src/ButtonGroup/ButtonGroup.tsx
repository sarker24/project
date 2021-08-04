import React, { ButtonHTMLAttributes } from 'react';
import { IconProps } from '../Icon/Icon';
import classNames from 'classnames';

export type ColorPalette = 'default' | 'primary' | 'success';
export interface ButtonProps {
  children: React.ReactNode;
  color?: ColorPalette;
  variant?: 'outline' | 'filled';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  icon?: React.ReactElement<IconProps>;
}

export const ButtonGroup = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, color, variant, icon, ...rest } = props;

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

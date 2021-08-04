import * as React from 'react';
import classNames from 'classnames';
import { IconProps } from '../Icon/Icon';

export interface LabelProps {
  color?: 'primary' | 'error';
  required?: boolean;
  children: React.ReactNode;
  icon?: React.ReactElement<IconProps>;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { color = 'primary', required, children, icon, ...rest } = props;

  return (
    <label
      ref={ref}
      className={classNames(
        'flex',
        'items-center',
        'font-bold',
        'text-tertiary-700',
        'text-right',
        {
          'text-error-light': color === 'error'
        }
      )}
      {...rest}
    >
      {icon && <span className='mr-2'>{icon}</span>}
      {children}
      {required && <span className='block ml-2'>*</span>}
    </label>
  );
});

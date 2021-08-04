import * as React from 'react';
import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { IconProps } from '../Icon/Icon';

export type ColorPalette = 'default' | 'primary' | 'success' | 'error' | 'warning';

export interface IconButtonProps {
  /**
   *  What kind of palette color to use.
   *  Default: 'primary'
   */
  color?: ColorPalette;

  /**
   * What variant to use.
   * Default: 'text'
   */
  variant?: 'text' | 'outlined' | 'filled';
  /**
   * How large should the IconButton be.
   * Default: 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Should button be a circle?
   * Default: 'false'
   */
  circle?: boolean;
  /**
   * Is IconButton disabled.
   * Default: false
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * IconButton content, the icon
   */
  children: React.ReactElement<IconProps>;
  /**
   * Optional IconButton type
   */
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

function createFilledClass(props: IconButtonProps) {
  const { color = 'default' } = props;
  return classNames('text-neutral-100 outline-none focus:ring ring-inset disabled:bg-neutral-600', {
    [`bg-secondary focus:ring-secondary-600 active:bg-secondary-600`]: color === 'default',
    [`bg-primary focus:ring-primary-600 active:bg-primary-600`]: color === 'primary',
    [`bg-error-light focus:ring-error-dark active:bg-error-dark`]: color === 'error',
    [`bg-warning-light focus:ring-warning-dark active:bg-warning-dark`]: color === 'warning',
    [`bg-success-light focus:ring-success-dark active:bg-success-dark`]: color === 'success'
  });
}

function createOutlineClass(props: IconButtonProps) {
  const { color = 'default' } = props;
  return classNames(
    'bg-neutral-100 ring-1 ring-inset outline-none focus:ring active:ring-1 disabled:ring-neutral-600 disabled:text-neutral-400',
    {
      ['text-secondary ring-secondary-200 focus:ring-secondary-400 active:ring-secondary-200 active:bg-secondary-100']:
        color === 'default',
      ['text-primary ring-primary-200 focus:ring-primary-400 active:ring-primary-200 active:bg-primary-100']:
        color === 'primary',
      ['text-error-light ring-error-light focus:ring-error-dark active:ring-error-light']:
        color === 'error',
      ['text-warning-light ring-warning-light focus:ring-warning-dark active:ring-warning-light']:
        color === 'warning',
      ['text-success-light ring-success-light focus:ring-success-dark active:ring-success-light']:
        color === 'success'
    }
  );
}

function createTextClass(props: IconButtonProps) {
  const { color = 'default' } = props;
  return classNames(
    'bg-transparent font-medium disabled:text-neutral-400',
    'focus:bg-white focus:ring focus:primary-200',
    {
      [`text-primary active:text-primary-600`]: color === 'primary',
      [`text-error-light active:text-error-dark`]: color === 'error',
      [`text-warning-light active:text-warning-dark`]: color === 'warning',
      [`text-success-light active:text-success-dark`]: color === 'success',
      [`text-secondary hover:bg-tertiary-200 active:bg-tertiary-400`]: color === 'default'
    }
  );
}

function createVariantClass(props: IconButtonProps): string {
  const { variant } = props;
  switch (variant) {
    case 'outlined':
      return createOutlineClass(props);
    case 'filled':
      return createFilledClass(props);
    case 'text':
    default:
      return createTextClass(props);
  }
}

/**
 * Button with icon only for user interaction
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { size = 'medium', children, color, variant, circle, ...rest } = props;

  const variantClass = createVariantClass(props);
  return (
    <button
      ref={ref}
      type='button'
      className={classNames(`font-base inline-flex items-center transition ${variantClass}`, {
        ['rounded']: !circle,
        ['rounded-full']: circle,
        ['p-2.5']: size === 'small',
        ['p-3']: size === 'medium',
        ['p-4']: size === 'large',
        ['pointer-events-none']: rest.disabled
      })}
      {...rest}
    >
      {children}
    </button>
  );
});

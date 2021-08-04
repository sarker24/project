import * as React from 'react';
import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { IconProps } from '../Icon/Icon';

export type ColorPalette = 'primary' | 'success' | 'error' | 'warning';

export interface ButtonProps {
  /**
   *  What kind of palette color to use.
   *  Default: 'primary'
   */
  color?: ColorPalette;

  /**
   * What variant to use.
   * Default: 'filled'
   */
  variant?: 'text' | 'outlined' | 'filled';
  /**
   * How large should the button be.
   * Default: 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Is button disabled.
   * Default: false
   */
  disabled?: boolean;
  /**
   * Optional left button icon
   */
  iconLeft?: React.ReactElement<IconProps>;
  /**
   * Optional right button icon
   */
  iconRight?: React.ReactElement<IconProps>;
  /**
   * Optional click handler
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Button content
   */
  children: React.ReactNode;
  /**
   * Option button type
   */
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  /**
   * Optional Full width class
   * default: false
   */
  fullWidth?: boolean;
}

function createFilledClass(props: ButtonProps) {
  const { color = 'primary' } = props;
  return classNames(
    'rounded shadow text-neutral-100 outline-none hover:shadow-md focus:ring ring-inset active:shadow-none disabled:bg-neutral-600',
    {
      [`bg-primary focus:ring-primary-600 active:bg-primary-600`]: color === 'primary',
      [`bg-error-light focus:ring-error-dark active:bg-error-dark`]: color === 'error',
      [`bg-warning-light focus:ring-warning-dark active:bg-warning-dark`]: color === 'warning',
      [`bg-success-light focus:ring-success-dark active:bg-success-dark`]: color === 'success'
    }
  );
}

function createOutlineClass(props: ButtonProps) {
  const { color = 'primary' } = props;
  return classNames(
    'rounded shadow bg-neutral-100 ring-1 ring-inset outline-none hover:shadow-md focus:ring active:ring-1 active:shadow-none disabled:ring-neutral-400 disabled:text-neutral-400',
    {
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

function createTextClass(props: ButtonProps) {
  const { color = 'primary' } = props;
  return classNames(
    'bg-transparent font-medium underline-mt-2 active:underline active:underline-bold focus:underline focus:underline-bold hover:underline hover:underline-bold disabled:text-neutral-400',
    {
      [`text-primary active:text-primary-600`]: color === 'primary',
      [`text-error-light active:text-error-dark`]: color === 'error',
      [`text-warning-light active:text-warning-dark`]: color === 'warning',
      [`text-success-light active:text-success-dark`]: color === 'success'
    }
  );
}

function createVariantClass(props: ButtonProps): string {
  const { variant } = props;
  switch (variant) {
    case 'outlined':
      return createOutlineClass(props);
    case 'text':
      return createTextClass(props);
    case 'filled':
    default:
      return createFilledClass(props);
  }
}

/**
 * Primary UI component for user interaction
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    fullWidth = false,
    size = 'medium',
    children,
    color,
    variant,
    iconLeft,
    iconRight,
    ...rest
  } = props;

  // todo use memo, only recalculate if variant/color change
  const variantClass = createVariantClass(props);
  return (
    <button
      ref={ref}
      type='button'
      className={classNames(`font-base inline-flex items-center transition ${variantClass}`, {
        ['py-2.5 px-4']: size === 'small',
        ['py-3 px-5']: size === 'medium',
        ['py-4 px-8']: size === 'large',
        ['pointer-events-none']: rest.disabled,
        ['w-full']: fullWidth
      })}
      {...rest}
    >
      {iconLeft && (
        <span
          className={classNames('inline-flex mr-2', {
            ['text-secondary']: variant === 'text'
          })}
        >
          {iconLeft}
        </span>
      )}
      {children}
      {iconRight && (
        <span
          className={classNames('inline-flex ml-2', {
            ['text-secondary']: variant === 'text'
          })}
        >
          {iconRight}
        </span>
      )}
    </button>
  );
});

import * as React from 'react';
import classNames from 'classnames';
import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type: 'text' | 'number' | 'email' | 'tel' | 'password' | 'url' | 'search';
  color?: 'primary' | 'error';
  textAlignment: 'left' | 'right';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { color, icon, onChange, type, textAlignment, ...inputProps } = props;
  return (
    <div className='relative w-full'>
      {icon && (
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          {icon}
        </div>
      )}
      <input
        ref={ref}
        onChange={onChange}
        type={type}
        className={classNames(
          'w-full',
          'border-none',
          'px-4',
          'py-3',
          'rounded',
          'bg-tertiary-100',
          'text-tertiary-700',
          'disabled:text-neutral-400',
          'placeholder-tertiary-600',
          'ring-1',
          'ring-primary',
          'disabled:ring-neutral-200',
          'focus:outline-none',
          'focus:ring-2',
          'focus:ring-primary',
          'focus:border-transparent',
          'transition',
          {
            ['pl-10']: icon,
            ['ring-2 ring-error-light focus:ring-error-light bg-error-light text-neutral-100']:
              color === 'error',
            'text-right': textAlignment === 'right'
          }
        )}
        {...inputProps}
      />
    </div>
  );
});

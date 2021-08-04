import * as React from 'react';
import classNames from 'classnames';

export interface RadioButtonProps {
  checked?: boolean;
  value?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title?: string;
}

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>((props, ref) => {
  const { checked, value, onChange, title, ...rest } = props;

  return (
    <label className='flex items-center space-x-2.5'>
      <input
        ref={ref}
        type='radio'
        value={value}
        checked={checked}
        className={classNames('w-4 h-4', 'focus:ring-0', 'text-primary', 'cursor-pointer')}
        onChange={onChange}
        {...rest}
      />
      {title && <span className='leading-5 text-tertiary-700 cursor-pointer'>{title}</span>}
    </label>
  );
});

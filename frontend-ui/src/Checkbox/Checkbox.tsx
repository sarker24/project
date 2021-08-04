import * as React from 'react';
import classNames from 'classnames';
import { useImperativeHandle, useRef } from 'react';

export interface CheckboxProps {
  checked: boolean;
  indeterminate?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  description?: string;
  start: void;
  required?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { onChange, description, indeterminate = false, value, checked, ...rest } = props;
  const checkboxRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => checkboxRef.current as HTMLInputElement);

  React.useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div className={classNames('flex items-center space-x-2.5')}>
      <input
        ref={checkboxRef}
        type='checkbox'
        className={classNames(
          'w-3.5 h-3.5',
          'rounded-sm cursor-pointer',
          'border-2 border-tertiary-700',
          'text-primary',
          'focus:ring-0 focus:outline-none'
        )}
        checked={checked}
        onChange={onChange}
        {...rest}
      />
      {description && (
        /*TODO: Clicking the description right now doesn't work - will have to fix that at a later point*/
        <span className={classNames('leading-5 text-tertiary-700')}>{description}</span>
      )}
    </div>
  );
});

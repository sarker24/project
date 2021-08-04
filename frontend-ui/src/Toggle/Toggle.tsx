import * as React from 'react';
import classNames from 'classnames';
import { Switch } from '@headlessui/react';

export interface ToggleProps {
  onChange: (checked: boolean) => void;
  toggled: boolean;
  description?: React.ReactNode;
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>((props, ref) => {
  const { toggled = false, onChange, description, ...rest } = props;
  return (
    <Switch.Group as='div' className='flex items-center space-x-2.5'>
      <Switch
        ref={ref}
        checked={toggled}
        onChange={onChange}
        className={classNames(
          'relative inline-flex flex-shrink-0',
          'h-4 w-7',
          'border-2 border-transparent',
          'rounded-full',
          'cursor-pointer',
          'transition-colors ease-in-out duration-200',
          'focus:outline-none',
          {
            'bg-primary': toggled,
            'bg-neutral-700': !toggled
          }
        )}
        {...rest}
      >
        <span
          aria-hidden='true'
          className={classNames(
            'pointer-events-none inline-block h-3 w-3 rounded-full bg-tertiary-100 shadow transform ring-0 transition ease-in-out duration-200 translate-x-0',
            {
              'translate-x-3': toggled
            }
          )}
        />
      </Switch>
      {description && (
        <Switch.Label as='span' className={classNames('text-tertiary-700', 'leading-5')}>
          {description}
        </Switch.Label>
      )}
    </Switch.Group>
  );
});

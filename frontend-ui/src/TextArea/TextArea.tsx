import classNames from 'classnames';
import * as React from 'react';
import { ChangeEvent, useState } from 'react';
import { Typography } from '../Typography';

export interface TextAreaProps {
  maxLength?: number;
  placeholder?: string;
  showCounter?: boolean;
  resizeable?: boolean;
  color?: 'primary' | 'error';
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  fullWidth?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const {
    maxLength,
    showCounter = true,
    resizeable = true,
    onChange,
    color,
    value,
    fullWidth = false,
    ...textAreaProps
  } = props;
  const [charCount, setCharCount] = useState<number>(0);

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    if (showCounter) {
      setCharCount(e.target.value.length);
    }
    onChange(e);
  };
  return (
    <div className={classNames('relative', { 'w-full': fullWidth })}>
      <textarea
        ref={ref}
        maxLength={maxLength}
        onChange={handleChange}
        value={value}
        className={classNames(
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
          { 'resize-none': !resizeable },
          { 'w-full': fullWidth },
          {
            ['ring-2 ring-error-light focus:ring-error-light text-white']: color === 'error'
          }
        )}
        {...textAreaProps}
      />
      {showCounter ? (
        <div className='relative'>
          <Typography variant='label-tiny'>
            {!maxLength ? charCount : `${charCount} / ${maxLength}`}
          </Typography>
        </div>
      ) : null}
    </div>
  );
});

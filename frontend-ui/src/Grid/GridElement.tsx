import * as React from 'react';
import classNames from 'classnames';

export interface GridElementProps {
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  children: React.ReactNode;
}

export const GridElement = React.forwardRef<HTMLDivElement, GridElementProps>((props, ref) => {
  const { alignItems, children, justifyContent } = props;

  return (
    <div
      ref={ref}
      className={classNames('flex flex-col', {
        ['justify-start']: justifyContent === 'start',
        ['justify-end']: justifyContent === 'end',
        ['justify-center']: justifyContent === 'center',
        ['justify-between']: justifyContent === 'between',
        ['justify-around']: justifyContent === 'around',
        ['justify-evenly']: justifyContent === 'evenly',
        ['items-start']: alignItems === 'start',
        ['items-end']: alignItems === 'end',
        ['items-center']: alignItems === 'center',
        ['items-baseline']: alignItems === 'baseline',
        ['items-stretch']: alignItems === 'stretch'
      })}
    >
      {children}
    </div>
  );
});

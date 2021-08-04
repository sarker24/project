import * as React from 'react';
import classNames from 'classnames';

export interface GridProps {
  /*
   * How many columns the grid should render
   * Defaults to 1
   */
  columns?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  const { children, columns = 1 } = props;

  return (
    <div
      ref={ref}
      className={classNames('grid gap-5', {
        'grid-cols-1': columns == 1,
        'grid-cols-2': columns == 2,
        'grid-cols-3': columns == 3,
        'grid-cols-4': columns == 4
      })}
    >
      {children}
    </div>
  );
});

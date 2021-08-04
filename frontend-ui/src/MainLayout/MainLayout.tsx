import * as React from 'react';

export interface MainLayoutProps {
  navigation?: React.ReactElement;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

/*
 Main layout component.

 Fills the screen, and centers main content if the width becomes large
 */
export const MainLayout = React.forwardRef<HTMLDivElement, MainLayoutProps>((props, ref) => {
  const { navigation, children, footer } = props;

  return (
    <div className='flex flex-col flex-nowrap min-h-screen min-w-screen bg-neutral-200' ref={ref}>
      <div className='flex flex-col flex-grow flex-nowrap p-2.5'>
        {navigation && navigation}
        <main className='flex-grow max-w-screen-2xl 2xl:self-center'>{children}</main>
      </div>
      {footer && footer}
    </div>
  );
});

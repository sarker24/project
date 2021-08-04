import * as React from 'react';
import classNames from 'classnames';

export interface LinkProps {
  /**
   * Optional click handler
   */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;

  /**
   * Optional alt attribute for image links
   */
  alt?: string;

  /**
   * Should link not open into a new window
   */
  openInCurrentWindow?: boolean;

  /**
   * Link address
   */
  href: string;

  /**
   * Link content
   */
  children: React.ReactNode;
}

/**
 * Ui Element for links
 *
 * Dont use links for items that dont require href attribute or use empty url / '#' string
 *
 * Dont use links for items that required disabling
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { children, href, openInCurrentWindow, ...anchorProps } = props;
  const windowProps = !openInCurrentWindow ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a
      ref={ref}
      href={href}
      className={classNames(
        'inline-flex items-center underline-mt-2 transition',
        'text-base font-medium text-primary',
        'active:text-primary-600 active:underline active:underline-bold',
        'focus:underline focus:underline-bold',
        'hover:underline hover:underline-bold'
      )}
      {...anchorProps}
      {...windowProps}
    >
      {children}
    </a>
  );
});

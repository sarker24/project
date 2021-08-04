import * as React from 'react';
import classNames from 'classnames';

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4';
export type TypographyElement = 'label' | 'span' | 'p' | 'div' | HeadingElement;
export type TypographyVariant =
  | 'body'
  | 'body-small'
  | 'label'
  | 'label-small'
  | 'label-tiny'
  | 'paragraph'
  | HeadingElement;

const VariantMapping: { [key in TypographyVariant]: React.ElementType & TypographyElement } = {
  label: 'span',
  'label-small': 'span',
  'label-tiny': 'span',
  body: 'span',
  'body-small': 'span',
  paragraph: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4'
};

export interface TypographyProps {
  /**
   * Optional text alignment
   */
  align?: 'center' | 'left' | 'right';
  /**
   * Optional render element as custom semantic html element
   */
  as?: React.ElementType & TypographyElement;
  /**
   * Text type to use
   * Default: 'paragraph'
   */
  variant?: TypographyVariant;

  /**
   * Optional should apply italic styling
   */
  italic?: boolean;

  /**
   * Optional should apply bold font weight. Applies only to variants that dont have font weight applied by default
   */
  bold?: boolean;
  /**
   * Optional color type to override default color
   */
  color?: 'current' | 'primary' | 'secondary' | 'warning' | 'error' | 'success';

  children: React.ReactNode;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>((props, ref) => {
  const { variant = 'paragraph', as, align, color, italic, bold, children } = props;
  const Component = as || VariantMapping[variant] || ('span' as const);

  return (
    <Component
      ref={ref}
      className={classNames({
        ['text-center']: align === 'center',
        ['text-left']: align === 'left',
        ['text-right']: align === 'right',
        ['italic']: italic,
        ['font-bold']: bold,
        ['text-current']: color === 'current',
        ['text-primary']: color === 'primary' || (!color && variant === 'h1'),
        ['text-secondary']: color === 'secondary',
        ['text-warning-light']: color === 'warning',
        ['text-error-light']: color === 'error',
        ['text-success-light']: color === 'success',
        ['text-primary-400']: !color && (variant === 'h2' || variant === 'h3'),
        ['text-tertiary-700']:
          !color &&
          ['h4', 'paragraph', 'body', 'body-small', 'label', 'label-small', 'label-tiny'].includes(
            variant
          ),
        ['font-heading text-xl leading-tight font-black tracking-wider']: variant === 'h1',
        ['font-heading text-lg leading-tight font-black tracking-wider']: variant === 'h2',
        ['font-heading leading-snug text-base font-black tracking-wider']: variant === 'h3',
        ['font-heading leading-snug text-base font-bold tracking-wide']: variant === 'h4',
        ['font-body text-base leading-snug']: variant === 'body',
        ['font-body text-sm leading-tight']: variant === 'body-small',
        ['font-body leading-snug text-base font-bold tracking-widest']: variant === 'label',
        ['font-body leading-tight text-sm font-bold tracking-wide']: variant === 'label-small',
        ['font-body text-xs leading-tight tracking-extreme']: variant === 'label-tiny',
        ['font-body text-base leading-normal']: variant === 'paragraph'
      })}
    >
      {children}
    </Component>
  );
});

/*

"LABELS" (bolded, letter spacing .025)
label - input/form fields, emphasising date time fields
label-small - table columns (headers, labels)
label-tiny - pagination (letter-spacing .035)

"BODY"
body - lists, subtitle,  (font size 16, line-height 1.3)
body-small - columns data (font size 14, line-height 1.2)
body-tiny -  top navigation (font size 12, line-height 1.2)

"PARAGRAPHS"
paragraph - text, subtitles

 */

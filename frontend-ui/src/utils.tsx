import { Icon, IconProps } from './Icon/Icon';
import * as React from 'react';

type SvgProps = Omit<IconProps, 'children' | 'viewBox'>;

// modified from material-ui repo lib
export function createSvgIcon(svg: React.ReactElement<SVGSVGElement>, displayName: string) {
  const { props: svgProps } = svg;
  const { viewBox, children: svgChildren } = svgProps;
  const ForwardRef = React.forwardRef<SVGSVGElement, SvgProps>((props, ref) => (
    <Icon ref={ref} {...props} viewBox={viewBox as unknown as string}>
      {svgChildren}
    </Icon>
  ));

  const Memoized = React.memo(ForwardRef) as typeof ForwardRef;
  Memoized.displayName = displayName;
  return Memoized;
}

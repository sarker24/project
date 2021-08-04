import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import * as Icons from './index';
import { Icon, IconProps } from '../Icon/Icon';

export default {
  title: 'Icons',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'All available icons'
      }
    }
  }
} as Meta;

type SvgProps = Omit<IconProps, 'children' | 'viewBox'>;

export const AllIcons: Story<SvgProps> = (args) => (
  <>
    <p>There are {Object.keys(Icons).length} icons</p>
    <div className='grid grid-cols-4 gap-3'>
      {Object.values(Icons).map((Icon) => (
        <div key={Icon.displayName as string} className='inline-flex items-center'>
          <Icon {...args} />
          <span className='ml-2'>{Icon.displayName}</span>
        </div>
      ))}
    </div>
  </>
);

AllIcons.argTypes = {
  viewBox: { table: { disable: true } },
  children: { table: { disable: true } }
};

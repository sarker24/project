import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { MainLayout, MainLayoutProps } from './MainLayout';

export default {
  title: 'Base/MainLayout',
  component: MainLayout
} as Meta<MainLayoutProps>;

const Template: Story<MainLayoutProps> = (args) => {
  // storybook adds padding 16px, so cancelling it out with -m-4
  return (
    <div className='-m-4'>
      <MainLayout {...args} />
    </div>
  );
};
export const Default = Template.bind({});
Default.args = {
  navigation: <div>navigation</div>,
  children: <div>children</div>,
  footer: <div>footer</div>
};

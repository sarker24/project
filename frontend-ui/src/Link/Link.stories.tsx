import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Link, LinkProps } from './Link';

export default {
  title: 'Base/Link',
  component: Link
} as Meta<LinkProps>;

const Template: Story<LinkProps> = (args) => {
  return (
    <p>
      This is a <Link {...args} /> inside paragraph.
    </p>
  );
};

export const SimpleLink = Template.bind({});
SimpleLink.args = {
  children: 'Link',
  href: '/'
};

export const LinkOpeningInCurrentWindow = Template.bind({});
LinkOpeningInCurrentWindow.args = {
  children: 'Link',
  href: '/',
  openInCurrentWindow: true
};

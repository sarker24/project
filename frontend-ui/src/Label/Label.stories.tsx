import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import LeafIcon from '../icons/Leaf';

import { Label, LabelProps } from './Label';

export default {
  title: 'Base/Label',
  component: Label
} as Meta<LabelProps>;

const Template: Story<LabelProps> = (args) => {
  return <Label {...args} />;
};

export const Standard = Template.bind({});
Standard.args = {
  color: 'primary',
  children: 'label'
};

export const Required = Template.bind({});
Required.args = {
  color: 'primary',
  required: true,
  children: 'label'
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
  children: 'label'
};

export const LabelWithIcon = Template.bind({});
LabelWithIcon.args = {
  children: 'label',
  icon: <LeafIcon />
};

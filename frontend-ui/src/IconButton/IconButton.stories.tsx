import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { IconButton, IconButtonProps } from './IconButton';
import PenIcon from '../icons/Pen';

export default {
  title: 'Icons/IconButton',
  component: IconButton
} as Meta<IconButtonProps>;

const Template: Story<IconButtonProps> = (args) => {
  return <IconButton {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: <PenIcon />
};

export const FilledVariant = Template.bind({});
FilledVariant.args = {
  variant: 'filled',
  children: <PenIcon />
};

export const OutlinedVariant = Template.bind({});
OutlinedVariant.args = {
  variant: 'outlined',
  children: <PenIcon />
};

export const TextVariant = Template.bind({});
TextVariant.args = {
  variant: 'text',
  children: <PenIcon />
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: <PenIcon />
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: <PenIcon />
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: <PenIcon />
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: <PenIcon />
};

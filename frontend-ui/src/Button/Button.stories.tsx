import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import HomeIcon from '../icons/Home';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Base/Button',
  component: Button
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};

const AllVariants: Story<ButtonProps> = (args) => {
  return (
    <div className='flex space-x-4'>
      <Button {...args} variant='filled' />
      <Button {...args} variant='outlined' />
      <Button {...args} variant='text' />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Button'
};

export const PrimaryWithLeftIcon = AllVariants.bind({});
PrimaryWithLeftIcon.args = {
  color: 'primary',
  children: 'Button',
  iconLeft: <HomeIcon />
};

export const PrimaryWithRightIcon = AllVariants.bind({});
PrimaryWithRightIcon.args = {
  color: 'primary',
  children: 'Button',
  iconRight: <HomeIcon />
};

export const OutlinedVariant = Template.bind({});
OutlinedVariant.args = {
  variant: 'outlined',
  children: 'Button'
};

export const TextVariant = Template.bind({});
TextVariant.args = {
  variant: 'text',
  children: 'Button'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Button'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: 'Button'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Button'
};

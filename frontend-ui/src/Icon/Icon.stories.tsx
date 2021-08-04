import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Icon, IconProps } from './Icon';

export default {
  title: 'Icons/Icon',
  component: Icon
} as Meta<IconProps>;

export const CreateCustomIcon: Story<IconProps> = (args) => {
  return (
    <>
      <Icon {...args} />
      <p className='mt-3 mb-2'>All variants</p>
      <form className='flex items-center space-x-3'>
        <Icon {...args} size='small' />
        <Icon {...args} size='medium' />
        <Icon {...args} size='large' />
      </form>
      <form className='flex items-center space-x-3 mt-3'>
        <Icon {...args} color='secondary' />
        <Icon {...args} color='primary' />
        <Icon {...args} color='success' />
        <Icon {...args} color='warning' />
        <Icon {...args} color='error' />
        <Icon {...args} color='disabled' />
      </form>
    </>
  );
};

CreateCustomIcon.args = {
  viewBox: '0 0 496 512',
  children: (
    <path d='M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm-96 206.6l-28.7 28.7c-14.8 14.8-37.8-7.5-22.6-22.6l28.7-28.7-28.7-28.7c-15-15 7.7-37.6 22.6-22.6l28.7 28.7 28.7-28.7c15-15 37.6 7.7 22.6 22.6L174.6 192l28.7 28.7c15.2 15.2-7.9 37.4-22.6 22.6L152 214.6zM248 416c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm147.3-195.3c15.2 15.2-7.9 37.4-22.6 22.6L344 214.6l-28.7 28.7c-14.8 14.8-37.8-7.5-22.6-22.6l28.7-28.7-28.7-28.7c-15-15 7.7-37.6 22.6-22.6l28.7 28.7 28.7-28.7c15-15 37.6 7.7 22.6 22.6L366.6 192l28.7 28.7z' />
  )
};

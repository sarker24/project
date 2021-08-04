import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { ButtonProps } from './ButtonGroup';
import ListIcon from '../icons/List';
import ThIcon from '../icons/Th';
import { Button } from '../Button';

export default {
  title: 'Base/ButtonGroup',
  component: ButtonGroup
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => {
  return <ButtonGroup {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  children: (
    <React.Fragment>
      <Button variant={'outlined'}>
        <ListIcon />
      </Button>
      <Button variant={'filled'}>
        <ThIcon />
      </Button>
    </React.Fragment>
  )
};
export const GroupButton = Template.bind({});
GroupButton.args = {
  color: 'primary',
  children: (
    <div className='flex space-x-4 bg-primary-500'>
      <Button variant={'outlined'}>
        <ListIcon />
      </Button>
      <Button className={'flex flex-col items-center'} variant={'filled'}>
        <span>
          <ThIcon />
        </span>
        <span>Home</span>
      </Button>
    </div>
  )
};

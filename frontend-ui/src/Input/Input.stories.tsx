import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Base/Input',
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  type: 'text',
  value: 'testing'
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  type: 'email',
  value: 'test@example.com'
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: 'number',
  value: '123456'
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: 'password',
  value: 'password'
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  type: 'text',
  value: 'password',
  disabled: true
};

export const InputWithPlaceholder = Template.bind({});
InputWithPlaceholder.args = {
  type: 'text',
  placeholder: 'placeholder text'
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  type: 'text',
  value: 'Some error',
  color: 'error'
};

export const TextWithRightAlignment = Template.bind({});
TextWithRightAlignment.args = {
  type: 'text',
  value: 'right aligned text',
  textAlignment: 'right'
};

//TODO: Add example with icon once IconElement is ready: https://jira.esmiley.dk/browse/PROD-7499

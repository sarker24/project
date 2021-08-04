import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { RadioButton, RadioButtonProps } from './RadioButton';

export default {
  title: 'Base/RadioButton',
  component: RadioButton
} as Meta<RadioButtonProps>;

const Template: Story<RadioButtonProps> = (args) => {
  const [checked, setChecked] = React.useState(args.checked);
  return <RadioButton {...args} checked={checked} onChange={() => setChecked(!checked)} />;
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  value: '1'
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  value: '1'
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: 'i am a title'
};

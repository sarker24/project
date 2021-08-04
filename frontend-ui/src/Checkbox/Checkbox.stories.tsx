import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Base/Checkbox',
  component: Checkbox
} as Meta<CheckboxProps>;

const Template: Story<CheckboxProps> = (args) => {
  const [checked, setChecked] = React.useState(args.checked);
  React.useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return <Checkbox {...args} checked={checked} onChange={() => setChecked(!checked)} />;
};

export const UncheckedCheckbox = Template.bind({});
UncheckedCheckbox.args = {
  checked: false
};

export const CheckedCheckbox = Template.bind({});
CheckedCheckbox.args = {
  checked: true,
  value: '20'
};

export const CheckboxWithDescription = Template.bind({});
CheckboxWithDescription.args = {
  description: 'i am a description'
};

export const IndeterminateCheckbox = Template.bind({});
IndeterminateCheckbox.args = {
  indeterminate: true
};

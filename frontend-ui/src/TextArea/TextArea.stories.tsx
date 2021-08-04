import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextArea, TextAreaProps } from './TextArea';

export default {
  title: 'Base/TextArea',
  component: TextArea
} as Meta<TextAreaProps>;

const Template: Story<TextAreaProps> = (args) => {
  const [textArea, setTextArea] = React.useState(args.value);

  React.useEffect(() => {
    setTextArea(args.value);
  }, [args.value]);

  return <TextArea {...args} value={textArea} onChange={() => setTextArea(textArea)} />;
};

export const Standard = Template.bind({});
Standard.args = {
  resizeable: true,
  showCounter: true,
  maxLength: 100,
  placeholder: 'this is a placeholder',
  color: 'primary'
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  resizeable: true,
  showCounter: true,
  maxLength: 100,
  fullWidth: true,
  placeholder: 'this is a placeholder',
  color: 'primary'
};

export const NoMaxLength = Template.bind({});
NoMaxLength.args = {
  resizeable: true,
  showCounter: true,
  placeholder: 'this is a placeholder',
  color: 'primary'
};

export const NoCounter = Template.bind({});
NoCounter.args = {
  resizeable: true,
  showCounter: false,
  maxLength: 100,
  placeholder: 'this is a placeholder',
  color: 'primary'
};

export const NoCounterNoMaxLength = Template.bind({});
NoCounterNoMaxLength.args = {
  resizeable: true,
  showCounter: false,
  placeholder: 'this is a placeholder',
  color: 'primary'
};

export const NotResizeable = Template.bind({});
NotResizeable.args = {
  resizeable: false,
  showCounter: true,
  maxLength: 100,
  placeholder: 'this is a placeholder',
  color: 'primary'
};

export const Error = Template.bind({});
Error.args = {
  resizeable: false,
  showCounter: false,
  placeholder: 'this is a placeholder',
  color: 'error'
};

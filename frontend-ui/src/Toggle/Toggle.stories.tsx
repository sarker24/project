import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Toggle, ToggleProps } from './Toggle';

export default {
  title: 'Base/Toggle',
  component: Toggle
} as Meta<ToggleProps>;

const Template: Story<ToggleProps> = (args) => {
  const [toggled, setToggled] = React.useState(args.toggled);
  React.useEffect(() => {
    setToggled(args.toggled);
  }, [args.toggled]);

  return (
    <div>
      <Toggle {...args} toggled={toggled} onChange={() => setToggled(!toggled)} />
    </div>
  );
};

export const Standard = Template.bind({});
Standard.args = {
  toggled: false
};

export const Toggled = Template.bind({});
Toggled.args = {
  toggled: true
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  description: 'i am a description'
};

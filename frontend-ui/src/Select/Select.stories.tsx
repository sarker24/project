import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Select, SelectProps } from './Select';
import { SelectItem, SelectItemProps } from './SelectItem';

export default {
  title: 'Advanced/Select',
  component: Select
} as Meta<SelectProps>;

const Template: Story<SelectProps> = (args) => {
  const [selectedItem, setSelectedItem] = React.useState<SelectItemProps>();
  const handleSelectedItemChange = ({
    selectedItem
  }: {
    selectedItem?: SelectItemProps | null | undefined;
  }) => {
    if (selectedItem) {
      setSelectedItem(selectedItem);
    }
  };
  return (
    <div className='max-w-sm'>
      <p>Value: {selectedItem?.value}</p>
      <Select {...args} onChange={handleSelectedItemChange} />
    </div>
  );
};

export const Standard = Template.bind({});
Standard.args = {
  children: [
    <SelectItem key={1} value='1' title='Darth Bane' />,
    <SelectItem key={1} value='2' title='Darth Krayt' />,
    <SelectItem key={1} value='3' title='Darth Maul' />,
    <SelectItem key={1} value='4' title='Darth Nihilus' />,
    <SelectItem key={1} value='5' title='Darth Vader' />
  ]
};

export const WithGroups = Template.bind({});
WithGroups.args = {
  children: [
    <SelectItem key={1} value='1' title='Siths' groupHeader />,
    <SelectItem key={2} value='2' title='Darth Bane' />,
    <SelectItem key={3} value='3' title='Darth Krayt' />,
    <SelectItem key={4} value='4' title='Darth Maul' />,
    <SelectItem key={5} value='5' title='Darth Nihilus' />,
    <SelectItem key={6} value='6' title='Darth Vader' />,
    <SelectItem key={7} value='7' title='Jedis' groupHeader />,
    <SelectItem key={8} value='8' title='Luke Skywalker' />,
    <SelectItem key={9} value='9' title='Obi-Wan Kenobi' />,
    <SelectItem key={10} value='10' title='Yoda' />,
    <SelectItem key={11} value='11' title='Bounty Hunters' groupHeader />,
    <SelectItem key={12} value='12' title='Boba Fett' />,
    <SelectItem key={13} value='13' title='Jango Fett' />
  ]
};

export const WithAddNewButton = Template.bind({});
WithAddNewButton.args = {
  children: [
    <SelectItem key={1} value='1' title='Darth Bane' />,
    <SelectItem key={1} value='2' title='Darth Krayt' />,
    <SelectItem key={1} value='3' title='Darth Maul' />,
    <SelectItem key={1} value='4' title='Darth Nihilus' />,
    <SelectItem key={1} value='5' title='Darth Vader' />
  ],
  addNewButton: true,
  addNewText: 'Add new Star Wars character'
};

import React from "react";
import { Meta } from '@storybook/react/types-6-0';

import Checkbox from "../Checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    checked: { control: 'boolean' },
    fill: { control: 'color' },
    color: { control: 'color' }
  },
} as Meta;

const Template = (args) => <Checkbox {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  label: "Label!",
  name: "Dorian",
  checked: false,
  id: '2',
};

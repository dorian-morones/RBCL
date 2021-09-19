import React from "react";
import { Meta } from '@storybook/react/types-6-0';

import RangeSlider from "../Ranger";

export default {
  title: "UI/Range-slider",
  component: RangeSlider,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  }
} as Meta;

const Template = (args) => <RangeSlider {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Ranger input',
  value: '20',
  onChange: (value) => { console.log(value)}
};

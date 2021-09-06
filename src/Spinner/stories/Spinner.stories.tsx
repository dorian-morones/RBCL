import React from "react";
import { Meta } from '@storybook/react/types-6-0';

import Spinner from "../Spinner";

export default {
  title: "UI/Spinner",
  component: Spinner,
  argTypes: {
    color: { control: 'color' },
    fill: { control: 'color' },
  }
} as Meta;

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});

Default.args = {
  fill: '#1464ff',
  color: '#fff',
};

import React from "react";
import { Meta } from '@storybook/react/types-6-0';

import Button from "../Button";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    content: { control: 'text' },
    width: { control: 'number' },
    margin: { control: 'number' },
    padding: { control: 'number' },
    color: { control: 'color' },
    fill: { control: 'color' },
  },
} as Meta;

const Template = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  content: "Click Me!",
  width: 200,
  fill: '#1464ff',
  color: '#fff'
};

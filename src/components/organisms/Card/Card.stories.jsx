import React from "react";

import { Card } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "organisms/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: { control: "text", name: "Name" },
    mutedText: { control: "text", name: "Muted Text" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Name",
  mutedText: "Muted Text",
};

/* export const Primary = Template.bind({});
Primary.args = {
  textColor: "red",
  border: "solid red",
}; */
/* Primary.props = {
  backgroundColor: {
    default: () => "blue",
  },
};
 */
/* export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
}; */

import React from "react";
import { BrowserRouter, Router } from "react-router-dom";

import { ListItem } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/ListItem",
  component: ListItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: { control: "text", name: "Background Color" },
    icon: {
      control: "select",
      name: "Text Color",
      options: ["bank", "bell", "credit-card", "dollar", "left-arrow", "list", "pen", "pen2", "refresh", "squares", "trash", "user"],
    },
    iconFillColor: { control: "color", name: "Icon Fill Color" },
    iconStrokeColor: { control: "color", name: "Icon StrokeColor" },
    bold: { control: "boolean", name: "Bold" },
    route: { control: "text", name: "Route" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <BrowserRouter>
    <ListItem {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  text: "List Item",
  icon: "bank",
  bold: true,
  route: "/",
  iconFillColor: "#ffffff",
  iconStrokeColor: "#000000",
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

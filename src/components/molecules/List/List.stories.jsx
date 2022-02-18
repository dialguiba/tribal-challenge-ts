import { ListItem } from "@components/atoms/ListItem";
import React from "react";

import { List } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/List",
  component: List,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    vertical: { control: "boolean", name: "Vertical?" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => (
  <List {...args}>
    <ListItem text="Item 1" icon="bank" textColor="black" bold />
    <ListItem text="Item 1" icon="bank" textColor="black" bold />
    <ListItem text="Item 1" icon="bank" textColor="black" bold />
  </List>
);

export const WithIcons = Template.bind({});
WithIcons.args = {
  vertical: false,
};

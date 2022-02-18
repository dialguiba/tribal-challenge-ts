import React from "react";

import { SidebarHeader } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/SidebarHeader",
  component: SidebarHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SidebarHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};

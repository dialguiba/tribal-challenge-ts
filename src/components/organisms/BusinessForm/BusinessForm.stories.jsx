import React from "react";

import { BusinessForm } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/BusinessForm",
  component: BusinessForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: "text", name: "Name" },
    submitButtonText: { control: "text", name: "Submit Button Text" },
    cancelButtonText: { control: "text", name: "Cancel Button Text" },
    deleteButtonText: { control: "text", name: "Delete Button Text" },
    canDeleteInMobile: { control: "boolean", name: "Can Delete In Mobile" },
    initialValues: { control: "object", name: "Initial Values" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BusinessForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Business Form",
  submitButtonText: "Submit",
  cancelButtonText: "Cancel",
  deleteButtonText: "Delete",
  canDeleteInMobile: false,
};

export const withDeleteOnResponsive = Template.bind({});
withDeleteOnResponsive.args = {
  title: "Business Form",
  submitButtonText: "Submit",
  cancelButtonText: "Cancel",
  deleteButtonText: "Delete",
  canDeleteInMobile: true,
};

export const withInitialValue = Template.bind({});
withInitialValue.args = {
  title: "Business Form",
  submitButtonText: "Submit",
  cancelButtonText: "Cancel",
  deleteButtonText: "Delete",
  canDeleteInMobile: true,
  initialValues: {
    name: "Initial Value",
  },
};

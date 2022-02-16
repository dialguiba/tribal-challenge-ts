import React from "react";

import { LoadingSpinner } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/LoadingSpinner",
  component: LoadingSpinner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    spinnerName: {
      control: "select",
      options: {
        Audio: "Audio",
        BallTriangle: "BallTriangle",
        Bars: "Bars",
        Circles: "Circles",
        Grid: "Grid",
        Hearts: "Hearts",
        Oval: "Oval",
        Puff: "Puff",
        Rings: "Rings",
        SpinningCircles: "SpinningCircles",
        TailSpin: "TailSpin",
        ThreeDots: "ThreeDots",
      },
    },
    fillColor: {
      control: "color",
    },
    strokeColor: {
      control: "color",
    },
    strokeOpacity: {
      control: "number",
    },
    speed: {
      control: "number",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LoadingSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  spinnerName: "Bars",
  fillColor: "#2dfdbd",
  strokeColor: "#2dfdbd",
  strokeOpacity: ".125",
  speed: ".75",
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

const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/preset-create-react-app"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },

  webpackFinal: async (config) => {
    config.resolve.alias["@components"] = path.resolve(__dirname, "../src/components");

    config.resolve.alias["@atoms"] = path.resolve(__dirname, "../src/components/atoms");

    config.resolve.alias["@molecules"] = path.resolve(__dirname, "../src/components/molecules");

    config.resolve.alias["@organisms"] = path.resolve(__dirname, "../src/components/organisms");

    config.resolve.alias["@pages"] = path.resolve(__dirname, "../src/pages");

    config.resolve.alias["@assets"] = path.resolve(__dirname, "../src/assets");

    config.resolve.alias["@images"] = path.resolve(__dirname, "../src/assets/img");

    config.resolve.alias["@icons"] = path.resolve(__dirname, "../src/assets/icons");

    config.resolve.alias["@store"] = path.resolve(__dirname, "../src/store");

    config.resolve.alias["@reducers"] = path.resolve(__dirname, "../src/store/reducers");

    config.resolve.alias["@actions"] = path.resolve(__dirname, "../src/store/actions");

    config.resolve.alias["@styles"] = path.resolve(__dirname, "../src/styles");

    return config;
  },
};

const cracoAlias = require("craco-alias");
const { ESLINT_MODES } = require("@craco/craco");
const path = require("path");

const resolve = (arg) => path.resolve(__dirname, arg);

const config = () => ({
  plugins: [
    {
      plugin: require("craco-plugin-scoped-css"),
    },
    {
      plugin: cracoAlias,
      options: {
        baseUrl: "./src",
        source: "tsconfig",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
  eslint: {
    mode: ESLINT_MODES.file,
  },
  webpack: {
    alias: {
      "@components": resolve("src/components"),
    },
  },
});

module.exports = config;

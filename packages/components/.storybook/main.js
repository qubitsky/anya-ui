const path = require("path");

module.exports = {
  core: {
    builder: "webpack5",
  },
  features: {
    postcss: false,
  },
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.alias = {
      "@": path.resolve(__dirname, "../src"),
    };

    const fileLoader = config.module.rules.find(
      ({ loader, type }) =>
        (loader && loader.indexOf("file-loader") !== -1) ||
        type === "asset/resource"
    );

    if (fileLoader) {
      fileLoader.test =
        /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-react"]],
          },
        },
        {
          loader: "react-svg-loader",
          options: {
            jsx: true, // true outputs JSX tags
          },
        },
      ],
    });
    return config;
  },
};

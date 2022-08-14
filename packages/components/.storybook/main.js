const path = require("path");

module.exports = {
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
      ({ loader }) => loader && loader.indexOf("file-loader") !== -1
    );
    fileLoader.test =
      /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;

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

    console.log(config.module.rules);
    return config;
  },
};

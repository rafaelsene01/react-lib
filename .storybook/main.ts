import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react-webpack5",
  core: {
    builder: {
      name: "@storybook/builder-webpack5",
      options: {
        // fsCache: true,
        // lazyCompilation: true,
      },
    },
  },
};
export default config;

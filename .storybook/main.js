module.exports = {
  "stories": [
    "../src/**/*.stories.(js|mdx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-contexts/register",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y/register",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    }
  ]
}
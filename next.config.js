const { parsed: localEnv } = require("dotenv").config();
const withCSS = require("@zeit/next-css");

const webpack = require("webpack");
const apiKey = JSON.stringify(process.env.SHOPIFY_API_KEY);

module.exports = withCSS({
  webpack: config => {
    const env = { API_KEY: c2e4d129af713a0d617bdf2914d8375a};
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  }
});

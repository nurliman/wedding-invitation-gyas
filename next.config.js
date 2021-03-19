const preact = require('preact');
const withPlugins = require("next-compose-plugins");
const withPrefresh = require('@prefresh/next');
const nextPreact = require("next-plugin-preact");
const nextImg = require("next-img/plugin");
const hashClassName = require("./helpers/hashClassname");

module.exports = withPlugins(
  [nextPreact, hashClassName, [nextImg, { breakpoints: [768] }]],
  {}
);

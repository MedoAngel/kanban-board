import { VuetifyPlugin } from "webpack-plugin-vuetify";

module.exports = {
  plugins: [new VuetifyPlugin({ autoImport: true })],
};

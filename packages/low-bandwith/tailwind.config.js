/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  ...require("@polar-view/core").tailwindConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
};

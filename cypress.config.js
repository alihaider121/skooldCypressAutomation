const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5aa1qb",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://skoold-staging-22981245cc70.herokuapp.com/',
    defaultCommandTimeout: 25_0000
  },
});

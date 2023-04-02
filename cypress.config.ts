import { defineConfig } from "cypress";
const { verifyDownloadTasks } = require('cy-verify-downloads');

export default defineConfig({
  e2e: {
    baseUrl: "http://www.uitestingplayground.com",
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // verify download import
      on('task', verifyDownloadTasks);
    },
    env: {
      demoVar: "Hello from the Cypress.config.ts ",
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com/",
      Angular: "https://www.globalsqa.com/",
      mobileViewportWidthBreakpoint: 400,
    },
  },
    pageLoadTimeout: 60000,
    viewportHeight: 900,
    viewportWidth: 600
});

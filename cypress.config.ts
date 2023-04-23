import { defineConfig } from "cypress";
const { verifyDownloadTasks } = require('cy-verify-downloads');

export default defineConfig({
  e2e: {
    baseUrl: "http://www.uitestingplayground.com",
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // verify download import
      on('task', verifyDownloadTasks);

      //for the mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);

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
    viewportWidth: 600,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'udemy course report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
      "retries": {
        "runMode": 2,
        "openMode": 1
    },
    video: true,
    screenshotOnRunFailure: true,
});

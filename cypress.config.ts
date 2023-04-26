import { defineConfig } from "cypress";
const { verifyDownloadTasks } = require('cy-verify-downloads');
//excel requirements
const xlsx = require("node-xlsx").default();
const fs = require("fs"); //for file
const path = require("path"); //for file path


export default defineConfig({
  e2e: {
    baseUrl: "http://www.uitestingplayground.com",
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // verify download import
      on('task', verifyDownloadTasks);

      //excel implementation
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });

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

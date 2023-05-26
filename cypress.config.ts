import { defineConfig } from "cypress";
const { verifyDownloadTasks } = require('cy-verify-downloads');
//excel requirements
//const xlsx = require("node-xlsx").default();
const fs = require("fs"); //for file
const path = require("path"); //for file path
//mySQL requirements
const mysql = require("mysql");
//Faker
const { faker } = require("@faker-js/faker");

export default defineConfig({
  e2e: {
    baseUrl: "http://www.uitestingplayground.com",
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

      on("task", {
        queryDb: (query) => {
          return queryTestDb(query, config);
        },
      });
      //for the mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);
      //Faker
      on("task", {
        freshUser() {
          let user = {
            userName: faker.name.firstName(),
            email: faker.name.email(),
            password: faker.name.password(),
            registeredAt: faker.name.past(),
            vehicle: faker.vehicle.vehicle()
          };
          return user;
        }
      })
    },
    env: {
      demoVar: "Hello from the Cypress.config.ts ",
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com/",
      Angular: "https://www.globalsqa.com/",
      db: {
        host: "localhost",
        user: "root",
        passowrd: "",
        database: "cypress_test",
      },
      //Mobile validation
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
    projectId: "8h8qhd"
});

function queryTestDb(query, config) {
  //creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  //start connection to db
  connection.connect();
  //exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else{
        connection.end();
        //console.log(results);
        return resolve(results)
      }
    });
  });
}

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://aqueous-brook-60480.herokuapp.com/',
    // specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    // supportFile: 'cypress/support/index.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


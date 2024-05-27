import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the homepage', () => {
  cy.visit('https://qavbox.github.io/demo/'); // Replace with your application's URL
});

Then('I should see the title {string}', (title) => {
  cy.title().should('eq', title);
});

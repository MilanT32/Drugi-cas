describe("Login page", () => {
  it("Visit login page", () => {
    cy.visit("https://gallery-app.vivifyideas.com/login");
    cy.get('input[id="email"]').clear();
    cy.get('input[id="password"]').clear();
  });
  it("Positive case - Successful login", () => {
    cy.visit("https://gallery-app.vivifyideas.com/login");
    cy.get('input[id="email"]').type("markoqa13@gmail.com");
    cy.get('input[ id="password"]').type("Marko123");
    cy.get('button[type="submit"]').click();
  });
  it("Logout", () => {
    cy.visit("https://gallery-app.vivifyideas.com/login");
    cy.get('input[id="email"]').type("markoqa13@gmail.com");
    cy.get('input[id="password"]').type("Marko123");
    cy.get('button[type="submit"]').click();
    cy.wait(3000);
    cy.get('a[role="button "]').click();
  });
});

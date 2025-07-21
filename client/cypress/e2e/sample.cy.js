describe('MERN App E2E', () => {
  it('should display the heading and button', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Welcome to the MERN Testing App');
    cy.contains('Click Me');
  });
}); 
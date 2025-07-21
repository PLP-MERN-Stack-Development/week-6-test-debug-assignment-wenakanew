# MERN Testing and Debugging Assignment

This project demonstrates comprehensive testing and debugging strategies for a MERN (MongoDB, Express, React, Node.js) stack application. It includes unit, integration, and end-to-end (E2E) tests, as well as practical debugging techniques.

---

## Table of Contents
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Testing Strategy](#testing-strategy)
  - [Unit Testing](#unit-testing)
  - [Integration Testing](#integration-testing)
  - [End-to-End (E2E) Testing](#end-to-end-e2e-testing)
- [Debugging Techniques](#debugging-techniques)
- [Code Coverage](#code-coverage)
- [Screenshots](#screenshots)
- [Submission Checklist](#submission-checklist)
- [Resources](#resources)

---

## Project Structure

```
week-6-test-debug-assignment-wenakanew/
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   └── Button.jsx
│   │   └── tests/
│   │       ├── unit/
│   │       │   └── Button.test.jsx
│   │       └── integration/
│   │           └── App.integration.test.jsx
│   └── cypress/
│       └── e2e/
│           └── sample.cy.js
├── server/
│   ├── src/
│   │   ├── app.js
│   │   └── routes/
│   │       └── hello.js
│   └── tests/
│       ├── unit/
│       │   └── utils.test.js
│       └── integration/
│           └── hello.test.js
├── package.json
├── jest.config.js
└── README.md
```

---

## Setup Instructions

1. **Clone your repository** (from GitHub Classroom):
   ```sh
   git clone <your-repo-url>
   cd week-6-test-debug-assignment-wenakanew
   ```
2. **Install all dependencies**:
   ```sh
   npm run install-all
   ```
3. **Set up the test database** (if required for integration tests):
   - Integration tests use `mongodb-memory-server` for an in-memory MongoDB instance. No manual setup is needed.
4. **Start the development servers** (if you want to run the app):
   - Client: `cd client && npm start`
   - Server: `cd server && node src/app.js` (or your preferred start script)

---

## Testing Strategy

### Unit Testing
- **Client:**
  - Located in `client/src/tests/unit/`
  - Example: `Button.test.jsx` tests the Button component in isolation.
  - Run with:
    ```sh
    npm run test:unit
    ```
- **Server:**
  - Located in `server/tests/unit/`
  - Example: `utils.test.js` tests a sample utility function.
  - Run with:
    ```sh
    npm run test:unit
    ```

### Integration Testing
- **Client:**
  - Located in `client/src/tests/integration/`
  - Example: `App.integration.test.jsx` tests the App component as a whole.
- **Server:**
  - Located in `server/tests/integration/`
  - Example: `hello.test.js` tests the `/api/hello` endpoint using Supertest.
  - Uses `mongodb-memory-server` for isolated DB tests.
- **Run integration tests:**
  ```sh
  npm run test:integration
  ```

### End-to-End (E2E) Testing
- **Client:**
  - Located in `client/cypress/e2e/`
  - Example: `sample.cy.js` tests the main page for heading and button.
  - Uses Cypress to simulate real user interactions.
- **Run E2E tests:**
  ```sh
  npm run test:e2e
  ```
  - Make sure the client app is running on `http://localhost:3000` before running E2E tests.

---

## Debugging Techniques

- **Server-side Logging:**
  - Use `console.log` statements in routes/controllers to trace execution and inspect variables.
- **Global Error Handler (Express):**
  - Add a middleware at the end of your middleware stack to catch and handle errors globally.
  - Example:
    ```js
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ error: 'Something went wrong!' });
    });
    ```
- **React Error Boundaries:**
  - Implement an error boundary component to catch UI errors and display fallback UI.
  - Example:
    ```jsx
    import React from 'react';
    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
      static getDerivedStateFromError(error) {
        return { hasError: true };
      }
      componentDidCatch(error, info) {
        console.error(error, info);
      }
      render() {
        if (this.state.hasError) {
          return <h2>Something went wrong.</h2>;
        }
        return this.props.children;
      }
    }
    export default ErrorBoundary;
    ```
- **Browser Developer Tools:**
  - Use Chrome/Firefox DevTools for inspecting React components, network requests, and debugging JavaScript.
- **Performance Monitoring:**
  - Use browser profiling tools and Node.js performance hooks as needed.

---

## Code Coverage

- **Generate coverage reports:**
  ```sh
  npm run test:unit -- --coverage
  ```
- **View coverage summary:**
  - Terminal output will show coverage percentages.
  - Detailed HTML report is generated in the `coverage/` directory.
- **Goal:**
  - Achieve at least **70% code coverage** for unit tests.

---

## Screenshots

- Add screenshots of your coverage reports here:
  - `screenshots/coverage-client.png`
  - `screenshots/coverage-server.png`
- To take a screenshot:
  - Run the coverage command above
  - Open the HTML report in `coverage/lcov-report/index.html`
  - Take a screenshot and save it in a `screenshots/` folder

---

## Submission Checklist

- [ ] All required tests (unit, integration, E2E) are implemented and passing
- [ ] 70%+ code coverage for unit tests
- [ ] Testing strategy documented in README
- [ ] Screenshots of coverage reports included
- [ ] Debugging techniques demonstrated in code
- [ ] Code regularly committed and pushed to GitHub

---

## Resources
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Supertest Documentation](https://github.com/visionmedia/supertest)
- [Cypress Documentation](https://docs.cypress.io/)
- [MongoDB Testing Best Practices](https://www.mongodb.com/blog/post/mongodb-testing-best-practices) 
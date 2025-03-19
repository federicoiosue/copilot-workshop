# Development Instructions for Notes Application

This document provides guidelines and best practices for working on the Notes Application using Copilot Chat.

---

## General Guidelines

1. **Understand the Workspace Structure**:
   - Familiarize yourself with the folder structure and file organization.
   - Key directories:
     - `frontend/`: Contains the React-based frontend.
     - `backend/`: Contains the Node.js and Express-based backend.

2. **Use Copilot Chat Effectively**:
   - Clearly describe your requirements when asking for assistance.
   - Use specific prompts to get accurate code suggestions.
   - Review and test the generated code before integrating it into the project.

3. **Follow Coding Standards**:
   - Use consistent formatting and naming conventions.
   - Add comments to explain complex logic or functionality.
   - Write modular and reusable code.

---

## Frontend Development

1. **React Components**:
   - Use functional components with hooks (e.g., `useState`, `useEffect`).
   - Keep components small and focused on a single responsibility.

2. **Styling**:
   - Use Tailwind CSS for styling.
   - Follow the existing design patterns and class naming conventions.

3. **Routing**:
   - Use `react-router-dom` for navigation between pages.
   - Define routes in the `App.jsx` file.

4. **State Management**:
   - Use local state for component-specific data.
   - Pass props between components as needed.

5. **API Integration**:
   - Use `fetch` or `axios` to interact with the backend API.
   - Handle errors gracefully and provide user feedback.

6. **Testing**:
   - Write unit tests using Jest and React Testing Library.
   - Mock components and API calls for isolated testing.

---

## Backend Development

1. **Express Routes**:
   - Define RESTful API endpoints in `app.js`.
   - Use appropriate HTTP methods (GET, POST, PUT, DELETE) for CRUD operations.

2. **Data Validation**:
   - Validate incoming data in API requests.
   - Return meaningful error messages for invalid inputs.

3. **Error Handling**:
   - Use `try-catch` blocks to handle errors.
   - Send appropriate HTTP status codes in responses.

4. **Middleware**:
   - Use middleware for common tasks like CORS, JSON parsing, and logging.

5. **Testing**:
   - Test API endpoints using tools like Postman or automated test scripts.
   - Ensure all edge cases are covered.

---

## Collaboration and Version Control

1. **Git Workflow**:
   - Use feature branches for new functionality.
   - Commit changes with clear and descriptive messages.
   - Merge changes into the main branch only after review and testing.

2. **Documentation**:
   - Update the `README.md` file with any new setup or usage instructions.
   - Add comments and JSDoc annotations to explain code functionality.

3. **Communication**:
   - Use Copilot Chat to clarify doubts or get suggestions.
   - Discuss major changes with the team before implementation.

---

## Common Prompts for Copilot Chat

1. **Frontend**:
   - "How do I fetch data from the backend and display it in a React component?"
   - "Generate a form component with validation for creating a new note."
   - "Add Tailwind CSS classes to style this component."

2. **Backend**:
   - "Create an Express route to handle POST requests for adding a new note."
   - "Write middleware to validate incoming data for the `/notes` endpoint."
   - "How do I handle errors in an Express route?"

3. **Testing**:
   - "Write a Jest test for the `CreateNote` component."
   - "Mock an API call in a React component test."
   - "Test the `/notes` POST endpoint using Jest."

---

## Additional Notes

- Refer to the `Backlog.MD` file for feature requirements and acceptance criteria.
- Use the `README.md` file for setup instructions and project overview.
- Regularly test the application to ensure functionality and performance.

Happy coding!
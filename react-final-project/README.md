# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

React Js Practical Exam - Web
Product Management App Project Outline



﻿Instruction/Text linked with this question​1. Project Setup

- Set up a new React project using Create React App.

- Install required dependencies: `react-router-dom`, `redux`, `react-redux`, `redux-thunk`, ` Bootsrap`, `json-server`, etc.



​2. Component Structure

- Create the necessary components:

- ProductList

- ProductForm

- ProductItem

- PrivateRoute

- Navbar

- Implement the basic component structure for the product management app.



​3. Redux Setup (5 points)

- Set up the Redux store with actions, reducers, and thunks.

- Define actions for fetching, adding, updating, and deleting products.

- Implement thunks for asynchronous operations.



​4. JSON Server Setup (5 points)

- Set up a JSON Server to act as a backend for storing product data.

- Create a `db.json` file to store initial product data.

- Define routes for CRUD operations (e.g., `/products`).



5. Fetching and Displaying Products (5 points)

- Implement the `fetchProducts` function in the ProductList component.

- Display products dynamically using the ProductItem component.

- Connect the ProductList component to the Redux store to fetch product data from the server.



6. Adding Products (5 points)

- Implement the `addProduct` function in the ProductForm component.

- Validate that product details (title, price, image, category) are provided before adding a product.

- Dispatch a Redux action and thunk to add the product to the server and store.



7. Updating Products (5 points)

- Develop the `updateProduct` function in the ProductItem component to allow users to edit existing products.

- Identify a unique identifier for each product to ensure accurate updating.

- Dispatch a Redux action and thunk to update the product on the server and in the store.



​8. Deleting Products (5 points)

- Implement the `deleteProduct` function in the ProductItem component to allow users to remove products.

- Dispatch a Redux action and thunk to delete the product from the server and store.



​9. Sorting, Searching, and Filtering (10 points)

- Implement sorting feature by price (low to high, high to low) in the ProductList component.

- Add searching feature by product title in the ProductList component.

- Implement filtering feature by category in the ProductList component.



​10. User Authentication (5 points)

- Implement a simple user authentication mechanism.

- Restrict access to product-related operations based on user authentication status.



​11. Navbar

- Create a Navbar component to provide navigation within the application.

- Include links to the product list, product form, and a sign-out option (if applicable).

- Ensure the Navbar is responsive and visually appealing.



​12. Bootstrap Styling (5 points)

- Utilize Bootstrap I components for a modern and clean UI.

- Apply styling and theming to enhance the overall look and feel of the application.
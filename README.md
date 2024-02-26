# React CRUD Application

This is a basic CRUD (Create, Read, Update, Delete) application built with React. It allows users to view a list of products, add new products, edit existing products, and delete products.

## Features

- **View Products**: Users can view a list of products with their name, email, and phone number.
- **Add Product**: Users can add a new product by providing a name, email, and phone number.
- **Edit Product**: Users can edit an existing product's details, including name, email, and phone number.
- **Delete Product**: Users can delete a product from the list.

## Technologies Used

- **React**: The frontend is built using React, a JavaScript library for building user interfaces.
- **React Router**: Used for routing within the application.
- **axios**: Used for making HTTP requests to the mock API.
- **Bootstrap**: Used for styling and layout of the application.

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/react-crud-app.git
    ```

2. Navigate into the project directory:

    ```bash
    cd react-crud-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the application:

    ```bash
    npm start
    ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Additional Notes

- This application uses a mock API provided by `https://65dabbf4bcc50200fcdd21db.mockapi.io/api/profiles` for fetching and updating product data.
- The application's state management is handled using React's `useState` hook.
- Routing within the application is managed using `react-router-dom`.
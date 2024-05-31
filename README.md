This is a simple Express.js application for managing books.

## Files

- `index.ts`: This is the main entry point for the application. It sets up the Express server, applies middleware, and starts the server.

- `bookController.ts`: This file contains the controller functions for handling book-related requests.

- `bookRoutes.ts`: This file defines the routes for book-related requests and associates them with the appropriate controller functions.

## Endpoints

- `GET /api/books/:id`: This endpoint returns the book with the specified ID. If the book is not found, it returns a 404 status code with a message.

- `GET /api/books/year/:year`: This endpoint returns all books published in the specified year. If no books are found, it returns a 404 status code with a message.

- `GET /api/books/author/:author`: This endpoint returns all books written by the specified author. If no books are found, it returns a 404 status code with a message.

- `GET /api/books/title/:title`: This endpoint returns all books with the specified title. If no books are found, it returns a 404 status code with a message.

- `POST /api/books`: This endpoint creates a new book with the properties in the request body and adds it to the books array.

- `PUT /api/books/:id`: This endpoint updates the book with the specified ID with the properties in the request body. If the book is not found, it returns a 404 status code with a message.

- `DELETE /api/books/:id`: This endpoint deletes the book with the specified ID. If the book is not found, it returns a 404 status code with a message.

Each endpoint uses the parameters in the URL to find or filter books. The `PUT /api/books/:id` endpoint also uses the properties in the request body to update the book.


# index.ts

This is the main entry point for the Express server.

## Imports

- `express`: This is the Express.js library, used to create the server.
- `bookRouter`: This is the router for book-related routes, imported from `./routes/bookRoutes`.

## Variables

- `app`: This is the instance of the Express server.
- `PORT`: This is the port number on which the server will listen.

## Middleware

- `app.use(express.json())`: This tells the app to use the built-in `express.json()` middleware to automatically parse incoming requests with JSON payloads.
- `app.use('/api', bookRouter)`: This tells the app to use `bookRouter` for routes that start with `/api`.

## Server Start

- `app.listen(PORT, ...)`: This starts the server on the specified port and logs a message to the console when the server is ready.

## Check it out with postman or insomnia
- npm run dev

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

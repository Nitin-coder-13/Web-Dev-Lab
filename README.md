# Books API — Node.js + Express.js

A simple RESTful API for managing a book collection with full CRUD operations.

## Project Structure

```
books-api/
├── server.js                  ← Entry point, sets up Express app
├── package.json
├── data/
│   └── books.js               ← In-memory data store (sample books)
├── routes/
│   └── bookRoutes.js          ← Defines API routes
└── controllers/
    └── bookController.js      ← CRUD logic for each route
```

## Setup & Running

### 1. Open in VS Code
Open the `books-api` folder in VS Code.

### 2. Open the terminal (Ctrl + `)

### 3. Install dependencies
```bash
npm install
```

### 4. Start the server
```bash
npm start
```
Server runs at: **http://localhost:3000**

For auto-restart on file changes (development):
```bash
npm run dev
```

---

## API Endpoints

| Method | Endpoint         | Description          |
|--------|-----------------|----------------------|
| GET    | /api/books       | Get all books        |
| GET    | /api/books/:id   | Get a book by ID     |
| POST   | /api/books       | Add a new book       |
| PUT    | /api/books/:id   | Update a book by ID  |
| DELETE | /api/books/:id   | Delete a book by ID  |

---

## Testing with Thunder Client (VS Code Extension)

Install the **Thunder Client** extension in VS Code to test the API visually.

### GET all books
```
GET http://localhost:3000/api/books
```

### GET one book
```
GET http://localhost:3000/api/books/1
```

### POST — Add a new book
```
POST http://localhost:3000/api/books
Content-Type: application/json

{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "genre": "Programming",
  "year": 2008,
  "price": 35.99
}
```

### PUT — Update a book
```
PUT http://localhost:3000/api/books/1
Content-Type: application/json

{
  "price": 14.99
}
```

### DELETE — Remove a book
```
DELETE http://localhost:3000/api/books/3
```

---

## Sample Response Format

### Success
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Classic Fiction",
    "year": 1925,
    "price": 10.99
  }
}
```

### Error
```json
{
  "success": false,
  "error": "Book with ID 99 not found"
}
```

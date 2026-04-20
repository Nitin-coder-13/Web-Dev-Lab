// In-memory data store (acts as our "database")
// In a real app, this would be replaced by a database like MongoDB or MySQL

let books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic Fiction',
    year: 1925,
    price: 10.99,
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Classic Fiction',
    year: 1960,
    price: 12.99,
  },
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-Help',
    year: 2018,
    price: 16.99,
  },
];

let nextId = 4; // Auto-increment ID counter

module.exports = { books, getNextId: () => nextId++ };

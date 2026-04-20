const { books, getNextId } = require('../data/books');

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/books
// Returns all books
// ─────────────────────────────────────────────────────────────────────────────
const getAllBooks = (req, res) => {
  res.status(200).json({
    success: true,
    count: books.length,
    data: books,
  });
};

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/books/:id
// Returns a single book by ID
// ─────────────────────────────────────────────────────────────────────────────
const getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({
      success: false,
      error: `Book with ID ${id} not found`,
    });
  }

  res.status(200).json({
    success: true,
    data: book,
  });
};

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/books
// Adds a new book
// ─────────────────────────────────────────────────────────────────────────────
const createBook = (req, res) => {
  const { title, author, genre, year, price } = req.body;

  // Validate required fields
  if (!title || !author) {
    return res.status(400).json({
      success: false,
      error: 'Title and author are required fields',
    });
  }

  const newBook = {
    id: getNextId(),
    title,
    author,
    genre: genre || 'Unknown',
    year: year || null,
    price: price || 0,
  };

  books.push(newBook);

  res.status(201).json({
    success: true,
    message: 'Book created successfully',
    data: newBook,
  });
};

// ─────────────────────────────────────────────────────────────────────────────
// PUT /api/books/:id
// Updates an existing book by ID
// ─────────────────────────────────────────────────────────────────────────────
const updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: `Book with ID ${id} not found`,
    });
  }

  // Merge existing book data with the incoming updates
  const updatedBook = {
    ...books[index],
    ...req.body,
    id, // Ensure ID cannot be changed
  };

  books[index] = updatedBook;

  res.status(200).json({
    success: true,
    message: 'Book updated successfully',
    data: updatedBook,
  });
};

// ─────────────────────────────────────────────────────────────────────────────
// DELETE /api/books/:id
// Deletes a book by ID
// ─────────────────────────────────────────────────────────────────────────────
const deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: `Book with ID ${id} not found`,
    });
  }

  const deletedBook = books.splice(index, 1)[0];

  res.status(200).json({
    success: true,
    message: 'Book deleted successfully',
    data: deletedBook,
  });
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};

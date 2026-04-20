const express = require('express');
const router = express.Router();

const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');

// GET    /api/books        → get all books
// POST   /api/books        → create a new book
router.route('/').get(getAllBooks).post(createBook);

// GET    /api/books/:id    → get one book
// PUT    /api/books/:id    → update a book
// DELETE /api/books/:id    → delete a book
router.route('/:id').get(getBookById).put(updateBook).delete(deleteBook);

module.exports = router;

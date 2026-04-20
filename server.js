const express = require('express');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = 3000;

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(express.json()); // Parse incoming JSON request bodies

// ─── Routes ──────────────────────────────────────────────────────────────────
app.use('/api/books', bookRoutes);

// ─── Root Route ──────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Books API!',
    endpoints: {
      'GET    /api/books'         : 'Get all books',
      'GET    /api/books/:id'     : 'Get a single book by ID',
      'POST   /api/books'         : 'Add a new book',
      'PUT    /api/books/:id'     : 'Update a book by ID',
      'DELETE /api/books/:id'     : 'Delete a book by ID',
    },
  });
});

// ─── 404 Handler ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop.');
});

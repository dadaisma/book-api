import { Router } from "express";
import {
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
    getBookByYear,
    getBookByAuthor,
    getBookByTitle
} from '../controllers/bookController'

const router = Router();

router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.get('/books/year/:year', getBookByYear);
router.get('/books/author/:author', getBookByAuthor);
router.get('/books/title/:title', getBookByTitle);
router.post('/books',addBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;
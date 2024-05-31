import {Request, Response} from 'express';
import {Book} from '../models/book';

let books: Book[] = [
    {id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925},
    {id: 2, title: 'Music is the answer', author: 'Carlo Cox', year:2024},
    {id: 3, title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003}
];

const getBooks = (req: Request, res: Response): void =>{
    res.json(books);
}

 const getBookById =(req: Request, res: Response): void =>{
    const book = books.find(b => b.id === parseInt(req.params.id));
    const id = req.params.id;
    if (book) {
        res.json(book);
    } else {
        res.status(404).send(`Book id ${id} not found`);
    }
};

const getBookByYear =(req: Request, res: Response): void =>{
   const booksByYear = books.filter(b=> b.year === parseInt(req.params.year));
   const year = req.params.year;
    if (booksByYear.length >0) {
        res.json(booksByYear);
    } else {
        res.status(404).send(`Book not found on  year ${year}`);
    }
};

const getBookByAuthor =(req: Request, res: Response): void =>{
    const booksByAuthor = books.filter(b=> b.author === (req.params.author));
    const author = req.params.author;
     if (booksByAuthor.length >0) {
         res.json(booksByAuthor);
     } else {
         res.status(404).send(`Book of ${author} not found`);
     }
 };

 const getBookByTitle =(req: Request, res: Response): void =>{
    const booksByTitle = books.filter(b=> b.title === (req.params.title));
    const title = req.params.title;
     if (booksByTitle.length >0) {
         res.json(booksByTitle);
     } else {
         res.status(404).send(`Book ${title} not found`);
     }
 };


 const addBook =(req:Request, res:Response): void => {
    const newBook: Book = req.body;

    

    if ( !newBook.title || !newBook.author || !newBook.year) {
        res.status(400).send('Missing fields!');
        return;
    }
    const existingTitle = books.find(b => b.title === newBook.title);
    if(existingTitle){
        res.status(400).send('Title already Exist')
        return;
    }

    const maxId = Math.max(...books.map(b=> b.id));
    newBook.id = maxId + 1;

    books.push(newBook);
    res.status(201).json(newBook)
};


 const updateBook =(req:Request, res:Response): void =>{
    const bookIndex = books.findIndex(b=> b.id === parseInt(req.params.id));
    if (bookIndex >=0){
        books[bookIndex] = req.body;
        res.json(books[bookIndex]);
    } else {
        res.status(404).send("Book not found");
    }
};

const deleteBook =(req:Request, res:Response): void =>{
    const bookIndex = books.findIndex(b=> b.id === parseInt(req.params.id));
    if (bookIndex >=0){
        books.splice(bookIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send("Book not found");
    }
};



{/*
export const deleteBook = (req:Request, res:Response): void => {
    books = book.filter(b => b.id !== parseInt(req.params.id));
    res.status(204).send();
}



*/}

export {
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
    getBookByYear,
    getBookByAuthor,
    getBookByTitle

};
const BookModel = require('../models/book')


const createBook = async (req, res, next) => {
    const newBook = new BookModel({
        author: req.body.author,
        category: req.body.category,
        title: req.body.title,
        createdBy: req.body.createdBy
    })
    try{
        const bookData = await newBook.save();
        res.status(200).json(bookData)
    } catch(err) {
        res.status(401).json(err)
    }
}


const getBook = async () => {
    try {
         const book = await BookModel.findById(req.params.id)
         res.status(200).json(book)
    } catch(err) {
        res.status(401).json(err)

    }
}


const getAllBooks = async () => {
    try {
        const books = await BookModel.find({})
        res.status(200).json(books)
    } catch( err) {
        res.status(401).json(err)
    }
}


const updateBook = async (req, res, next) => {
    const book = await BookModel.findById(req.params.id)
    try {
        if(book) {
            book.title = req.body.title,
            book.author = req.body.author,
            book.category = req.body.category,
            book.createdBy = req.body.createdBy
        }
        const updatedBook = await book.save();
        res.status(200).send(updatedBook);
    } catch(err) {
        res.status(401).json("C")
    }
}



module.exports = { createBook, updateBook }
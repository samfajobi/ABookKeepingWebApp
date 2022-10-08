const router = require('express').Router();
const { createBook, updateBook, getBook, getAllBooks, deleteBook } = require('../controller/bookCtrl');



router.post('/', createBook);
router.put('/:id', updateBook);
router.get('/:id', getBook )
router.get('/', getAllBooks)
router.delete('/:id', deleteBook)




module.exports = router;
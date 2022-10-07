const router = require('express').Router();
const { createBook, updateBook } = require('../controller/bookCtrl');



router.post('/', createBook);
router.put('/:id', updateBook);



module.exports = router;
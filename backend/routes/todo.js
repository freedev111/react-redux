const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');

router.post('/', todoController.create);

router
    .get('/:id', todoController.read)
    .put('/:id', todoController.update)
    .delete('/:id', todoController.del);

router.param('id', todoController.GetTodo);

module.exports = router;
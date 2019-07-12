const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');

router
    .get('/', todoController.list)
    .post('/', todoController.create);

router
    .put('/:id', todoController.update)
    .delete('/:id', todoController.del);

router.param('id', todoController.GetTodo);

module.exports = router;
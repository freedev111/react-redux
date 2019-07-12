const Todo = require('../models/Todo');

function list(req, res) {
    Todo.find({})
    .then(todos => {
        res.json(todos);
    })
    .catch(err => {
        res.status(404).json(err);
    })
}
function create(req, res) {
    const data = req.body;
    const newTodo = new Todo(data);

    newTodo.save()
    .then(todo => {
        res.json(todo);
    })
    .catch(err => {
        res.status(404).json(err);
    })
}

function update(req, res) {
    const data = req.body;

    req.todo = Object.assign(req.todo, data);

    req.todo.save()
    .then(todo => {
        res.json(todo);
    })
    .catch(err => {
        res.status(404).json(err);
    })
}

function del(req, res) {
    req.todo.delete()
    .then(todo => {
        res.json(todo);
    })
    .catch(err => {
        res.status(404).json(err);
    })
}

function GetTodo(req, res, next, id) {
    Todo.findById(id)
    .then(todo => {
        req.todo = todo;
        next();
    })
    .catch(err => {
        res.status(404).json(err);
    })
}

module.exports = {
    list, 
    create,
    update,
    del,
    GetTodo,
}


const Todo = require("../models/todo");

exports.getAllTodo = (request, response) => {
    Todo.find()
        .then((todo) => response.json(todo))
        .catch((err) =>
            response.status(404).json({ message: "Todo not found", error: err.message })
        );
};

exports.postCreateTodo = (request, response) => {
    Todo.create(request.body)
        .then((data) => response.json({ message: "Todo added successfully", data }))
        .catch((err) =>
            response.status(400).json({ message: "Failed to add todo", error: err.message })
        );
};

exports.putUpdateTodo = (request, response) => {
    Todo.findByIdAndUpdate(request.params.id, request.body)
        .then((data) => response.json({ message: "updated successfully", data }))
        .catch((err) =>
            response.status(400).json({ message: "Failed to update todo", error: err.message })
        );
};

exports.deleteTodo = (request, response) => {
    Todo.findByIdAndRemove(request.params.id, request.body)
        .then((data) =>
            response.json({ message: "todo deleted successfully", data })
        )
        .catch((err) =>
            response.status(404).json({ message: "book not found", error: err.message })
        );
};
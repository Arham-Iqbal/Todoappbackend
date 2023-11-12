const { response } = require("express");
const todo = require("../models/Todo");

exports.createtodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const createdTodo = await todo.create({ title, description }); // Change variable name from res to createdTodo

        res.status(200).json({
            success: true,
            data: createdTodo,  // Change variable name from response to createdTodo
            message: "success"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};

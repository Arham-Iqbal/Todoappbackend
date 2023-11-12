const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
        maxlength: 50
    },
    description: {
        required: true,
        type: String,
        maxlength: 50
    },
    Created: {
        required: true,
        type: Date,
        default: Date.now()  // Corrected syntax
    }
});

module.exports = mongoose.model("Todo", todoSchema);

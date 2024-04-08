const mongoose = require('mongoose');

const TrianguloSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    lado1: {
        type: Number,
        required: true,
        min: 1
    },
    lado2: {
        type: Number,
        required: true,
        min: 1
    },
    lado3: {
        type: Number,
        required: true,
        min: 1
    }
});

module.exports = mongoose.model('Triangulo', TrianguloSchema);
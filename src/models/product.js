const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    price: String,
    details: String
});

module.exports = mongoose.model('Product', ProductSchema);
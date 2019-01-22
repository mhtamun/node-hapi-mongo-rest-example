const Boom = require('boom');
const Product = require('../../models/product');

module.exports = {
    createProduct: function (request, h) {
        const { name, price, details } = request.payload;
        const product = new Product({
            name: name,
            price: price,
            details: details
        });

        return Product.create(product).then((product) => {
            return {
                message: "success",
                product: product
            };
        }).catch(function (error) {
            return { error: error };
        });
    },
    getProducts: function (request, h) {
        return Product.find({}).exec().then((product) => {
            return { products: product };
        }).catch(function (error) {
            return { error: error };
        });
    },
    getProduct: function (request, h) {
        return Product.findById(request.params.id).exec().then((product) => {
            if (!product) return Boom.notFound("Product not found!");
            return { products: product };
        }).catch(function (error) {
            return { error: error };
        });
    },
    updateProduct: function (request, h) {
        return Product.findByIdAndUpdate(request.params.id, request.payload).exec().then((product) => {
            return {
                message: "success",
                product: product
            };
        }).catch(function (error) {
            return { error: error };
        });
    },
    deleteProduct: function (request, h) {
        return Product.findByIdAndRemove({ _id: request.params.id }).exec().then(() => {
            return {
                message: "success"
            };
        }).catch(function (error) {
            return { error: error };
        });
    }
};
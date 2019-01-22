const handlers = require('./handlers');
const validators = require('./validators');

module.exports = [
    {
        method: 'POST',
        path: '/api/products',
        handler: handlers.createProduct,
        options: {
            validate: validators.createProduct
        }
    },
    {
        method: 'GET',
        path: '/api/products',
        handler: handlers.getProducts
    },
    {
        method: 'GET',
        path: '/api/products/{id}',
        handler: handlers.getProduct
    },
    {
        method: 'PUT',
        path: '/api/products/{id}',
        handler: handlers.updateProduct,
        options: {
            validate: validators.updateProduct
        }
    },
    {
        method: 'DELETE',
        path: '/api/products/{id}',
        handler: handlers.deleteProduct
    }
];
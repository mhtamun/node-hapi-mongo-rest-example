const Joi = require('joi');
const Relish = require('relish')({
    messages: {
        'data.name': 'Maruf Hossain'
      }
});

module.exports = {
    createProduct: {
        payload: {
            name: Joi.string().required(),
            price: Joi.number().required(),
            details: Joi.string().required()
        },
        options: {
            abortEarly: false // if true then return with first error, if false then return with all the error
        },
        failAction: Relish.failAction
    },
    updateProduct: {
        payload: {
            name: Joi.string().optional(),
            price: Joi.number().optional(),
            details: Joi.string().optional()
        },
        options: {
            abortEarly: false // if true then return with first error, if not then return with all the error
        },
        failAction: Relish.failAction
    }
}
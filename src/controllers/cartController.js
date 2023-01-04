const {
    addCart,
    getCart,
    deleteCart,
    getCartValue
} = require('../service/cartService');
const logger = require('../utils/winston');
const {
    Sequelize,
    sequelize
} = require('../utils/sequelize');
const allModels = require('../models');
const {
    Op
} = require('sequelize');
const path = require('path')
const _ = require('lodash')
const moment = require('moment')
const HttpStatusCode = {
    HTTP_CREATED: 201,
    BAD_REQUEST: 400,
    HTTP_OK: 200
}
module.exports = {
    create: async (req, res) => {
        try {
            const jsonBody = req.body;
            const result = await addCart(jsonBody);
            res.status(HttpStatusCode.HTTP_CREATED).json({
                message: 'Product added succesfully',
                result
            });
        } catch (err) {
            return res.status(HttpStatusCode.BAD_REQUEST).json({
                message: err.message
            })
        }
    },
    get: async (req, res) => {
        try {
            const result = await getCart(req);
            res.status(HttpStatusCode.HTTP_CREATED).json({
                message: 'Products fetched succesfully',
                result
            });
        } catch (err) {
            return res.status(HttpStatusCode.BAD_REQUEST).json({
                message: err.message
            })
        }
    },
    deleteCart: async (req, res) => {
        try {
            await deleteCart(req);
            res.status(HttpStatusCode.HTTP_OK).json({
                message: 'Cart deleted succesfully'
            });
        } catch (err) {
            return res.status(HttpStatusCode.BAD_REQUEST).json({
                message: err.message
            })
        }
    },
    getCartValue: async (req, res) => {
        try {
            const data = await getCartValue(req);
            res.status(HttpStatusCode.HTTP_OK).json({
                message: 'Checkout value fetched succesfully',
                data
            });
        } catch (err) {
            return res.status(HttpStatusCode.BAD_REQUEST).json({
                message: err.message
            })
        }
    }
}
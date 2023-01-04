const allModels = require('../models');
const {
    Sequelize,
    sequelize
} = require('../utils/sequelize');

const _ = require('lodash');
const logger = require('../utils/winston');
const moment = require('moment');
const {
    Op
} = require('sequelize');

const {
    makeGetCall,
    getDiscountAmount,
    extractShippingObject
} = require('../utils/util')

module.exports.addCart = async (body) => {
    try {
        const products = body.products
        let cartId = body.cartId ? body.cartId : ""
        delete body.products
        let result = null
        //check if cart already exists or not
        if (!cartId) {
            result = await allModels.carts.create(body);
            cartId = result.id
        }
        if (cartId) {
            if (products && products.length) {
                products.forEach((product) => {
                    Object.assign(product, {
                        cartId
                    })
                });
                await allModels.cartProducts.bulkCreate(products);
            }
            return result;
        }
    } catch (err) {
        throw new Error(err);
    }
}

module.exports.getCart = async (req) => {
    try {
        let cartId = req.params.id
        const cartData = await allModels.carts.findOne({
            where: {
                id: cartId
            }
        });
        if (cartData) {
            const productsData = await allModels.cartProducts.findAll({
                where: {
                    cartId
                }
            });
            let products = null
            const url = `${process.env.URL}product/`
            if (productsData.length) {
                products = JSON.parse(JSON.stringify(productsData))
                for (const element of products) {
                    const product = element
                    product.data = (await makeGetCall(`${url}${product.productId}`)).response
                    const productDetails = product.data
                    const discount = getDiscountAmount(productDetails.price, productDetails.discount_percentage)
                    product.discount = Number(Math.round(discount + 'e2') + 'e-2')
                    product.sellingPrice = Number(Math.round((productDetails.price - discount) + 'e2') + 'e-2')
                }
            }
            return products
        } else {
            throw 'Cart not found'
        }
    } catch (err) {
        throw new Error(err);
    }
}
module.exports.deleteCart = async (req) => {
    try {
        let cartId = req.params.id
        const cartData = await allModels.carts.findOne({
            where: {
                id: cartId
            }
        });
        if (cartData) {
            await allModels.cartProducts.destroy({
                where: {
                    cartId
                }
            });
            await allModels.carts.destroy({
                where: {
                    id: cartId
                }
            });
            return true
        } else {
            throw 'Cart not found'
        }
    } catch (err) {
        throw new Error(err);
    }
}

module.exports.getCartValue = async (req) => {
    try {
        let cartId = req.params.id
        let code = req.params.postal_code
        const cartData = await allModels.carts.findOne({
            where: {
                id: cartId
            }
        });
        if (cartData) {
            const distanceData = await makeGetCall(`${process.env.URL}warehouse/distance?postal_code=${code}`)
            const distance = distanceData.distance_in_kilometers
            let totalCostPrice = 0,
                totalDiscount = 0,
                shippingCharge = 0
            const productsData = await allModels.cartProducts.findAll({
                where: {
                    cartId
                }
            });
            const url = `${process.env.URL}product/`
            let products = null
            if (productsData.length) {
                products = JSON.parse(JSON.stringify(productsData))
                //shippinh data 
                const shippingData = await allModels.shippingCharges.findAll({})
                for (const element of products) {
                    const product = element
                    product.data = (await makeGetCall(`${url}${product.productId}`)).response
                    const productDetails = product.data
                    totalCostPrice = totalCostPrice + productDetails.price
                    const discount = getDiscountAmount(productDetails.price, productDetails.discount_percentage)
                    totalDiscount = totalDiscount + discount
                    const convertedWeight = Number(Math.round((productDetails.weight_in_grams / process.env.CONVERT) + 'e2') + 'e-2')
                    const machedShipping = extractShippingObject(convertedWeight, distance, shippingData)
                    shippingCharge = shippingCharge + machedShipping.charge
                    logger.info(` machedShipping-${machedShipping.charge}`)
                }
            }
            totalDiscount = Number(Math.round(totalDiscount + 'e2') + 'e-2')
            const checkout = totalCostPrice - totalDiscount + shippingCharge
            return {
                totalCostPrice,
                totalDiscount,
                shippingCharge,
                checkout
            }
        } else {
            throw 'Cart not found'
        }
    } catch (err) {
        throw new Error(err);
    }
}
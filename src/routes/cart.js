const router = require('express').Router();
const {
    addCartValidation,
    checkParams
} = require('../validation');
const {
    create,
    get,
    deleteCart,
    getCartValue
} = require('../controllers/cartController')

router.post('/item', addCartValidation, create);
router.get('/items/:id', get);
router.delete('/items/:id', deleteCart);
router.get('/:id/checkout-value/:postal_code',checkParams, getCartValue);

module.exports = router;
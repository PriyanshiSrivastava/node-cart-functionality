const yup = require('yup');

const addCart = yup.object().shape({
    cartId: yup.number().optional(),
    products: yup.array()
        .of(
            yup.object().shape({
                productId: yup.number().min(100, "Minimum atleast 100 in product Id")
                    .max(119, "Allowed maximum is 119 in product Id").required(),
                quantity: yup.string().required()
            })
        ).required(),
})

module.exports.addCartValidation = async (req, res, next) => {
    try {
        await addCart.validate(req.body);
        next();
    } catch (e) {
        console.log(e)
        res.status(400).json({
            error: e.errors.join(', ')
        });
    }
}
const getCheckout = yup.object().shape({
    postal_code: yup.number().min(465535, "Minimum atleast 465535")
        .max(465545, "Allowed maximum is 465545").required()
})
module.exports.checkParams = async (req, res, next) => {
    try {
        await getCheckout.validate(req.params);
        next();
    } catch (e) {
        console.log(e)
        res.status(400).json({
            error: e.errors.join(', ')
        });
    }
}
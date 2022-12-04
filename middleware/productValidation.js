
const Joi = require('joi');

const productValidation = async (req, res, next) => {
    try {
        const payload = req.body
        await schema.validateAsync(payload)
        next()
    } catch (error) {
        console.log(error.details[0].message)
        return res.status(500).json({error : error.details[0].message})
    }
}

const schema = Joi.object({
    product_name: Joi.string()
        .pattern(new RegExp("^[A-Za-z0-9? ,_-]+$"))
        .required(),

    price: Joi.number()
        .required()
})

module.exports = productValidation
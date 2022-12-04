const Joi = require('joi');

const userValidation = async (req, res, next) => {
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
    username: Joi.string()
        .pattern(new RegExp("^[A-Za-z0-9? ,_-]+$"))
        .allow(null)
        .allow('')
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

module.exports = userValidation
import Joi from "joi";

const createPreferencesValidation = Joi.object({
    name: Joi.string().max(50).required(),
    photo: Joi.string().max(100).required(),
});

const updatePreferencesValidation = Joi.object({
    name: Joi.string().max(50).required(),
    photo: Joi.string().max(100).required(),
})

export {createPreferencesValidation, updatePreferencesValidation};

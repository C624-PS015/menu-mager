import Joi from "joi";

const createValidation = Joi.object({
  name: Joi.string().max(50).required(),
  photo: Joi.string().max(100).required(),
});

const updateValidation = Joi.object({
  name: Joi.string().max(50),
  photo: Joi.string().max(100),
}).or("name", "photo");

export { createValidation, updateValidation };

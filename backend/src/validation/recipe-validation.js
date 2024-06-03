import Joi from "joi";

const createValidation = Joi.object({
  name: Joi.string().max(100).required(),
  photo: Joi.string().max(100).required(),
  description: Joi.string().required(),
  allergy: Joi.array().items(
    Joi.object({
      name: Joi.string().max(100).required(),
    }),
  ),
  preferences: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().max(100).required(),
      }),
    )
    .required(),
});

const updateValidation = Joi.object({
  name: Joi.string().max(100),
  photo: Joi.string().max(100),
  description: Joi.string(),
  allergy: Joi.array().items(
    Joi.object({
      name: Joi.string().max(100).required(),
    }),
  ),
  preferences: Joi.array().items(
    Joi.object({
      name: Joi.string().max(100).required(),
    }),
  ),
}).or("name", "photo", "description", "allergy", "preferences");

export { createValidation, updateValidation };

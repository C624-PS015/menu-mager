import Joi from "joi";

const materialValidation = Joi.object({
  name: Joi.string().required().max(100),
  photo: Joi.string().required().max(100),
});

export default materialValidation;

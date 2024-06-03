import Joi from "joi";

const allergyValidation = Joi.object({
  name: Joi.string().required(),
});

export default allergyValidation;

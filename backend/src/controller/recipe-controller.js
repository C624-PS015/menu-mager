import recipeService from "../service/recipe-service.js";

const create = async (req, res, next) => {
  try {
    const result = await recipeService.create(req);
    res.status(201).send({
      status: "success",
      message: "recipe created successfully",
      data: {
        result,
      },
    });
  } catch (e) {
    next(e);
  }
};

export default { create };

import validate from "../validation/validation.js";
import { createValidation } from "../validation/recipe-validation.js";
import prismaClient from "../application/database.js";
import deleteFileHelper from "../helper/delete-file-helper.js";
import { ResponseError } from "../error/response-error.js";

const create = async (request) => {
  const payload = {
    name: request.body.name,
    description: request.body.description,
    photo: request.file.filename,
    allergy: JSON.parse(request.body.allergy),
    preferences: JSON.parse(request.body.preferences),
  };

  const recipe = validate(createValidation, payload);

  const countRecipe = await prismaClient.preferences.count({
    where: {
      name: recipe.name,
    },
  });

  recipe.photo = "/images/" + recipe.photo;

  if (countRecipe === 1) {
    await deleteFileHelper(recipe.photo);
    throw new ResponseError(409, "preferences already exists!");
  }

  return prismaClient.recipe.create({
    data: {
      name: recipe.name,
      description: recipe.description,
      photo: recipe.photo,
      recipe_allergy: {
        create: recipe.allergy.map((allergy) => {
          return {
            allergy: {
              connectOrCreate: {
                where: {
                  name: allergy.name,
                },
                create: {
                  name: allergy.name,
                },
              },
            },
          };
        }),
      },
      recipe_preferences: {
        create: recipe.preferences.map((preference) => {
          return {
            preferences: {
              connect: {
                name: preference.name,
              },
            },
          };
        }),
      },
    },
  });
};

const update = async (request) => {};

const remove = async (request) => {};

const getDetail = async (request) => {};

const getAll = async () => {};

export default { create };

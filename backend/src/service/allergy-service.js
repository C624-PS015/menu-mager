import validate from "../validation/validation.js";
import allergyValidation from "../validation/allergy-validation.js";
import prismaClient from "../application/database.js";
import { ResponseError } from "../error/response-error.js";

const isAllergyExist = async (param) => {
  return prismaClient.allergy.count({
    where: param,
  });
};

const create = async (request) => {
  const allergy = validate(allergyValidation, request.body);

  const countAllergy = await isAllergyExist({ name: allergy.name });

  if (countAllergy === 1) {
    throw new ResponseError(409, "allergy already exists!");
  }

  return prismaClient.allergy.create({
    data: {
      name: allergy.name,
    },
    select: {
      id: true,
      name: true,
    },
  });
};

const update = async (request) => {
  const id = request.params.id;
  const allergy = validate(allergyValidation, request.body);

  const countAllergy = await isAllergyExist({ id: id });

  if (countAllergy === 0) {
    throw new ResponseError(404, "allergy not found!");
  }

  return prismaClient.allergy.update({
    where: {
      id: id,
    },
    data: {
      name: allergy.name,
    },
    select: {
      id: true,
      name: true,
    },
  });
};

const remove = async (request) => {
  const id = request.params.id;

  const countAllergy = await isAllergyExist({ id: id });

  if (countAllergy === 0) {
    throw new ResponseError(404, "allergy not found!");
  }

  return prismaClient.allergy.delete({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
    },
  });
};

const getDetail = async (request) => {
  const id = request.params.id;

  const countAllergy = await isAllergyExist({ id: id });

  if (countAllergy === 0) {
    throw new ResponseError(404, "allergy not found!");
  }

  return prismaClient.allergy.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      recipe_allergy: {
        include: {
          recipe: true,
        },
      },
    },
  });
};

const getAll = async () => {
  return prismaClient.allergy.findMany({
    select: {
      id: true,
      name: true,
    },
  });
};

export default { create, update, remove, getDetail, getAll };

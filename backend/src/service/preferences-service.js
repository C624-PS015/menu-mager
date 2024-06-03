import validate from "../validation/validation.js";
import {
  createValidation,
  updateValidation,
} from "../validation/preferences-validation.js";
import prismaClient from "../application/database.js";
import deleteFileHelper from "../helper/delete-file-helper.js";
import { ResponseError } from "../error/response-error.js";

const isPreferencesExist = async (param) => {
  return prismaClient.preferences.count({
    where: param,
  });
};

const create = async (request) => {
  const payload = {
    name: request.body.name,
    photo: request.file.filename,
  };

  const preferences = validate(createValidation, payload);

  const countPreferences = await isPreferencesExist({ name: preferences.name });

  preferences.photo = "/images/" + preferences.photo;

  if (countPreferences === 1) {
    await deleteFileHelper(preferences.photo);
    throw new ResponseError(409, "preferences already exists!");
  }

  return prismaClient.preferences.create({
    data: {
      name: preferences.name,
      photo: preferences.photo,
    },
    select: {
      id: true,
      name: true,
      photo: true,
    },
  });
};

const update = async (request) => {
  const id = request.params.id;
  const payload = {
    name: request.body.name,
    photo: request.file.filename,
  };

  const preferences = validate(updateValidation, payload);

  const findPreferences = await prismaClient.preferences.findUnique({
    where: {
      id: id,
    },
    select: {
      photo: true,
    },
  });

  if (!findPreferences) {
    throw new ResponseError(404, "preferences not found!");
  }

  if (preferences.photo) {
    preferences.photo = "/images/" + preferences.photo;
    await deleteFileHelper(findPreferences.photo);
  }

  return prismaClient.preferences.update({
    where: {
      id: id,
    },
    data: {
      ...preferences,
    },
    select: {
      id: true,
      name: true,
      photo: true,
    },
  });
};

const remove = async (request) => {
  const id = request.params.id;

  const countPreferences = await isPreferencesExist({ id: id });

  if (countPreferences === 0) {
    throw new ResponseError(404, "preferences not found!");
  }

  return prismaClient.preferences.delete({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      photo: true,
    },
  });
};

const getDetail = async (request) => {
  const id = request.params.id;

  const countPreferences = await isPreferencesExist({ id: id });

  if (countPreferences === 0) {
    throw new ResponseError(404, "preferences not found!");
  }

  return prismaClient.preferences.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      photo: true,
      recipe_preferences: {
        include: {
          recipe: true,
        },
      },
    },
  });
};

const getAll = async () => {
  return prismaClient.preferences.findMany({
    select: {
      id: true,
      name: true,
      photo: true,
    },
  });
};

export default { create, update, remove, getDetail, getAll };

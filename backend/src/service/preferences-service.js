import validate from "../validation/validation.js";
import {
  createPreferencesValidation,
  updatePreferencesValidation,
} from "../validation/preferences-validation.js";
import prismaClient from "../application/database.js";
import deleteFileHelper from "../helper/delete-file-helper.js";
import { ResponseError } from "../error/response-error.js";

const create = async (request) => {
  const payload = {
    name: request.body.name,
    photo: request.file.filename,
  };
  const preferences = validate(createPreferencesValidation, payload);
  const photo = "/images" + "/" + preferences.photo;

  const countPreferences = await prismaClient.preferences.count({
    where: {
      name: preferences.name,
    },
  });

  if (countPreferences === 1) {
    await deleteFileHelper(photo);
    throw new ResponseError(409, "preferences name already exists!");
  }

  return prismaClient.preferences.create({
    data: {
      name: preferences.name,
      photo: photo,
    },
    select: {
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
  const preferences = validate(updatePreferencesValidation, payload);
  const photo = "/images" + "/" + preferences.photo;

  const countPreferences = await prismaClient.preferences.count({
    where: {
      id: id,
    },
  });

  if (countPreferences === 0) {
    throw new ResponseError(404, "no preferences found!");
  }

  return prismaClient.preferences.update({
    where: {
      id: id,
    },
    data: {
      name: preferences.name,
      photo: photo,
    },
    select: {
      name: true,
      photo: true,
    },
  });
};

const remove = async (request) => {
  const id = request.params.id;

  const countPreferences = await prismaClient.preferences.count({
    where: {
      id: id,
    },
  });

  if (countPreferences === 0) {
    throw new ResponseError(404, "no preferences found!");
  }

  return prismaClient.preferences.delete({
    where: {
      id: id,
    },
    select: {
      name: true,
      photo: true,
    },
  });
};

const getDetail = async (request) => {
  const id = request.params.id;

  const countPreferences = await prismaClient.preferences.count({
    where: {
      id: id,
    },
  });

  if (countPreferences === 0) {
    throw new ResponseError(404, "no preferences found!");
  }

  return prismaClient.preferences.findUnique({
    where: {
      id: id,
    },
    select: {
      name: true,
      photo: true,
    },
  });
};

const getAll = async (request) => {
  return prismaClient.preferences.findMany({});
};

export default { create, update, remove, getDetail, getAll };

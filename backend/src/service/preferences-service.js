import validate from "../validation/validation.js";
import { createPreferencesValidation } from "../validation/preferences-validation.js";
import prismaClient from "../application/database.js";
import deleteFileHelper from "../helper/delete-file-helper.js";

const create = async (request) => {
  const preferences = validate(createPreferencesValidation, request);

  const countPreferences = await prismaClient.preferences.count({
    where: {
      name: preferences.name,
    },
  });

  if (countPreferences === 1) {
    await deleteFileHelper(preferences.photo);
  }

  return prismaClient.preferences.create({
    data: {
      name: preferences.name,
      photo: preferences.photo,
    },
    select: {
      name: true,
      photo: true,
    },
  });
};

export default { create };

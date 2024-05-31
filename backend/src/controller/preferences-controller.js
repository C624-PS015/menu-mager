import preferencesService from "../service/preferences-service.js";

const create = async (req, res, next) => {
  try {
    const request = {
      name: req.body.name,
      photo: req.file.filename,
    };
    const result = await preferencesService.create(request);
    res.status(200).json({
      result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  create,
};

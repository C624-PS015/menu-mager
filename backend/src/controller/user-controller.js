import userService from "../service/user-service.js";

const register = async (req, res, next) => {
  try {
    const result = await userService.create(req);
    res.status(201).json({
      status: "success",
      message: "success create user!",
      data: {
        ...result,
      },
    });
  } catch (err) {
    next(err);
  }
};

export default {
  register,
};

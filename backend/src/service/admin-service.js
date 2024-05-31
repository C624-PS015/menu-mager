import validate from "../validation/validation.js";
import { loginValidation } from "../validation/admin-validation.js";
import prismaClient from "../application/database.js";
import bcrypt from "bcrypt";
import { ResponseError } from "../error/response-error.js";

const login = async (request) => {
  const loginRequest = validate(loginValidation, request);

  const admin = await prismaClient.user.findUnique({
    where: {
      email: loginRequest.email,
    },
    select: {
      email: true,
      password: true,
      role: true,
    },
  });

  if (!admin) {
    throw new ResponseError(401, "Email or password is incorrect!");
  }

  const isPasswordValid = await bcrypt.compare(
    loginRequest.password,
    admin.password,
  );

  if (!isPasswordValid) {
    throw new ResponseError(401, "Email or password is incorrect!");
  }

  if (admin.role !== "admin") {
    throw new ResponseError(401, "Access denied. Admins only!");
  }

  const token = crypto.randomUUID();

  return prismaClient.user.update({
    where: {
      email: admin.email,
    },
    data: {
      token: token,
    },
    select: {
      token: true,
    },
  });
};

export default {
  login,
};

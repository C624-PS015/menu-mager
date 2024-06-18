import validate from "../validation/validation.js";
import userValidation from "../validation/user-validation.js";
import prismaClient from "../application/database.js";
import ResponseError from "../error/response-error.js";
import bcrypt from "bcrypt";

const create = async (request) => {
  const { user, subscriptionDetail, subscriptionDelivery, address } = validate(
    userValidation.create,
    request.body,
  );

  console.log(user);

  const isUserExist = await prismaClient.user.findUnique({
    where: {
      email: user.email,
    },
  });

  if (isUserExist) {
    throw new ResponseError("409", "user already exists!");
  }

  user.password = await bcrypt.hash(user.password, 10);
  const formatName = user.name.replace(" ", "+");
  user.avatar = `https://ui-avatars.com/api/?name=${formatName}`;

  return prismaClient.user.create({
    data: {
      ...user,
      address: {
        create: {
          province: address.province,
          district: address.district,
          sub_district: address.subDistrict,
          post_code: address.postCode,
          village: address.village,
          rt: address.rt,
          rw: address.rw,
          detail_address: address.detailAddress ?? "",
        },
      },
      subscription: {
        create: {
          subscription_detail: {
            create: {
              num_of_people: subscriptionDetail.numOfPeople,
              meals_per_week: subscriptionDetail.mealsPerWeek,
              total_serving: subscriptionDetail.totalServing,
              box_price: subscriptionDetail.boxPrice,
              price_per_serving: subscriptionDetail.pricePerServing,
              shipping_price: subscriptionDetail.shippingPrice,
              total_price: subscriptionDetail.totalPrice,
              subscription_preferences: {
                create: subscriptionDetail.preferences.map((preference) => {
                  return {
                    preferences: {
                      connect: {
                        name: preference.name,
                      },
                    },
                  };
                }),
              },
              subscription_delivery: {
                create: subscriptionDelivery.map((delivery) => {
                  return {
                    date: delivery.date,
                    total_recipe: delivery.totalRecipe,
                    subscription_delivery_recipe: {
                      create: delivery.recipe.map((recipe) => {
                        return {
                          amount: recipe.amount,
                          recipe: {
                            connect: {
                              name: recipe.name,
                            },
                          },
                        };
                      }),
                    },
                  };
                }),
              },
            },
          },
        },
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      subscription: {
        select: {
          is_pay: true,
          is_active: true,
          subscription_detail: {
            select: {
              num_of_people: true,
              meals_per_week: true,
              total_serving: true,
              box_price: true,
              price_per_serving: true,
              shipping_price: true,
              total_price: true,
              subscription_preferences: {
                select: {
                  preferences: {
                    select: {
                      name: true,
                      photo: true,
                    },
                  },
                },
              },
              subscription_delivery: {
                select: {
                  date: true,
                  status: true,
                  total_recipe: true,
                  subscription_delivery_recipe: {
                    select: {
                      amount: true,
                      recipe: {
                        select: {
                          name: true,
                          photo: true,
                          recipe_material: {
                            select: {
                              material: {
                                select: {
                                  name: true,
                                  photo: true,
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
};

export default {
  create,
};

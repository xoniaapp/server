import db from "../../utils/db";

const createUser = async (body: IUserBody) => {
  return await db.account.create({
    data: {
      username: body.username,
      image_url: body.image_url,
      suffix: body.suffix,
      email: body.email,
      password: body.password,
    },
  });
};

const getUserById = async (id: string) => {
  return await db.account.findUnique({
    where: {
      id: id,
    },
  });
};

const getUserByEmail = async (email: string) => {
  return await db.account.findUnique({
    where: {
      email: email,
    },
  });
};

export default { createUser, getUserById, getUserByEmail };

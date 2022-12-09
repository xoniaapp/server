import db from "../../utils/db";
import hash from "../../utils/hash"

const createUser = async (body: IUserBody) => {
  const hashedPassword = await hash(body.password);
  return await db.account.create({
    data: {
      username: body.username,
      image_url: body.image_url,
      suffix: body.suffix,
      email: body.email,
      password: await hashedPassword,
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

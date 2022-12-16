import db from "../../utils/db";
import { hash } from "../../utils/hash";
import { createHash } from "node:crypto";

const createUser = async (body: any) => {
  const hashedPassword = await hash(body.password);
  return await db.account.create({
    data: {
      username: body.username,
      image_url: `https://avatars.dicebear.com/api/identicon/${createHash(
        "sha512"
      )
        .update(body.email)
        .digest("hex")}.png`,
      suffix: body.suffix,
      email: body.email,
      password: hashedPassword,
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

const findSuffix = async (username: string) => {
  return await db.account.findFirst({
    where: {
      username: username,
    },
  });
};

export { createUser, getUserById, getUserByEmail, findSuffix };

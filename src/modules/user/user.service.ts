import db from "../../utils/db";
import { hash } from "../../utils/argon2";

const createUser = async (body: any) => {
  const hashedPassword = await hash(body.password);
  return await db.users.create({
    data: {
      id: body.id,
      bot: body.bot,
      system: body.system,
      avatar: body.avatar,
      avatarUrl: body.avatarUrl,
      discriminator: body.discriminator,
      tag: body.tag,
      username: body.username,
      email: body.email,
      password: hashedPassword,
      image: body.image,
      status: body.status,
      badges: body.badges,
      flags: body.flags,
      online: true,
    },
  });
};

const getUserById = async (id: string) => {
  return await db.users.findUnique({
    where: {
      id: id,
    },
  });
};

const getUserByEmail = async (email: string) => {
  return await db.users.findUnique({
    where: {
      email: email,
    },
  });
};

const getUserByTag = async (tag: string) => {
  return await db.users.findFirst({
    where: {
      tag: tag,
    },
  });
};

export { createUser, getUserById, getUserByEmail, getUserByTag };
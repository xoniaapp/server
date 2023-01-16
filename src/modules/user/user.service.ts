import db from "../../utils/db";
import { hash } from "../../utils/argon2";
import { ICreateUser } from "../../types/user";

const createUser = async (body: ICreateUser) => {
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
      online: body.online,
    },
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      bot: true,
      system: true,
      avatar: true,
      avatarUrl: true,
      discriminator: true,
      tag: true,
      username: true,
      email: true,
      verified: true,
      password: false,
      image: true,
      status: true,
      badges: true,
      flags: true,
      online: true,
      bans: true,
      friend_requests_friend_requests_receiver_idTousers: false,
      friend_requests_friend_requests_sender_idTousers: false,
      friends_friends_friend_idTousers: false,
      friends_friends_user_idTousers: false,
      messages: false,
    },
  });
};

const getUserById = async (id: string) => {
  return await db.users.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      bot: true,
      system: true,
      avatar: true,
      avatarUrl: true,
      discriminator: true,
      tag: true,
      username: true,
      email: true,
      verified: true,
      password: true,
      image: true,
      status: true,
      badges: true,
      flags: true,
      online: true,
      bans: true,
      friend_requests_friend_requests_receiver_idTousers: false,
      friend_requests_friend_requests_sender_idTousers: false,
      friends_friends_friend_idTousers: false,
      friends_friends_user_idTousers: false,
      messages: false,
    },
  });
};

const getUserByEmail = async (email: string) => {
  return await db.users.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      bot: true,
      system: true,
      avatar: true,
      avatarUrl: true,
      discriminator: true,
      tag: true,
      username: true,
      email: true,
      verified: true,
      password: true,
      image: true,
      status: true,
      badges: true,
      flags: true,
      online: true,
      bans: true,
      friend_requests_friend_requests_receiver_idTousers: false,
      friend_requests_friend_requests_sender_idTousers: false,
      friends_friends_friend_idTousers: false,
      friends_friends_user_idTousers: false,
      messages: false,
    },
  });
};

const getUserByTag = async (tag: string) => {
  return await db.users.findUnique({
    where: {
      tag: tag,
    },
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      bot: true,
      system: true,
      avatar: true,
      avatarUrl: true,
      discriminator: true,
      tag: true,
      username: true,
      email: true,
      verified: true,
      password: true,
      image: true,
      status: true,
      badges: true,
      flags: true,
      online: true,
      bans: true,
      friend_requests_friend_requests_receiver_idTousers: false,
      friend_requests_friend_requests_sender_idTousers: false,
      friends_friends_friend_idTousers: false,
      friends_friends_user_idTousers: false,
      messages: false,
    },
  });
};

export { createUser, getUserById, getUserByEmail, getUserByTag };

import { FastifyRequest, FastifyReply } from "fastify";
import { getUserByEmail, createUser, deleteUserById } from "./user.service";
import { verify } from "../../utils/argon2";
import crypto from "crypto";
import { AVATAR_CONTENT_URL } from "../../config/config";
import db from "../../utils/db";
import { Generate } from "../../utils/id";

interface ISignUpRequest {
  username: string;
  email: string;
  password: string;
}

interface ISignInRequest {
  email: string;
  password: string;
}

const signUp = async (
  request: FastifyRequest<{ Body: ISignUpRequest }>,
  reply: FastifyReply
): Promise<void> => {
  const { username, email, password } = request.body;
  const discriminator = (Math.floor(Math.random() * 10000) + 10000)
    .toString()
    .substring(1);
  const tag = `${username}#${discriminator}`;
  const avatarHash = crypto
    .createHash("md5")
    .update(email)
    .digest("hex")
    .toString();
  const id = new Generate();

  if (await getUserByEmail(email)) {
    reply.status(409).send({
      message: "This email has already been used",
      error: "Conflict",
      statusCode: 409,
    });

    return;
  }

  if (
    await db.users.findFirst({
      where: {
        tag: tag,
      },
      select: {
        tag: true,
      },
    })
  ) {
    reply.status(409).send({
      message: "This tag has already been used",
      error: "Conflict",
      statusCode: 409,
    });

    return;
  }

  const data = await createUser({
    id: id.snowflake(),
    bot: false,
    system: false,
    avatar: avatarHash,
    avatarUrl: `${AVATAR_CONTENT_URL}5.x/identicon/png?seed=${avatarHash}`,
    discriminator: discriminator,
    tag: tag,
    username: username,
    email: email,
    password: password,
    image: "",
    status: "Online",
    badges: ["EarlyAdopter"],
    flags: "Nothing",
    online: true,
  });

  reply.status(201).send({
    message: "Created",
    data: data,
    statusCode: 201,
  });
};

const signIn = async (
  request: FastifyRequest<{ Body: ISignInRequest }>,
  reply: FastifyReply
): Promise<void> => {
  const { email, password } = request.body;
  const account = await getUserByEmail(email);

  if (!account) {
    reply.status(404).send({
      message: "Account was not found",
      error: "Not Found",
      statusCode: 404,
    });

    return;
  }

  if (!(await verify(password, account.password))) {
    reply.status(401).send({
      message: "Password is not correct",
      error: "Unauthorized",
      statusCode: 401,
    });

    return;
  }

  reply.status(200).send({
    id: account.id,
    createdAt: account.createdAt,
    updatedAt: account.updatedAt,
    bot: account.bot,
    system: account.system,
    avatar: account.avatar,
    avatarUrl: account.avatarUrl,
    discriminator: account.discriminator,
    tag: account.tag,
    username: account.username,
    email: account.email,
    verified: account.verified,
    image: account.image,
    status: account.status,
    badges: account.badges,
    flags: account.flags,
    online: account.online,
    bans: account.bans,
  });
};

const getUser = async (
  request: FastifyRequest<{ Body: ISignInRequest }>,
  reply: FastifyReply
): Promise<void> => {};

const updateUser = async (
  request: FastifyRequest<{ Body: ISignInRequest }>,
  reply: FastifyReply
): Promise<void> => {};

const deleteUser = async (
  request: FastifyRequest<{ Body: ISignInRequest }>,
  reply: FastifyReply
): Promise<void> => {
  // TODO: Implement JWT auth

  reply.status(200).send({
    statusCode: 200,
    data: await deleteUserById(""),
    message: "Success",
  });
};

export { signUp, signIn, deleteUser };

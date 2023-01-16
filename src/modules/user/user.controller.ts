import { FastifyRequest, FastifyReply } from "fastify";
import { getUserByEmail } from "./user.service";
import { verify } from "../../utils/argon2";

interface ISignUpRequest {
  username: string;
  suffix: number;
  email: string;
  password: string;
}

const signUp = async (
  request: FastifyRequest<{ Body: ISignUpRequest }>,
  reply: FastifyReply
): Promise<void> => {
  reply.status(409).send({
    message: "This email has already been used",
    error: "Conflict",
    statusCode: 409,
  });
};

interface ISignInRequest {
  email: string;
  password: string;
}

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

  reply.status(200).send(account);
};

export { signUp, signIn };
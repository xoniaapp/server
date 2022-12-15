import { FastifyRequest, FastifyReply } from "fastify";

import { createUser, getUserByEmail, findSuffix } from "./auth.service"

interface ISignUpRequest {
  username: string,
  suffix: number,
  email: string,
  password: string,
}

const signUp = async (
  request: FastifyRequest<{ Body: ISignUpRequest }>,
  reply: FastifyReply
): Promise<void> => {
  const { username, suffix, email, password } = request.body;
  console.log(request.body);

  const data = await getUserByEmail(email);

  if (!data) {
    const suffixExists = await findSuffix(username);

    if (suffixExists?.suffix === suffix) {
      reply.status(409).send({
        message: "This suffix has already been used",
        error: "Conflict",
        statusCode: 409
      })

      return;
    }

    const user = await createUser({
      username: username,
      suffix: suffix,
      email: email,
      password: password,
    })

    reply.status(201).send({
      message: "Created",
      payload: user,
      statusCode: 201
    })

    return;
  }

  reply.status(409).send({
    message: "This email has already been used",
    error: "Conflict",
    statusCode: 409
  })
};

interface ISignInRequest {
  email: string,
  password: string,
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
      statusCode: 404
    });
  };

  if (account?.password !== password) {
    reply.status(401).send({
      message: "Password is not correct",
      error: "Unauthorized",
      statusCode: 401
    });
  }
};


export { signUp, signIn };

import { FastifyRequest, FastifyReply } from "fastify";

import { createUser, getUserByEmail } from "./auth.service"

interface ISignUpResponse {
  username: string,
  suffix: number,
  email: string,
  password: string,
}

const signUp = async (
  request: FastifyRequest<{ Body: ISignUpResponse }>,
  reply: FastifyReply
): Promise<void> => {
  const { username, suffix, email, password } = request.body;
  const data = await getUserByEmail(email);

  if (data) {
    reply.status(409).send({
      message: "This email has already been used",
      error: "Conflict",
      statusCode: 409
    })

    return;
  }

  // @ts-ignore
  if (data.username === username) {
    reply.status(409).send({
      message: "This username has already been used",
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
};

interface ISignInResponse {
  username: string,
  password: string,
}

const signIn = async (
  request: FastifyRequest<{ Body: ISignInResponse }>,
  reply: FastifyReply
): Promise<void> => {
  const { username, password } = request.body;
};


export { signUp, signIn };

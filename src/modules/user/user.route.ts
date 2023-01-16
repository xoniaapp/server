import { FastifyInstance } from "fastify";

import { SIGNUP_SCHEMA, SIGNIN_SCHEMA } from "./user.schema";
import { signIn, signUp } from "./user.controller";

export default async function userRoute(router: FastifyInstance) {
  router.route({
    method: "POST",
    url: "/auth/signup",
    schema: SIGNUP_SCHEMA,
    handler: signUp,
  });

  router.route({
    method: "POST",
    url: "/auth/signin",
    schema: SIGNIN_SCHEMA,
    handler: signIn,
  });
}
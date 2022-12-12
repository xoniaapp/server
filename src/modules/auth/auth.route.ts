import { FastifyInstance } from "fastify";

import { SINGUP_SCHEMA, LOGIN_SCHEMA } from "./auth.schema";
import { signIn, signUp } from "./auth.controller"

export default async function authRoute(router: FastifyInstance) {
  router.route({
    method: "POST",
    url: "/signup",
    handler: signUp,
  });

  router.route({
    method: "POST",
    url: "/signin",
    handler: signIn,
  });
}

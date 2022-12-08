import { FastifyInstance } from "fastify";
import {
    ZodTypeProvider,
} from 'fastify-type-provider-zod';

import SINGUP_SCHEMA from "./auth.schema"
import signUp from "./auth.controller"

export default async function authRoute(router: FastifyInstance) {
    router.withTypeProvider<ZodTypeProvider>().route({
        method: 'GET',
        url: '/signup',
        schema: { body: SINGUP_SCHEMA },
        handler: (req, res) => {
            res.send("Hello, World!")
        },
    });
}

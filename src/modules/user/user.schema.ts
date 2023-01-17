import { createYupSchema } from "fastify-yup-schema";

const SIGNUP_SCHEMA = createYupSchema((yup) => ({
  body: yup.object({
    username: yup.string().max(32).min(2).required(),
    email: yup.string().email().trim().required(),
    password: yup.string().max(64).min(6).required(),
  }),
}));

const SIGNIN_SCHEMA = createYupSchema((yup) => ({
  body: yup.object({
    email: yup.string().email().trim().required(),
    password: yup.string().max(64).min(6).required(),
  }),
}));

export { SIGNUP_SCHEMA, SIGNIN_SCHEMA };

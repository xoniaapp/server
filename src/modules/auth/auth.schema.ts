import { z } from "zod";

const SINGUP_SCHEMA = z.object({
  username: z.string().max(32),
  suffix: z.number().max(4).min(4),
  email: z.string().email().trim(),
  password: z.string().max(32).min(8),
}).strict();

const LOGIN_SCHEMA = z.object({
  email: z.string().max(32),
  password: z.string().max(32).min(8)
}).strict()

export { SINGUP_SCHEMA, LOGIN_SCHEMA };
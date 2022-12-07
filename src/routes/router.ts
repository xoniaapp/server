import { FastifyInstance } from "fastify";

import SocketGateway from "../socket/gateway";
import health from "./health";

export default async function router(fastify: FastifyInstance) {
  // Socket Gateway
  fastify.register(SocketGateway, { prefix: "/ws" });
  fastify.register(health, { prefix: "/health" });
}

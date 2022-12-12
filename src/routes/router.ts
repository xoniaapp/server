import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

import SocketGateway from "../socket/socket.gateway";
import authRoute from "../modules/auth/auth.route";

export default async function router(fastify: FastifyInstance) {
  // Socket Gateway
  fastify.register(SocketGateway, { prefix: "/ws" });
  fastify.register(authRoute, { prefix: "/auth" })

  // Health Route
  fastify.get("/health", (request: FastifyRequest, reply: FastifyReply) => {
    reply.status(200).send({
      statusCode: 200,
      message: "Success",
      payload: {
        status: "healthy",
        uptime: process.uptime(),
        timestamp: Date.now(),
        environment: process.env.NODE_ENV,
        build_sha: process.env.COMMIT_SHA,
      },
    });
  });
}

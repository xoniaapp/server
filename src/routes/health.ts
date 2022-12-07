import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

const health = (fastify: FastifyInstance) => {
  fastify.get("/", (request: FastifyRequest, reply: FastifyReply) => {
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
};

export default health;

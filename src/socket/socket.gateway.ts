import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

const SocketGateway = async (fastify: FastifyInstance) => {
  fastify.route({
    method: "GET",
    url: "/",
    handler: (req: FastifyRequest, reply: FastifyReply) => {
      reply.status(500).send({ error: "Requires a websocket connection" });
    },
    wsHandler: (connection, req) => {
  try {
    connection.socket.on("message", (data: any) => {
      connection.socket.send(
        JSON.stringify({
          message: "Connected to Websocket!",
        })
      );
    });
  } catch (e) {
    console.log(e);
    
  }
    },
  });
};

export default SocketGateway;

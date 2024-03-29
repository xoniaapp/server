import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { SocketService } from "./socket.service";

const SocketGateway = async (fastify: FastifyInstance) => {
  fastify.route({
    method: "GET",
    handler: (req: FastifyRequest, reply: FastifyReply) => {
      reply.status(500).send({ error: "Requires a websocket connection" });
    },
    url: "/",
    wsHandler: (connection, req) => {
      // if (req.headers.token != user.token) {
      //   connection.socket.send(JSON.stringify({ error: "Authentication token is not valid", }))
      //   connection.socket.terminate()
      // }

      try {
        const socket = new SocketService("token");
        connection.socket.send(
          JSON.stringify({ type: "WebSocket", connected: true })
        );

        connection.socket.on("message", async (data: any) => {
          const payload = JSON.parse(data);

          if (payload.type) {
            if ("") {
              return;
            }

            return;
          }

          connection.socket.send(
            JSON.stringify({ error: "Event type was not included" })
          );

          return;
        });

        connection.socket.on("close", () => {
          connection.socket.send(JSON.stringify({ terminated: true }));
        });
      } catch (error) {
        connection.socket.on("close", () => {
          connection.socket.send(JSON.stringify({ error: true }));
        });
      }
    },
  });
};

export default SocketGateway;

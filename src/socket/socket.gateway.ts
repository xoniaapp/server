import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

import { get_message, get_messages, send_message, edit_message, delete_message } from "./socket.service"

const SocketGateway = async (fastify: FastifyInstance) => {
  fastify.route({
    method: "GET",
    url: "/",
    handler: (req: FastifyRequest, reply: FastifyReply) => {
      reply.status(500).send({ error: "Requires a websocket connection" });
    },
    wsHandler: (connection, req) => {
      // if (req.headers.token != user.token) {
      //   connection.socket.send(JSON.stringify({ error: "Authentication token is not valid", }))
      //   connection.socket.terminate()
      // }

      try {
        connection.socket.send(
          JSON.stringify({ type: "WebSocket", connected: true })
        );

        connection.socket.on("message", async (data: any) => {
          const payload = JSON.parse(data);

          if (payload.type) {
            if (payload.type === "get_messages") {
              connection.socket.send(JSON.stringify({}));
              return;
            }

            if (payload.type === "get_message") {
              connection.socket.send(JSON.stringify({}));
              return;
            }

            if (payload.type === "send_message") {
              connection.socket.send(JSON.stringify({}));
              return;
            }

            if (payload.type === "delete_message") {
              connection.socket.send(JSON.stringify({}));
              return;
            }

            if (payload.type === "edit_message") {
              connection.socket.send(JSON.stringify({}));
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

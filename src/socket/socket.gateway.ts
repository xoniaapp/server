import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

import {
  get_message,
  get_messages,
  send_message,
  edit_message,
  delete_message,
} from "./socket.service";

const SocketGateway = async (fastify: FastifyInstance) => {
  fastify.route({
    method: "GET",
    handler: (req: FastifyRequest, reply: FastifyReply) => {
      reply.status(500).send({error: "Requires a websocket connection"});
    },
    url: "/",
    wsHandler: (connection, req) => {
      // if (req.headers.token != user.token) {
      //   connection.socket.send(JSON.stringify({ error: "Authentication token is not valid", }))
      //   connection.socket.terminate()
      // }

      try {
        connection.socket.send(
            JSON.stringify({type: "WebSocket", connected: true})
        );

        connection.socket.on("message", async (data: any) => {
          const payload = JSON.parse(data);

          if (payload.type) {
            if (payload.type === "get_messages") {
              const messages = await get_messages(payload.data.channelId);
              connection.socket.send(JSON.stringify(messages));

              return;
            }

            if (payload.type === "get_message") {
              const message = await get_message(payload.data.messageId);
              connection.socket.send(JSON.stringify(message));

              return;
            }

            if (payload.type === "send_message") {
              const message = await send_message({
                text: payload.data.text,
                attachment: payload.data.attachment,
                reaction: payload.data.reaction,
                authorId: payload.data.authorId,
                channelId: payload.data.channelId,
                guildId: payload.data.guildId,
                groupId: payload.data.groupId,
              });

              connection.socket.send(JSON.stringify(payload.data));
              return;
            }

            if (payload.type === "delete_message") {
              const message = await delete_message(payload.data.id);

              connection.socket.send(JSON.stringify(message));

              return;
            }

            if (payload.type === "edit_message") {
              const message = await edit_message(
                  {
                    text: payload.data.text,
                    attachment: payload.data.attachment,
                    reaction: payload.data.reaction,
                  },
                  payload.data.id
              );

              connection.socket.send(JSON.stringify(message));
              return;
            }

            return;
          }

          connection.socket.send(
              JSON.stringify({error: "Event type was not included"})
          );

          return;
        });

        connection.socket.on("close", () => {
          connection.socket.send(JSON.stringify({terminated: true}));
        });
      } catch (error) {
        connection.socket.on("close", () => {
          connection.socket.send(JSON.stringify({error: true}));
        });
      }
    },
  });
};

export default SocketGateway;

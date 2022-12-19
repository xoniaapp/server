import { FastifyInstance } from "fastify";

import { createChannel, deleteChannel, getChannel, getChannels, updateChannel } from "./channel.controller"

export default async function channelRoute(router: FastifyInstance) {
  router.route({
    method: "GET",
    url: "/",
    handler: getChannels,
  });

  router.route({
    method: "GET",
    url: "/:id",
    handler: getChannel,
  });

  router.route({
    method: "POST",
    url: "/",
    handler: createChannel,
  });

  router.route({
    method: "PUT",
    url: "/:id",
    handler: updateChannel,
  });

  router.route({
    method: "DELETE",
    url: "/:id",
    handler: deleteChannel,
  });
}

import { FastifyInstance } from "fastify";

import {
  createChannel,
  deleteChannel,
  getChannel,
  getChannels,
  updateChannel,
} from "./channel.controller";
import {
  GET_SCHEMA,
  CREATE_CHANNEL_SCHEMA,
  DELETE_CHANNEL_SCHEMA,
  UPDATE_CHANNEL_SCHEMA,
} from "./channel.schema";

export default async function channelRoute(router: FastifyInstance) {
  router.route({
    method: "GET",
    url: "/",
    handler: getChannels,
  });

  router.route({
    method: "GET",
    url: "/:id",
    schema: GET_SCHEMA,
    handler: getChannel,
  });

  router.route({
    method: "POST",
    url: "/",
    schema: CREATE_CHANNEL_SCHEMA,
    handler: createChannel,
  });

  router.route({
    method: "PUT",
    url: "/:id",
    schema: UPDATE_CHANNEL_SCHEMA,
    handler: updateChannel,
  });

  router.route({
    method: "DELETE",
    url: "/:id",
    schema: DELETE_CHANNEL_SCHEMA,
    handler: deleteChannel,
  });
}

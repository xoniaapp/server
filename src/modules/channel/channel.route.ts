import { FastifyInstance } from "fastify";

export default async function channelRoute(router: FastifyInstance) {
  router.route({
    method: "GET",
    url: "/:id",
    handler: () => {},
  });

  router.route({
    method: "PUT",
    url: "/:id",
    handler: () => {},
  });

  router.route({
    method: "DELETE",
    url: "/:id",
    handler: () => {},
  });

  router.route({
    method: "POST",
    url: "/",
    handler: () => {},
  });
}

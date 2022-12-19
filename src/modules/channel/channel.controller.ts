import { FastifyRequest, FastifyReply } from "fastify";

const getChannels = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  reply.status(200).send(request.body);
};

const getChannel = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  reply.status(200).send(request.body);
};

const updateChannel = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  reply.status(200).send(request.body);
};

const createChannel = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  reply.status(200).send(request.body);
};

const deleteChannel = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  reply.status(200).send(request.body);
};

export { createChannel, deleteChannel, getChannel, getChannels, updateChannel };

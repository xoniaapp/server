import { FastifyRequest, FastifyReply } from "fastify"

const signUp = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    reply.status(200).send(request.body)
};

const signIn = (request: FastifyRequest, reply: FastifyReply) => {
    reply.status(200).send(request.body)
};

export default { signUp, signIn }
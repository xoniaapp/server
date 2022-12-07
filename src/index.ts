import fastify, { FastifyInstance, FastifyRequest } from "fastify";
import cors from "@fastify/cors"
import helmet from "@fastify/helmet"
import * as dotenv from "dotenv";
import log from "./utils/log"

dotenv.config();

const app: FastifyInstance = fastify({
    logger: true,
});

app.register(cors, {
    origin: process.env.ORIGIN || "*",
});
app.register(helmet)

app.get("/health", (request, reply) => {
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

const start = async (port: number) => {
    try {
        app.listen({ port: port, host: "0.0.0.0" }, () => {
            log.info(`Listening on http://localhost:${port}`);
        });
    } catch (error) {
        process.exit(1);
    }
};

start(Number(process.env.PORT) || 8080);
import { createYupSchema } from "fastify-yup-schema";

const CREATE_CHANNEL_SCHEMA = createYupSchema((yup) => ({
    body: {},
}));

const DELETE_CHANNEL_SCHEMA = createYupSchema((yup) => ({
    body: {},
}));

const UPDATE_CHANNEL_SCHEMA = createYupSchema((yup) => ({
    body: {},
}));

const GET_SCHEMA = createYupSchema((yup) => ({
    body: {},
}));

export {
    GET_SCHEMA,
    CREATE_CHANNEL_SCHEMA,
    DELETE_CHANNEL_SCHEMA,
    UPDATE_CHANNEL_SCHEMA
};
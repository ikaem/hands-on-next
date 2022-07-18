import fastify from "fastify";
import fastifyNext from "@fastify/nextjs";

const server = fastify();

// server.register(fastifyNext)
// .after(() => {
//   server.next("/")
// })
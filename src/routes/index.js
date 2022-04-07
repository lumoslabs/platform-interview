import fastify from 'fastify';
import { userRoute } from './user.js';
import { gameRoute } from './game.js';

const routes = async (fastify, opts, done) => {
  fastify.register(userRoute);
  fastify.register(gameRoute);
};

export { routes };

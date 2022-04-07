import fastify from 'fastify';
import { userRoute } from './user.js';
import { gameRoute } from './game.js';

const routes = async (fastify, opts, done) => {
  fastify.get('/', async (request, reply) => {
    return 'platform-interview';
  });
  fastify.register(userRoute);
  fastify.register(gameRoute);
};

export { routes };

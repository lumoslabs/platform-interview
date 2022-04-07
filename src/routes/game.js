import fastify from 'fastify';

const gameRoute = async (fastify, opts, done) => {
  fastify.get('/game', (request, reply) => {
    return 'A game!';
  });
};

export { gameRoute };

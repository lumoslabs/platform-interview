import fastify from 'fastify';

const userRoute = async (fastify, opts, done) => {
  fastify.get('/user', (request, reply) => {
    return 'A user!';
  });
};

export { userRoute };

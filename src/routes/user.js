import fastify from 'fastify';
import { users, userGamePlays } from '../data.js';
import { isAuthenticated } from '../auth.js';

const userRoute = async (fastify, opts, done) => {
  // If the request has a valid JWT, indicate as much on the Request object.
  fastify.addHook('preHandler', async (request, reply) => {
    if (!request.headers.authorization) {
      request.isAuthenticated = false; // Explicit default.
      done();
    }
    request.isAuthenticated = await isAuthenticated(request.headers.authorization);
  });

  // Placeholder route.
  fastify.get('/user', (request, reply) => {
    if (!request.isAuthenticated) {
      reply.code(403).send('Unauthorized request');
      return;
    }

    return 'A user!';
  });

  // Look up users by ID.
  fastify.get('/user/:id', (request, reply) => {
    if (!request.isAuthenticated) {
      reply.code(403).send('Unauthorized request');
      return;
    }

    let user = users.find(u => u.id == request.params.id);
    if (!user) {
      reply.code(404).send('User not found');
    }
    return user;
  });

  // Given a valid user ID, look up their game plays.
  fastify.get('/user/:id/games', (request, reply) => {
    if (!request.isAuthenticated) {
      reply.code(403).send('Unauthorized request');
      return;
    }

    let user = users.find(u => u.id == request.params.id);
    if (!user) {
      reply.code(404).send('User not found');
    }
    let playData = userGamePlays.find(ug => ug.user_id == user.id);
    if (!playData) {
      reply.code(404).send('No play data found for user');
    }
    return playData;
  });
};

export { userRoute };

import fastify from 'fastify';
import { users, userGamePlays } from '../data.js';

const userRoute = async (fastify, opts, done) => {
  // Placeholder route.
  fastify.get('/user', (request, reply) => {
    return 'A user!';
  });

  // Look up users by ID.
  fastify.get('/user/:id', (request, reply) => {
    let user = users.find(u => u.id == request.params.id);
    if (!user) {
      reply.code(404).send('User not found');
    }
    return user;
  });

  // Given a valid user ID, look up their game plays.
  fastify.get('/user/:id/games', (request, reply) => {
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

import fastify from 'fastify';
import { games } from '../data.js';

const gameRoute = async (fastify, opts, done) => {
  // Placeholder.
  fastify.get('/game', (request, reply) => {
    return 'A game!';
  });

  // Return a single game.
  fastify.get('/game/:id', (request, reply) => {
    let game = games.find(g => g.id == request.params.id);
    if (!game) {
      reply.code(404).send('Game not found');
    }
    return game;
  });

  // Return all games.
  fastify.get('/games', (request, reply) => {
    return games;
  });

};

export { gameRoute };

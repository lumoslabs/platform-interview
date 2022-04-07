import fastify from 'fastify';
import { routes } from './routes/index.js';

const app = fastify({ logger: true });

// Declare a route
app.get('/', async (request, reply) => {
  return 'platform-interview';
});

app.register(routes);

// Run the server!
const start = async () => {
  try {
    await app.listen(3000);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();

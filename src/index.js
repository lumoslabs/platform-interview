import { app } from './app.js';
import { defaults } from './utils.js';

const host = process.env.HOST || defaults.host;
const port = process.env.PORT || defaults.port;

try {
  await app.listen({ host: host, port: port });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}

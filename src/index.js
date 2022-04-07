import { app } from './app.js';

try {
  await app.listen(3000);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}

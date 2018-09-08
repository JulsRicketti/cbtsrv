const Logger = require('./logger')
const app = require('./app')


const server = app.listen(3000);

process.on('unhandledRejection', (reason, p) =>
  Logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  Logger.info('Feathers application started on http://localhost:3000')
);
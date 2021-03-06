const PORT = Number(process.env.PORT) || 5000;

const server = require('./src/app')({
  logger: {
    level: 'info',
    prettyprint: true,
  },
});

const start = async () => {
  try {
    await server.listen({ port: PORT, host: '0.0.0.0' });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();

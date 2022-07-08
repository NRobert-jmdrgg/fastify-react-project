const loadEnvironmentVariable = (envName) => process.env[envName];

module.exports = {
  database_uri: loadEnvironmentVariable('POSTGRES_URI'),
};

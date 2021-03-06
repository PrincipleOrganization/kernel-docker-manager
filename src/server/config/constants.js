const devConfig = {
  DATA_FILE: './data/db-dev.json',
  USER_NAME: 'dev',
  USER_PASSWORD: 'dev',
};

const testConfig = {
  DATA_FILE: './data/db-test.json',
  USER_NAME: 'test',
  USER_PASSWORD: 'test',
};

const prodConfig = {
  DATA_FILE: './data/db.json',
  USER_NAME: 'admin',
  USER_PASSWORD: 'admin',
};

const defaultConfig = {
  PORT: process.env.PORT || 5000,
  CRYPTO_ALGORITM: 'aes-256-ctr',
  CRYPTO_PASSWORD: 'waterdragon',
  DOCKER_SOCKET: '/var/run/docker.sock',
  JWT_SECRET: 'darkstar',
  UPLOAD_DIR: './data/tmp',
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};

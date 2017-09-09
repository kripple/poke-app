const env = require('dotenv');
env.config();

export const Env = {
  token:  process.env.token
};

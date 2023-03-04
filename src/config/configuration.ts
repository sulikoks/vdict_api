const packageJSON = require('../../package.json');

export const config = {
  port: Number(process.env.PORT),
  host: process.env.HOST,
  version: packageJSON.version,
};

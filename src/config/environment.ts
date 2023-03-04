import { join } from 'path';
import * as dotenv from 'dotenv';

export const DEFAULT_ENV = 'development';
export const ENV = process.env.NODE_ENV || DEFAULT_ENV;
export const ENV_PATH = join(__dirname, `../../${ENV}.env`);

try {
  // tslint:disable-next-line: no-console
  console.log(`Used ${ENV}.env config file! path: ${ENV_PATH}`);
  dotenv.config({ path: ENV_PATH });
} catch (err) {
  // tslint:disable-next-line: no-console
  console.log(`no ${ENV}.env file found! Env file should be placed in root directory.`);
  process.exit(1);
}

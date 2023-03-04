import { NestFactory } from '@nestjs/core';
import { ENV, config } from './config';
import { AppModule } from './app.module';

bootstrap();
export async function bootstrap() {
  const currentEnvLog = 'Environment: ' + ENV;

  console.log('*'.repeat(currentEnvLog.length));
  console.log(currentEnvLog);
  console.log('*'.repeat(currentEnvLog.length));

  const app = await NestFactory.create(AppModule, {
    logger: console,
  });

  await app.listen(config.port);

  console.log(`http://${config.host}:${config.port}`);
  console.log('v' + config.version);
}

import { Module } from '@nestjs/common';

import { UserModule } from './modules/user/user.module';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb://root:czP08OfyCIT1kqYwhjMqQMv1@sulikoks.ru:30101/vdict')
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

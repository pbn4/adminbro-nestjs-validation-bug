import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from '@admin-bro/nestjs';

@Module({
  imports: [
    AdminModule.createAdmin({
      adminBroOptions: {
        rootPath: '/admin',
        resources: [],
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GettradesController } from './gettrades/gettrades.controller';

@Module({
  imports: [],
  controllers: [AppController, GettradesController],
  providers: [AppService],
})
export class AppModule {}

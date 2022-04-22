import { Module } from '@nestjs/common';
import { CatsModule } from './cat.module';

//import { AppController } from './app.controller';
//import { AppService } from './app.service';

@Module({
  imports: [CatsModule],
})
export class AppModule {}


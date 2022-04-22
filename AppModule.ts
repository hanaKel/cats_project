import { Module } from '@nestjs/common';
import { CatModule } from './cat.module';



@Module({
  imports: [CatModule],
})
export class AppModule {
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchController } from './search/search.controller';

@Module({
  imports: [],
  controllers: [AppController, SearchController],
  providers: [AppService],
})
export class AppModule {}

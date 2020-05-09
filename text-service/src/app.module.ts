import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchController } from './search/search.controller';
import { ConfigModule } from '@nestjs/config';
import Configuration from './config/configuration';
import { SearchService } from './search/search.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      load: [Configuration]
    })
  ],
  controllers: [AppController, SearchController],
  providers: [AppService, SearchService],
})
export class AppModule {}

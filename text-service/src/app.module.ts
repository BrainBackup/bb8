import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchController } from './search/search.controller';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { SearchService } from './search/search.service';
const Configuration = configuration();

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      load: [configuration]
    })
  ],
  controllers: [AppController, SearchController],
  providers: [AppService, SearchService],
})
export class AppModule {}

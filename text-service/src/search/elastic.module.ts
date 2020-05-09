import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';

@Module({
    imports: [ElasticsearchModule.register({
      node: 'http://localhost:9200',
    })],
    providers: [SearchService],
    controllers: [SearchController],
    exports: [SearchService]
  })
  export class ElasticModule {}

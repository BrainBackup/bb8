import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { Module } from '@nestjs/common';

@Module({
    imports: [ElasticsearchModule.register({
      node: 'http://localhost:9200',
    })],
    // providers: [...],
  })
  export class SearchModule {}

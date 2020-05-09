import { Injectable } from '@nestjs/common';
import { SearchModule as ElasticsearchService } from './elasticsearch.module';
@Injectable()
export class SearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

}
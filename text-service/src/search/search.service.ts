import { Injectable } from '@nestjs/common';
// import { ElasticModule } from './elastic.module';
@Injectable()
export class SearchService {
  // constructor(private readonly elasticService: ElasticModule) {}

  getTest() {
    return 'another text';
  }

}
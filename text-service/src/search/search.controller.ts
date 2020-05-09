import { Controller, Get, Post, Body } from '@nestjs/common';
import { SearchService } from './search.service';

import Elastic from '../elastic';
import { Client, ApiResponse, RequestParams } from '@elastic/elasticsearch'
const SNIPPET_INDEX = Elastic.SchemesNameToIndices['snippets'].index;

interface Snippet {
    pageUrl: String,
    selectionText: String,
    menuItemId: String
  }

@Controller('search')
export class SearchController {
    constructor(private service: SearchService) { }
    @Get('/')
    async getText(): Promise<any> {
        try {
            const params1: RequestParams.Search = {
              index: SNIPPET_INDEX
            }
            const client = Elastic.GetClient();
            const result: ApiResponse = await client.search(params1);
            return result.body.hits.hits;
          }
          catch (err) {
            return err;
          }

    }
    @Post('/')
    // @UsePipes(new JoiValidationPipe(createWebRegisterSchema()))
    async createText(@Body() data: Snippet): Promise<any> {
        try {
            console.log('====================================');
            console.log(data);
            console.log('====================================');
            const client = Elastic.GetClient();
            const doc: RequestParams.Index = {
            index: SNIPPET_INDEX,
            refresh: "true",
            body: {
                selectionText: data.selectionText,
                pageUrl: data.pageUrl
            }
            }
            await client.index(doc);
            return 'Created successfully';
        }
        catch (err) {
            return err;
        }
    }
}

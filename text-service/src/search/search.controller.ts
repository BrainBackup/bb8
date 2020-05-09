import { Controller, Get } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
    constructor(private service: SearchService) { }
    @Get('/')
    getTest(): string {
        return this.service.getTest();
    }
}

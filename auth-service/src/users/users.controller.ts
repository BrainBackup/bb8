import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './user.entity';
import { ApiQuery, ApiParam } from '@nestjs/swagger';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }
    
    @Get('/all')
    getAll() {
        return this.service.getUsers();
    }
    @Get(':id')
    @ApiParam({ name: 'id', type: Number })
    get(@Param('id') id) {
        return this.service.getUser(id);
    }

    @Post()
    create(@Body() user: Partial<Users>) {
        console.log('====================================');
        console.log(user);
        console.log('====================================');
        // return this.service.createUser(user);
    }

    @Put()
    @ApiQuery({ name: 'id'})
    update(@Param() param: Partial<Users>, @Body() user: Users) {
        return this.service.updateUser(param.id, user);
    }

    @Delete(':id')
    @ApiParam({ name: 'id', type: Number })
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}

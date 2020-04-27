import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './user.entity';
import { ApiQuery } from '@nestjs/swagger';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }
    
    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }
    @Get()
    getAll() {
        return this.service.getUsers();
    }

    @Post()
    create(@Body() user: Users) {
        return this.service.createUser(user);
    }

    @Put()
    @ApiQuery({ name: 'id' })
    update(@Param() param: Partial<Users>, @Body() user: Users) {
        return this.service.updateUser(param.id, user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}

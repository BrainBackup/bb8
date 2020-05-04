import { Controller, Post, Body, Get, Put, Delete, Param, UsePipes} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './user.entity';
import { ApiQuery, ApiParam } from '@nestjs/swagger';
import { v4 as uuid } from 'uuid';
import { UsersValidationPipe } from './users.validation';
import { createSalt, hashPassword } from '../utils';
import * as Joi from '@hapi/joi';

interface WebRegister {
    firstName: string;
    lastName: string;
    mailAddress: string;
    password: string;
}
const createWebRegisterSchema = () =>
    Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        mailAddress: Joi.string().email().required(),
        password: Joi.string().required()
    });
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
    @UsePipes(new UsersValidationPipe(createWebRegisterSchema()))
    create(@Body() user: WebRegister) {
        // TODO: validate it has firstname, lastname, mail and password.
        const salt = createSalt();
        const _user: Users = {
            id: 0,
            fullName: `${user.firstName} ${user.lastName}`,
            email: user.mailAddress,
            username: uuid(),
            salt,
            password: hashPassword(user.password, salt),
            isVerified: false,
            createdAt: new Date,
            isAdmin: false,
            isActive: true,
            confirmationToken: createSalt()
        }
        return this.service.createUser(_user);
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

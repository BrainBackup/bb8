import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) { }

    async getUsers(): Promise<Users[]> {
        return await this.usersRepository.find({
            order: {
                salt: "ASC"
            }
        });
    }

    async getUser(_id: number): Promise<Users[]> {
        return await this.usersRepository.find({
            select: ["fullName", "isActive", "email"],
            where: [{ "id": _id }]
        });
    }
    async createUser(user: Users) {
        this.usersRepository.save(user);
    }
    async updateUser(_id: number, user: Users) {
        const oldUser: Users = await this.usersRepository.findOne(_id);
        this.usersRepository.save({
            ...oldUser,
            ...user
        });
    }

    async deleteUser(user: Users) {
        this.usersRepository.delete(user);
    }
}
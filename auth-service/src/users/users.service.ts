import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) { }

    async getUsers(user: Users): Promise<Users[]> {
        return await this.usersRepository.find();
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
    async updateUser(user: Users) {
        this.usersRepository.save(user)
    }

    async deleteUser(user: Users) {
        this.usersRepository.delete(user);
    }
}
import { Injectable } from '@nestjs/common';
import { User } from 'generated/prisma';
import { RegisterDto } from 'src/auth/register/dto/register.dto';
import { PrismaService } from 'src/common/database/prisma.service';
import { UserNotFoundException } from 'src/common/exceptions/user.exception';
import { IUserRepository } from '../interfaces/user-repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(private readonly prisma: PrismaService) {}

    getUsers(): Promise<User[]> {
        throw new Error('Method not implemented.');
    }

    async findByUserName(username: string): Promise<User | null> {
        try {
            return await this.prisma.user.findFirst({ where: { username } });
        } catch {
            throw new UserNotFoundException('Failed to find User');
        }
    }

    async createUser(registerDto: RegisterDto): Promise<User> {
        return await this.prisma.user.create({ data: registerDto });
    }
}

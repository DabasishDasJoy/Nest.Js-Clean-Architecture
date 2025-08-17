import { User } from 'generated/prisma';
import { RegisterDto } from 'src/auth/register/dto/register.dto';

export interface IUserRepository {
    getUsers(): Promise<User[]>;
    findByUserName(username: string): Promise<User | null>;
    createUser(registerDto: RegisterDto): Promise<User>;
}

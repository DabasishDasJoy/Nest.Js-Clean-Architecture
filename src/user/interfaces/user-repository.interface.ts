import { User } from 'generated/prisma';

export interface IUserRepository {
    getUsers(): Promise<User[]>;
}

import { User } from 'generated/prisma';

export interface IUserShowingService {
    showAllUsers(): Promise<User[]>;
}

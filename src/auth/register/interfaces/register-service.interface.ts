import { User } from 'generated/prisma';
import { RegisterDto } from '../dto/register.dto';

export interface IRegisterService {
    registerUser(registerDto: RegisterDto): Promise<User>;
    isUserNameTaken(username: string): Promise<boolean>;
    registerUserV2(registerDto: RegisterDto): Promise<User>;
    isUserNameTakenV2(username: string): boolean;
}

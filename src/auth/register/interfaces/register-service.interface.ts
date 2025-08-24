import { User } from 'generated/prisma';
import { RegisterDto } from '../dto/register.dto';

export interface IRegisterServiceV1 {
    registerUser(registerDto: RegisterDto): Promise<User>;
    isUserNameTaken(username: string): Promise<boolean>;
}

export interface IRegisterServiceV2 {
    registerUserV2(registerDto: RegisterDto): Promise<User>;
    isUserNameTakenV2(username: string): boolean;
}

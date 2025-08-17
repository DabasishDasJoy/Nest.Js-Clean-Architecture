import { User } from 'generated/prisma';
import { RegisterDto } from '../dto/register.dto';

export interface IRegisterService {
    registerUser(registerDto: RegisterDto): Promise<User>;
}

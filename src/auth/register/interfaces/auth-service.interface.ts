import { TOKENTYPEENUM } from 'src/auth/enum/token-type.enum';
import { UserResponseDto } from '../dto/register.dto';

export interface IAuthService {
    validateUser(username: string, password: string): Promise<UserResponseDto | null>;
    verifyToken(token: string, tokenType: TOKENTYPEENUM): any;
}

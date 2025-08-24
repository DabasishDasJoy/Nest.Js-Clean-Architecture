import { TOKENTYPEENUM } from 'src/auth/enum/token-type.enum';
import { UserResponseDto } from 'src/auth/register/dto/register.dto';

export interface IJwtService {
    signAccessToken(payload: UserResponseDto): string;
    signRefreshToken(payload: UserResponseDto): string;
    verifyToken(token: string, tokenType: TOKENTYPEENUM): UserResponseDto;
}

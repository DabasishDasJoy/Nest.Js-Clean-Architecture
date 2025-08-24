import { Inject, Injectable } from '@nestjs/common';
import * as Crypto from 'crypto';
import { IJwtService } from 'src/common/jwt-service/interfaces/jwt-service.interface';
import { CLASS_TOKENS } from 'src/common/tokens/repository.tokens';
import { UserResponseDto } from '../register/dto/register.dto';
import { GRANTTYPE } from '../register/dto/signin.dto';
import { ILoginService } from '../register/interfaces/sign-in-service.interface';
import { SignInResponseDto } from './dto/sign-in.dto';

@Injectable()
export class LoginService implements ILoginService {
    constructor(@Inject(CLASS_TOKENS.JWT_SERVICE) private readonly jwtService: IJwtService) {}

    login(user: UserResponseDto, grantType: GRANTTYPE): SignInResponseDto {
        const accessUUID = Crypto.randomUUID();
        const refreshUUID = Crypto.randomUUID();

        const userPayload = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
            password: '********',
            accessUUID,
            refreshUUID,
        };

        let accessToken: string | undefined;
        let refreshToken: string | undefined;
        if (grantType === GRANTTYPE.REFRESH) {
            accessToken = this.jwtService.signAccessToken(userPayload);
            refreshToken = undefined;
        } else if (grantType === GRANTTYPE.PASSWORD) {
            accessToken = this.jwtService.signAccessToken(userPayload);
            refreshToken = this.jwtService.signRefreshToken(userPayload);
        }

        user = new UserResponseDto(user);

        return new SignInResponseDto({ accessToken, refreshToken, user });
    }

    // async storeTokenInRedis(user: { accessUUID: string; id: string; exp: number }, type: TOKENTYPEENUM): Promise<void> {
    //     let token: string = '';
    //     let ttl: number = 0;
    //     if (type === TOKENTYPEENUM.ACCESS) {
    //         token = `access-uuid_${user.accessUUID}:${user.id}`;
    //         ttl = new Date(user.exp).getTime() - new Date().getTime();
    //     } else if (type === TOKENTYPEENUM.REFRESH) {
    //         token = `refresh-uuid_${user.accessUUID}:${user.id}`;
    //         ttl = new Date(user.exp).getTime() - new Date().getTime();
    //     }
    //     // Store the token in Redis with the specified TTL
    //     // await this..set(token, 'valid', 'EX', ttl);
    // }
}

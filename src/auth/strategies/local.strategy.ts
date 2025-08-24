import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { CLASS_TOKENS } from 'src/common/tokens/repository.tokens';
import { TOKENTYPEENUM } from '../enum/token-type.enum';
import { UserResponseDto } from '../register/dto/register.dto';
import { GRANTTYPE, SignInDto } from '../register/dto/signin.dto';
import { IAuthService } from '../register/interfaces/auth-service.interface';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject(CLASS_TOKENS.AUTH_SERVICE)
        private readonly authService: IAuthService,
    ) {
        super({
            usernameField: 'usernameOrEmail',
            passwordField: 'password',
            passReqToCallback: true,
        });
    }

    async validate(data: { body: SignInDto }): Promise<UserResponseDto | null> {
        let user: UserResponseDto | null = null;

        switch (data.body.grantType) {
            case GRANTTYPE.PASSWORD:
                user = await this.authService.validateUser(data.body.usernameOrEmail, data.body.password);
                break;
            case GRANTTYPE.REFRESH:
                user = (await this.authService.verifyToken(
                    data.body.refreshToken,
                    TOKENTYPEENUM.REFRESH,
                )) as UserResponseDto | null;
                break;
            default:
                throw new UnauthorizedException('Invalid grant type');
        }

        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}

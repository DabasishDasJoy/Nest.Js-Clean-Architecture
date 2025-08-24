import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TOKENTYPEENUM } from 'src/auth/enum/token-type.enum';
import { UserResponseDto } from 'src/auth/register/dto/register.dto';
import { IJwtService } from './interfaces/jwt-service.interface';

@Injectable()
export class JwtServiceService implements IJwtService {
    constructor(
        private readonly jwt: JwtService,
        private readonly configService: ConfigService,
    ) {}

    verifyToken(token: string, tokenType: TOKENTYPEENUM): any {
        if (tokenType === TOKENTYPEENUM.ACCESS) {
            return this.jwt.verify(token, {
                secret: this.configService.get<string>('jwt.accessTokenSecret'),
            });
        } else if (tokenType === TOKENTYPEENUM.REFRESH) {
            return this.jwt.verify(token, {
                secret: this.configService.get<string>('jwt.refreshTokenSecret'),
            });
        }
    }

    signAccessToken(payload: UserResponseDto): string {
        const token = this.jwt.sign(payload, {
            secret: this.configService.get<string>('jwt.accessTokenSecret'),
            expiresIn: this.configService.get<string>('jwt.accessTokenExpiresIn'),
        });

        return token;
    }

    signRefreshToken(payload: UserResponseDto): string {
        const token = this.jwt.sign(payload, {
            secret: this.configService.get<string>('jwt.refreshTokenSecret'),
            expiresIn: this.configService.get<string>('jwt.refreshTokenExpiresIn'),
        });

        return token;
    }
}

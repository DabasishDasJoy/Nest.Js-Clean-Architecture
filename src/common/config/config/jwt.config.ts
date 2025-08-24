import { registerAs } from '@nestjs/config';
import { IJwtConfigService } from '../interfaces/jwt-config.interface';

export default registerAs(
    'jwt',
    (): IJwtConfigService => ({
        accessTokenSecret: String(process.env.ACCESS_TOKEN_SECRET),
        refreshTokenSecret: String(process.env.REFRESH_TOKEN_SECRET),
        accessTokenExpiresIn: String(process.env.ACCESS_TOKEN_EXPIRES_IN),
        refreshTokenExpiresIn: String(process.env.REFRESH_TOKEN_EXPIRES_IN),
    }),
);

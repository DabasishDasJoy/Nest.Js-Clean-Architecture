import { registerAs } from '@nestjs/config';
import { IServerConfig } from '../';

export default registerAs(
    'server',
    (): IServerConfig => ({
        port: Number(process.env.PORT),
        host: String(process.env.HOST),
        apiPrefix: String(process.env.API_PREFIX),
        corsOrigin: String(process.env.CORS_ORIGIN),
        nodeEnv: String(process.env.NODE_ENV),
    }),
);

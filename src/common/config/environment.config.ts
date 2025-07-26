import { registerAs } from "@nestjs/config";
import { IEnvironmentConfig } from '../../common';

export default registerAs('environment', (): IEnvironmentConfig => (
    {
        port: Number(process.env.PORT )|| 3000,
        host: process.env.HOST || 'localhost',
        apiPrefix: process.env.API_PREFIX || 'api',
        corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000'
    }
))
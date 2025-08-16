import { registerAs } from '@nestjs/config';
import { IDatabaseConfig } from '../interfaces/database-config.interface';

export default registerAs(
    'database',
    (): IDatabaseConfig => ({
        port: Number(process.env.DATABASE_PORT),
        host: String(process.env.DATABASE_HOST),
        username: String(process.env.DATABASE_USERNAME),
        password: String(process.env.DATABASE_PASSWORD),
        database: String(process.env.DATABASE_NAME),
    }),
);

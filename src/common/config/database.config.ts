import { registerAs } from "@nestjs/config";
import { IDatabaseConfig } from "./interfaces/database-config.interface";

export default registerAs('database', (): IDatabaseConfig => ({
    port : Number(process.env.DATABASE_PORT) || 5432,
    host: process.env.DATABASE_HOST || 'localhost',
    username: process.env.DATABASE_USERNAME || 'user',
    password: process.env.DATABASE_PASSWORD || 'password',
    database: process.env.DATABASE_NAME || 'mydatabase',
}))
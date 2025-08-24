export interface IJwtConfigService {
    refreshTokenSecret: string;
    accessTokenSecret: string;
    accessTokenExpiresIn: string;
    refreshTokenExpiresIn: string;
}

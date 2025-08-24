import { IsEnum, IsNotEmpty, IsString, ValidateIf } from 'class-validator';

export enum GRANTTYPE {
    PASSWORD = 'password',
    REFRESH = 'refresh_token',
}

export class SignInDto {
    @IsNotEmpty()
    @IsEnum(GRANTTYPE)
    grantType: GRANTTYPE;

    @ValidateIf((obj: SignInDto) => obj.grantType === GRANTTYPE.REFRESH)
    @IsNotEmpty()
    @IsString()
    refreshToken: string;

    @ValidateIf((obj: SignInDto) => obj.grantType === GRANTTYPE.PASSWORD)
    @IsString()
    @IsNotEmpty()
    usernameOrEmail: string;

    @ValidateIf((obj: SignInDto) => obj.grantType === GRANTTYPE.PASSWORD)
    @IsString()
    @IsNotEmpty()
    password: string;
}

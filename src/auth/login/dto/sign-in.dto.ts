import { Expose } from 'class-transformer';
import { UserResponseDto } from 'src/auth/register/dto/register.dto';

export class SignInResponseDto {
    @Expose()
    accessToken: string;

    @Expose()
    refreshToken: string;

    @Expose()
    user: UserResponseDto;

    constructor(partial: Partial<SignInResponseDto>) {
        Object.assign(this, partial);
    }
}

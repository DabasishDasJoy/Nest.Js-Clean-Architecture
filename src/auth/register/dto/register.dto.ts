import { Exclude, Expose, Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

export class UserResponseDto {
    @Expose()
    id: number;

    @Expose()
    firstName: string;

    @Expose()
    lastName: string;

    @Expose()
    username: string;

    @Expose()
    email: string;

    @Exclude()
    password: string;

    constructor(partial: Partial<UserResponseDto>) {
        Object.assign(this, partial);
    }
}

export class ResponseDto {
    @Expose()
    message: string;

    @Expose()
    @Type(() => UserResponseDto)
    user: UserResponseDto;

    constructor(partial: Partial<ResponseDto>) {
        Object.assign(this, partial);
    }
}

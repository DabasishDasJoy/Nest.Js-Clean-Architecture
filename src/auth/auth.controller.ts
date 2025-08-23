import { BadRequestException, Body, Controller, Inject, Post, Version } from '@nestjs/common';
import { User } from 'generated/prisma';
import { CLASS_TOKENS } from 'src/common/tokens/repository.tokens';
import { RegisterDto, ResponseDto } from './register/dto/register.dto';
import { SignInDto } from './register/dto/signin.dto';
import { IRegisterService } from './register/interfaces/register-service.interface';
import { ILoginService } from './register/interfaces/sign-in-service.interface';

@Controller('auth')
export class AuthController {
    constructor(
        @Inject(CLASS_TOKENS.REGISER_SERVICE)
        private readonly registerService: IRegisterService,
        @Inject(CLASS_TOKENS.LOGIN_SERVICE)
        private readonly loginService: ILoginService,
    ) {}

    @Post('register')
    async registerV1(@Body() body: RegisterDto): Promise<ResponseDto> {
        if (await this.registerService.isUserNameTaken(body.username)) {
            throw new BadRequestException('Username already taken');
        }
        const resp = await this.registerService.registerUser(body);
        console.log('resp', resp);
        return new ResponseDto({ message: 'User registered successfully', user: resp });
    }

    @Version('2')
    @Post('register')
    async registerV2(@Body() body: RegisterDto): Promise<User | { message: 'Username taken' }> {
        if (this.registerService.isUserNameTakenV2(body.username)) {
            throw new BadRequestException('Username already taken');
        }
        return await this.registerService.registerUserV2(body);
    }

    @Post('signin')
    async signIn(@Body() body: SignInDto): Promise<any> {
        return await this.loginService.signIn(body);
    }
}

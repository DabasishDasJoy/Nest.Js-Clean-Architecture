import { BadRequestException, Body, Controller, Inject, Post, Req, UseGuards, Version } from '@nestjs/common';
import { User } from 'generated/prisma';
import { CLASS_TOKENS } from 'src/common/tokens/repository.tokens';
import { LocalAuthGuard } from './guards/local.auth.guard';
import { RegisterDto, ResponseDto, UserResponseDto } from './register/dto/register.dto';
import { SignInDto } from './register/dto/signin.dto';
import { IRegisterServiceV1, IRegisterServiceV2 } from './register/interfaces/register-service.interface';
import { ILoginService } from './register/interfaces/sign-in-service.interface';

@Controller('auth')
export class AuthController {
    constructor(
        @Inject(CLASS_TOKENS.REGISTER_SERVICE)
        private readonly registerService: IRegisterServiceV1 & IRegisterServiceV2,
        @Inject(CLASS_TOKENS.LOGIN_SERVICE)
        private readonly loginService: ILoginService,
    ) {}

    @Post('register')
    async registerV1(@Body() body: RegisterDto): Promise<ResponseDto> {
        if (await this.registerService.isUserNameTaken(body.username)) {
            throw new BadRequestException('Username already taken');
        }
        const resp = await this.registerService.registerUser(body);

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

    @UseGuards(LocalAuthGuard)
    @Post('signin')
    signIn(@Body() body: SignInDto, @Req() req: { user: UserResponseDto }): any {
        return this.loginService.login(req.user, body.grantType);
    }
}

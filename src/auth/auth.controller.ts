import { BadRequestException, Body, Controller, Inject, Post, Version } from '@nestjs/common';
import { User } from 'generated/prisma';
import { REPOSITORY_TOKENS } from 'src/common/tokens/repository.tokens';
import { RegisterDto } from './register/dto/register.dto';
import { RegisterService } from './register/register.service';

@Controller('auth')
export class AuthController {
    constructor(
        @Inject(REPOSITORY_TOKENS.REGISER_SERVICE)
        private readonly registerService: RegisterService,
    ) {}

    @Post('register')
    async registerV1(@Body() body: RegisterDto): Promise<User | { message: 'Username taken' }> {
        if (await this.registerService.isUserNameTaken(body.username)) {
            throw new BadRequestException('Username already taken');
        }
        return await this.registerService.registerUser(body);
    }

    @Version('2')
    @Post('register')
    async registerV2(@Body() body: RegisterDto): Promise<User | { message: 'Username taken' }> {
        if (this.registerService.isUserNameTakenV2(body.username)) {
            throw new BadRequestException('Username already taken');
        }
        return await this.registerService.registerUserV2(body);
    }
}

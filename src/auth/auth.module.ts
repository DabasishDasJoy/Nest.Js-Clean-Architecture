import { Module } from '@nestjs/common';
import { BloomFilterModule } from 'src/common/bloom-filter/bloom-filter.module';
import { HashingModule } from 'src/common/hashing/hashing.module';
import { CLASS_TOKENS } from 'src/common/tokens/repository.tokens';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { LoginService } from './login/login.service';
import { LogoutService } from './logout/logout.service';
import { RegisterService } from './register/register.service';

@Module({
    imports: [UserModule, BloomFilterModule, HashingModule],
    providers: [
        {
            provide: CLASS_TOKENS.REGISER_SERVICE,
            useClass: RegisterService,
        },
        {
            provide: CLASS_TOKENS.LOGIN_SERVICE,
            useClass: LoginService,
        },
        LogoutService,
    ],
    controllers: [AuthController],
})
export class AuthModule {}

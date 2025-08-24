import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { BloomFilterModule } from 'src/common/bloom-filter/bloom-filter.module';
import { HashingModule } from 'src/common/hashing/hashing.module';
import { JwtServiceModule } from 'src/common/jwt-service/jwt-service.module';
import { CLASS_TOKENS } from 'src/common/tokens/repository.tokens';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginService } from './login/login.service';
import { LogoutService } from './logout/logout.service';
import { RegisterService } from './register/register.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
    imports: [UserModule, BloomFilterModule, HashingModule, PassportModule, JwtServiceModule],
    providers: [
        {
            provide: CLASS_TOKENS.REGISTER_SERVICE,
            useClass: RegisterService,
        },
        {
            provide: CLASS_TOKENS.LOGIN_SERVICE,
            useClass: LoginService,
        },
        {
            provide: CLASS_TOKENS.AUTH_SERVICE,
            useClass: AuthService,
        },
        LogoutService,
        LocalStrategy,
        JwtStrategy,
    ],
    controllers: [AuthController],
})
export class AuthModule {}

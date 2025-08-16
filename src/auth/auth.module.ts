import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LoginService } from './login/login.service';
import { LogoutService } from './logout/logout.service';
import { RegisterService } from './register/register.service';

@Module({
    providers: [LoginService, LogoutService, RegisterService],
    controllers: [AuthController],
})
export class AuthModule {}

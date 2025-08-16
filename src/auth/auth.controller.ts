import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './register/dto/register.dto';

@Controller('auth')
export class AuthController {
    @Post('register')
    registerV1(@Body() body: RegisterDto): RegisterDto {
        console.log(body.isActive === true);
        return body;
    }
}

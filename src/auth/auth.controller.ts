import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    
    @Post('register')
    registerV1(@Body() body: any): any{
        
        return { message: 'User registered successfully', data: body };
    }
}

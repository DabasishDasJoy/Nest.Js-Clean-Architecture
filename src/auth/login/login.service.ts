import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CLASS_TOKENS } from 'src/common/tokens/repository.tokens';
import { IUserRepository } from 'src/user/interfaces/user-repository.interface';
import { SignInDto } from '../register/dto/signin.dto';
import { ILoginService } from '../register/interfaces/sign-in-service.interface';

@Injectable()
export class LoginService implements ILoginService {
    constructor(@Inject(CLASS_TOKENS.USER) private readonly userRepositoy: IUserRepository) {}

    async signIn(signInDto: SignInDto): Promise<any> {
        console.log('signInDto', signInDto.usernameOrEmail);
        const user = await this.userRepositoy.findUser(signInDto.usernameOrEmail);
        if (!user || user.password !== signInDto.password) {
            throw new BadRequestException('Invalid credentials');
        }

        return { message: 'SignIn successful', user };
    }
}

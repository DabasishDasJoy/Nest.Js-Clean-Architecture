import { SignInResponseDto } from 'src/auth/login/dto/sign-in.dto';
import { UserResponseDto } from '../dto/register.dto';
import { GRANTTYPE } from '../dto/signin.dto';

export interface ILoginService {
    login(user: UserResponseDto, grantType: GRANTTYPE): SignInResponseDto;
}

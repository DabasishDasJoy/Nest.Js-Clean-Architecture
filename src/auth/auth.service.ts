import { Inject, Injectable } from '@nestjs/common';
import { HashingService } from 'src/common/hashing/hashing.service';
import { IJwtService } from 'src/common/jwt-service/interfaces/jwt-service.interface';
import { CLASS_TOKENS } from 'src/common/tokens/repository.tokens';
import { IUserRepository } from 'src/user/interfaces/user-repository.interface';
import { TOKENTYPEENUM } from './enum/token-type.enum';
import { UserResponseDto } from './register/dto/register.dto';
import { IAuthService } from './register/interfaces/auth-service.interface';

@Injectable()
export class AuthService implements IAuthService {
    constructor(
        @Inject(CLASS_TOKENS.USER) private readonly userRepository: IUserRepository,
        @Inject(CLASS_TOKENS.HASHING_SERVICE) private readonly hashingService: HashingService,
        @Inject(CLASS_TOKENS.JWT_SERVICE) private readonly jwtService: IJwtService,
    ) {}

    verifyToken(token: string, tokenType: TOKENTYPEENUM): any {
        if (tokenType === TOKENTYPEENUM.REFRESH) {
            return this.jwtService.verifyToken(token, TOKENTYPEENUM.REFRESH);
        } else if (tokenType === TOKENTYPEENUM.ACCESS) {
            return this.jwtService.verifyToken(token, TOKENTYPEENUM.ACCESS);
        }
    }

    async validateUser(username: string, password: string): Promise<UserResponseDto | null> {
        const user = await this.userRepository.findByUserName(username);

        if (!user) {
            return null;
        }

        const isPasswordMatching = await this.hashingService.compare(password, user?.password);

        if (user && isPasswordMatching) {
            return new UserResponseDto(user);
        }

        return null;
    }
}

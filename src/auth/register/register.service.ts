import { Inject, Injectable } from '@nestjs/common';
import { BloomFilter } from 'bloom-filters';
import { User } from 'generated/prisma';
import { BloomFilterService } from 'src/common/bloom-filter/bloom-filter.service';
import { REPOSITORY_TOKENS } from 'src/common/tokens/repository.tokens';
import { IUserRepository } from 'src/user/interfaces/user-repository.interface';
import { RegisterDto } from './dto/register.dto';
import { SignInDto } from './dto/signin.dto';
import { IRegisterService } from './interfaces/register-service.interface';

@Injectable()
export class RegisterService implements IRegisterService {
    private filter: BloomFilter;

    constructor(
        @Inject(REPOSITORY_TOKENS.USER) private readonly userRepositoy: IUserRepository,
        private readonly bloomfilter: BloomFilterService,
    ) {
        this.filter = new BloomFilter(10_000, 4);
        // this.bloomfilter = new BloomFilterService(this.bloomfilter['redisService'], 10_000, 3);
    }

    // using manual redis
    async registerUser(registerDto: RegisterDto): Promise<User> {
        const user = await this.userRepositoy.createUser(registerDto);
        await this.bloomfilter.add(registerDto.username);
        return user;
    }

    // using bloom-filters npm
    async registerUserV2(registerDto: RegisterDto): Promise<User> {
        const user = await this.userRepositoy.createUser(registerDto);
        this.filter.add(registerDto.username);
        return user;
    }

    async signIn(signInDto: SignInDto): Promise<any> {
        const user = await this.userRepositoy.findUser(signInDto.usernameOrEmail);

        if (!user || user.password !== signInDto.password) {
            return { message: 'Invalid credentials' };
        }

        return { message: 'SignIn successful', user };
    }

    isUserNameTakenV2(username: string): boolean {
        return this.filter.has(username);
    }

    async isUserNameTaken(username: string): Promise<boolean> {
        if (!(await this.bloomfilter.has(username))) {
            return false;
        }

        const user = await this.userRepositoy.findByUserName(username);

        return !!user;
    }
}

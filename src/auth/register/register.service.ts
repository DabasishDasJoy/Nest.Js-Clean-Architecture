import { Inject, Injectable } from '@nestjs/common';
import { BloomFilter } from 'bloom-filters';
import { User } from 'generated/prisma';
import { BloomFilterService } from 'src/common/bloom-filter/bloom-filter.service';
import { HashingService } from 'src/common/hashing/hashing.service';
import { CLASS_TOKENS } from 'src/common/tokens/repository.tokens';
import { IUserRepository } from 'src/user/interfaces/user-repository.interface';
import { RegisterDto } from './dto/register.dto';
import { IRegisterServiceV1, IRegisterServiceV2 } from './interfaces/register-service.interface';

@Injectable()
export class RegisterService implements IRegisterServiceV1, IRegisterServiceV2 {
    private filter: BloomFilter;

    constructor(
        @Inject(CLASS_TOKENS.USER)
        private readonly userRepository: IUserRepository,
        private readonly bloomFilterService: BloomFilterService,
        @Inject(CLASS_TOKENS.HASHING_SERVICE)
        private readonly hashingService: HashingService,
    ) {
        this.filter = new BloomFilter(10_000, 4);
        // this.bloomfilter = new BloomFilterService(this.bloomfilter['redisService'], 10_000, 3);
    }

    // using manual redis
    async registerUser(registerDto: RegisterDto): Promise<User> {
        registerDto.password = await this.hashingService.hash(registerDto.password);
        const user = await this.userRepository.createUser(registerDto);
        await this.bloomFilterService.add(registerDto.username);
        return user;
    }

    // using bloom-filters npm
    async registerUserV2(registerDto: RegisterDto): Promise<User> {
        const user = await this.userRepository.createUser(registerDto);
        this.filter.add(registerDto.username);
        return user;
    }

    isUserNameTakenV2(username: string): boolean {
        return this.filter.has(username);
    }

    async isUserNameTaken(username: string): Promise<boolean> {
        if (!(await this.bloomFilterService.has(username))) {
            return false;
        }

        const user = await this.userRepository.findByUserName(username);

        return !!user;
    }
}

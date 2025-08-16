import { Inject, Injectable } from '@nestjs/common';
import { REPOSITORY_TOKENS } from 'src/common/tokens/repository.tokens';
import { IUserShowingService } from '../interfaces/user-showing-service.interface';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class ShowingService implements IUserShowingService {
    constructor(
        @Inject(REPOSITORY_TOKENS.USER)
        private readonly userRepository: UserRepository,
    ) {}

    async showAllUsers() {
        return await this.userRepository.getUsers();
    }
}

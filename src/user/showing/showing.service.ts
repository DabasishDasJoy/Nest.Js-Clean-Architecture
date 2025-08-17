import { Inject, Injectable } from '@nestjs/common';
import { REPOSITORY_TOKENS } from 'src/common/tokens/repository.tokens';
import { IUserRepository } from '../interfaces/user-repository.interface';
import { IUserShowingService } from '../interfaces/user-showing-service.interface';

@Injectable()
export class ShowingService implements IUserShowingService {
    constructor(
        @Inject(REPOSITORY_TOKENS.USER)
        private readonly userRepository: IUserRepository,
    ) {}

    async showAllUsers() {
        return await this.userRepository.getUsers();
    }
}

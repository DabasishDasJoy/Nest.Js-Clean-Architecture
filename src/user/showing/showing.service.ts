import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../interfaces/user-repository.interface';
import { REPOSITORY_TOKENS } from 'src/common/tokens/repository.tokens';

@Injectable()
export class ShowingService {
  constructor(@Inject(REPOSITORY_TOKENS.USER) private readonly userRepository: IUserRepository) {}
  
  async showAllUsers() {
    return await this.userRepository.getUsers();
  }
}

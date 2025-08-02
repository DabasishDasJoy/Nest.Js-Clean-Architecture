import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../interfaces/user-repository.interface';
import { REPOSITORY_TOKENS } from 'src/common/tokens/repository.tokens';
import { IUserShowingService } from '../interfaces/user-showing-service.interface';

@Injectable()
export class ShowingService implements IUserShowingService {
  constructor(
    @Inject(REPOSITORY_TOKENS.USER)
    private readonly userRepository: IUserRepository,
  ) {}

  async showAllUsers() {
    // Fetch all users using the user repository
    // and return the result.
    // This method is used by the UserController
    // to respond to the 'list' endpoint.
    // It returns a promise that resolves to an array of User objects.
    // The UserRepository's getUsers method is called to retrieve the users.
    // This service is injected into the UserController.
    return await this.userRepository.getUsers();
  }
}

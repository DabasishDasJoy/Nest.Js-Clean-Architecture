import { Controller, Get, Inject } from '@nestjs/common';
import { REPOSITORY_TOKENS } from 'src/common/tokens/repository.tokens';
import { IUserShowingService } from './interfaces/user-showing-service.interface';

@Controller('user')
export class UserController {
  constructor(
    @Inject(REPOSITORY_TOKENS.USER_SHOWING_SERVICE)
    private readonly showingService: IUserShowingService,
  ) {}

  @Get('list')
  showAllUsers() {
    return this.showingService.showAllUsers();
  }
}

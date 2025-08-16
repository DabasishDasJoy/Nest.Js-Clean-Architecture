import { Controller, Get, Inject, Version } from '@nestjs/common';
import { REPOSITORY_TOKENS } from 'src/common/tokens/repository.tokens';
import { IUserShowingService } from './interfaces/user-showing-service.interface';
import { ShowingService } from './showing/showing.service';
import { version } from 'os';

@Controller('user')
export class UserController {
    constructor(
        @Inject(REPOSITORY_TOKENS.USER_SHOWING_SERVICE)
        private readonly showingService: ShowingService,
    ) {}

    @Get('list')
    showAllUsers() {
        return this.showingService.showAllUsers();
    }
}

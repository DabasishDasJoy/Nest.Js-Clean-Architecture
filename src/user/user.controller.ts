import { Controller, Get, Inject } from '@nestjs/common';
import { REPOSITORY_TOKENS } from 'src/common/tokens/repository.tokens';
import { ShowingService } from './showing/showing.service';

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

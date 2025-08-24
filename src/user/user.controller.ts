import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { CLASS_TOKENS } from 'src/common/tokens/repository.tokens';
import { ShowingService } from './showing/showing.service';

@Controller('user')
export class UserController {
    constructor(
        @Inject(CLASS_TOKENS.USER_SHOWING_SERVICE)
        private readonly showingService: ShowingService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get('list')
    showAllUsers() {
        return this.showingService.showAllUsers();
    }
}

import { Controller, Get } from '@nestjs/common';
import { ShowingService } from './showing/showing.service';

@Controller('user')
export class UserController {
  constructor(private readonly showingService: ShowingService) {}

  @Get('')
  showAllUsers() {
    return this.showingService.showAllUsers();
  }
}

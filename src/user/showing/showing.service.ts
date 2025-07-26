import { Injectable } from '@nestjs/common';

@Injectable()
export class ShowingService {
  showAllUsers() {
    return 'show all users';
  }
}

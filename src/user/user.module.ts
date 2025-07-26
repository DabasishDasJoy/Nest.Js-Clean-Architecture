import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreatingService } from './creating/creating.service';
import { RemovingService } from './removing/removing.service';
import { EditingService } from './editing/editing.service';
import { ShowingService } from './showing/showing.service';

@Module({
  controllers: [UserController],
  providers: [CreatingService, RemovingService, EditingService, ShowingService],
})
export class UserModule {}

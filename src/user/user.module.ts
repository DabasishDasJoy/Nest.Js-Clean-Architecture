import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreatingService } from './creating/creating.service';
import { RemovingService } from './removing/removing.service';
import { EditingService } from './editing/editing.service';
import { ShowingService } from './showing/showing.service';
import { UserRepository } from './repositories/user.repository';
import { DatabaseModule } from 'src/common';
import { REPOSITORY_TOKENS } from 'src/common/tokens/repository.tokens';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    {
      provide: REPOSITORY_TOKENS.USER,
      useClass: UserRepository,
    },
    CreatingService,
    RemovingService,
    EditingService,
    ShowingService,
    UserRepository,
  ],
  exports: [REPOSITORY_TOKENS.USER],
})
export class UserModule {}

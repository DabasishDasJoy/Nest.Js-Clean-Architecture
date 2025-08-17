import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common';
import { REPOSITORY_TOKENS } from 'src/common/tokens/repository.tokens';
import { CreatingService } from './creating/creating.service';
import { EditingService } from './editing/editing.service';
import { RemovingService } from './removing/removing.service';
import { UserRepository } from './repositories/user.repository';
import { ShowingService } from './showing/showing.service';
import { UserController } from './user.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [
        {
            provide: REPOSITORY_TOKENS.USER,
            useClass: UserRepository,
        },
        {
            provide: REPOSITORY_TOKENS.USER_SHOWING_SERVICE,
            useClass: ShowingService,
        },
        CreatingService,
        RemovingService,
        EditingService,
    ],
    exports: [REPOSITORY_TOKENS.USER],
})
export class UserModule {}

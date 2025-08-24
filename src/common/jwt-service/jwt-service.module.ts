import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CLASS_TOKENS } from '../tokens/repository.tokens';
import { JwtServiceService } from './jwt-service.service';

@Module({
    imports: [JwtModule.register({})],
    providers: [{ provide: CLASS_TOKENS.JWT_SERVICE, useClass: JwtServiceService }],
    exports: [CLASS_TOKENS.JWT_SERVICE],
})
export class JwtServiceModule {}

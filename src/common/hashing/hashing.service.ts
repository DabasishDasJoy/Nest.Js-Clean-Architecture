import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IHashingService } from './interfaces/hashing-service.interface';

@Injectable()
export class HashingService implements IHashingService {
    async compare(data: string, hashedData: string): Promise<boolean> {
        return await bcrypt.compare(data, hashedData);
    }

    async hash(data: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);

        const hash = await bcrypt.hash(data, salt);

        return hash;
    }
}

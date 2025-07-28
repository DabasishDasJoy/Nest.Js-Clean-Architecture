import { Injectable } from "@nestjs/common";
import { User } from "generated/prisma";
import { PrismaService } from "src/common/database/prisma.service";

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService){}

    async getUsers(): Promise<User[]>{
        return this.prisma.user.findMany();
    }
}
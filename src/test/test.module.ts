import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { PrismaService } from "../prisma.service";

@Module({
  controllers: [TestController],
  providers: [PrismaService, TestService],
})
export class TestModule {}

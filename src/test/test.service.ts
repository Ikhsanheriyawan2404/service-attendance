import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { PrismaService } from "../prisma.service";

@Injectable()
export class TestService {
  constructor(
    private prisma: PrismaService,
  ) {}
  create(createTestDto: CreateTestDto) {
    return 'This action adds a new test';
  }

  findAll() {
    return this.prisma.users.findMany({});
  }

  findOne(id: number) {
    return this.prisma.users.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}

import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() cat) {
    this.catsService.create(cat);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }
}

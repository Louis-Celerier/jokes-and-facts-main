import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Joke } from './type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cat-fact')
  async getCatFact(): Promise<string> {
    return this.appService.getCatFact();
  }

  @Get('jokes/types')
  getJokeTypes() {
    return this.appService.getJokeTypes();
  }

  @Get('jokes/:type')
  async getJokesByType(@Param('type') type: string): Promise<Joke[]> {
    return this.appService.getJokesByType(type);
  }
}

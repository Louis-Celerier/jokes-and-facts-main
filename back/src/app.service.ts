/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CatFactApiResult, Joke } from './type';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {

  private readonly jokeTypes = [
    'general', 'programming', 'knock-knock'
  ];
  constructor(private readonly httpService: HttpService) {}

  getJokeTypes(): string[] {
    return this.jokeTypes;
  }

  getHello(): string {
    return 'Hello World!';
  }

  async getCatFact(): Promise<string> {
    const { data } = await firstValueFrom(
      this.httpService.get<CatFactApiResult>('https://catfact.ninja/fact'),
    );

    return data.fact;
  }

  async getJokesByType(type: string): Promise<Joke[]> {
    const response = await firstValueFrom(
      this.httpService.get(`https://official-joke-api.appspot.com/jokes/${type}/ten`)
    );

    return response.data;
  }

}

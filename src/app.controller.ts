import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class Hello {
  @Expose()
  @IsString()
  hello!: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  postHello(@Body() testBody: Hello): string {
    return testBody.hello
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse,ApiCreatedResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: '서버 접속 테스트용 API. "Hello world!"를 반환한다.', description: '서버 접속 테스트용 API. "Hello world!"를 반환한다.' })
  @ApiResponse({ description: 'Hello world!',status:200})
  getHello(): string {
    return this.appService.getHello();
  }
}

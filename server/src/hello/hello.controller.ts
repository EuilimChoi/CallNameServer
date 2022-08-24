import { Controller,Get, HttpCode, Param, Query } from '@nestjs/common';
import { HelloService } from './hello.service';
import { ApiTags, ApiOperation, ApiResponse,ApiCreatedResponse } from '@nestjs/swagger';

@Controller('hello')
export class HelloController {
    constructor(private readonly helloService: HelloService) {}

    @Get()
    @HttpCode(200)
    @ApiOperation({ summary: 'URL의 name 쿼리에게 인사를 한다.', description: 'URL의 name 쿼리에게 인사를 한다.' })
    @ApiResponse({ description: '홍길동님. 안녕하세요.', status:200})
    getHello(@Query('name') name:string): string {
        return this.helloService.callName(name);
    }
}

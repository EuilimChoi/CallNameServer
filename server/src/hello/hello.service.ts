import { Injectable ,HttpCode} from '@nestjs/common';

@Injectable()
export class HelloService {
    callName(name:string): string {
        return `${name}님. 안녕하세요.`;
      }
}

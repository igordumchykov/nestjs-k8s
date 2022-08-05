import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  @Inject(ConfigService)
  private config: ConfigService;

  getHello(): string {
    const app = this.config.get('app-name')
    const psw = this.config.get('app-password')
    return `name: ${app}, password: ${psw}`;
  }
}

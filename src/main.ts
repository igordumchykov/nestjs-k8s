import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const logLevels = configService.get('app_log_levels').split(',');
  console.log(logLevels)

  await app.listen(3000);
}
bootstrap();

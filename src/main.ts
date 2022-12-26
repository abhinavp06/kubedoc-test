import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);

  await app.listen(configService.get<string>('PORT'));

  Logger.log(
    `ENV VARIABLES:\n PORT: ${configService.get<string>(
      'PORT',
    )}, NODE_ENV: ${configService.get<string>('NODE_ENV')}`,
  );
}
bootstrap();

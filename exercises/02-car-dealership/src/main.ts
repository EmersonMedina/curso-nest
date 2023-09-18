import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // only allows the properties mentioned in the DTO
      forbidNonWhitelisted: true, // throws an error if there is any extra property
    })
  )
  await app.listen(3000);
}
bootstrap();

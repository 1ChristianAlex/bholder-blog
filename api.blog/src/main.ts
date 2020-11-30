import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_PORT, APP_URL } from 'config/Envs';
import helmet from 'helmet';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(helmet());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      skipMissingProperties: false,
      whitelist: true,
    }),
  );
  await app.listen(APP_PORT);
}

bootstrap().then(() => {
  console.log(`Aplication running on http://${APP_URL}:${APP_PORT}`);
});

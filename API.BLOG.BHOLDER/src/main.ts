import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_PORT, APP_URL } from 'config/Envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(APP_PORT);
}

bootstrap().then(() => {
  console.log(`Aplication running on http://${APP_URL}:${APP_PORT}`);
});

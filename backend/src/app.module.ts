import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { envPath, dbConfig } from 'config/configFile';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule, UserModule } from 'modules';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: envPath }),
    TypeOrmModule.forRoot(dbConfig),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

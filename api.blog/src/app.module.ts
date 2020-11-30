import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { envPath, dbConfig } from 'config/ConfigFile';
import { AppController } from './app.controller';
// import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { AuthModule, UserModule, PostModule } from 'modules';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
@Module({
  imports: [
    // GraphQLModule.forRoot({
    //   autoSchemaFile: graphQLSchemaPath,
    // }),
    ConfigModule.forRoot({ envFilePath: envPath }),
    TypeOrmModule.forRoot(dbConfig),
    MulterModule.register({
      storage: memoryStorage(),
    }),
    AuthModule,
    UserModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

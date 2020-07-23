import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { envPath, dbConfig } from 'config/configFile';
import { AppController } from './app.controller';
// import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { AuthModule, UserModule, PostModule } from 'modules';

@Module({
  imports: [
    // GraphQLModule.forRoot({
    //   autoSchemaFile: graphQLSchemaPath,
    // }),
    ConfigModule.forRoot({ envFilePath: envPath }),
    TypeOrmModule.forRoot(dbConfig),

    AuthModule,
    UserModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

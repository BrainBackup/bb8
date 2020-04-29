import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

import { JwtService } from '@nestjs/jwt';
const Configuration = configuration();

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": Configuration.database.host,
      "port": Configuration.database.port,
      "username": Configuration.database.username,
      "password": Configuration.database.password,
      "database": Configuration.database.name,
      "entities": ["dist/**/*.entity.js"],
      "synchronize": true
    }),
    UsersModule,
    ConfigModule.forRoot({
      load: [configuration]
    })
  ],
  controllers: [AppController, AuthenticationController],
  providers: [AppService, AuthService, UsersService, JwtService],
})
export class AppModule{}

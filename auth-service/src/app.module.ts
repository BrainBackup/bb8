import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
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
  providers: [AppService, AuthenticationService, ],
})
export class AppModule{}

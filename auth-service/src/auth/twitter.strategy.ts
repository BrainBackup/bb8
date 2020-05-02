import { ExtractJwt, Strategy } from 'passport-twitter';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import { jwtConstants } from './constants';

@Injectable()
export class TwitterStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      consumerKey: configService.get<string>('twitter.key'),
      consumerSecret: configService.get<string>('twitter.secret'),
      callbackURL: configService.get<string>('twitter.callback')
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}

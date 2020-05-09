import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import configuration from './config/configuration';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const Configuration = configuration();
  const options = new DocumentBuilder()
    .setTitle('Text Service')
    .setDescription('Text service should provide all apis for storing and retrieve text data for bb project')
    .setVersion('1.0')
    .addTag('text')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(Configuration.port);
}
bootstrap();

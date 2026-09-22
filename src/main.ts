import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from '../node_modules/zod/src/v4/core/core';
import { ConfigService } from '@nestjs/config';
import { Env } from './config/env.schema';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configServices= app.get(ConfigService<Env, true>)
  const port= configServices.getOrThrow("PORT", {infer: true})
  
  await app.listen(port);


  console.log(`Server running on port ${port}`)
}
bootstrap();

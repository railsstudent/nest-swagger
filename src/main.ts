import { NestFactory } from '@nestjs/core'
import helmet = require('helmet')
import * as compression from 'compression'
import * as morgan from 'morgan'
import * as cors from 'cors'
import * as express from 'express'
import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(compression())
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(morgan('dev'))
  app.use(helmet())
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  )

  const configService = app.get(ConfigService)
  const version = configService.get<string>('API_VERSION', '1.0')

  const config = new DocumentBuilder()
    .setTitle('Swagger Task example')
    .setDescription('The task API description')
    .setVersion(version)
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  const port = configService.get<number>('PORT', 0)
  await app.listen(port)
}
bootstrap()
  .then(() => console.log('Application started successfully'))
  .catch(console.error)

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Habilitar CORS
  app.enableCors();
  
  // Configurar Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Gestión de Usuarios y Tareas')
    .setDescription('Documentación de endpoints para gestionar usuarios y tareas')
    .setVersion('1.0.0')
    .addTag('Usuarios', 'Operaciones relacionadas con usuarios')
    .addTag('Tareas', 'Operaciones relacionadas con tareas')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  
  // Servir archivos estáticos desde public/
  app.useStaticAssets(join(__dirname, '..', 'public'));
  
  const port = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000;
  await app.listen(port);
  console.log(`Application listening on port ${port}`);
  console.log(`Swagger documentation available at http://localhost:${port}/api/docs`);
}

bootstrap();
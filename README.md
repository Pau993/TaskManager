# TASK MANAGER

En esta prueba se realizó la contrucción de un servidor Web


## Descripción de la aplicación 📖

Gestión de Usuarios y Tareas es una aplicación web full-stack para administrar usuarios y sus tareas asociadas. Incluye backend API REST con documentación Swagger, frontend responsivo, base de datos PostgreSQL, y está completamente dockerizada.

## Diagrama de Arquitectura 📊

Este diagrama representa la arquitectura de un servidor HTTP desarrollado en Java sin frameworks web. A continuación, te explico los principales componentes y su interacción:

* Usuario (User): Representa al cliente que accede a los recursos del servidor a través de un navegador web.

* Navegador (Browser): Solicita diferentes recursos al servidor HTTP. Estas solicitudes incluyen:

Archivos estáticos como index.html, script.js, estilos.css e imágenes (Imagen/Chill.jpg).
Endpoints dinámicos como /pi y /greeting.
Servidor HTTP (HttpServer): Maneja las solicitudes entrantes y sirve los recursos solicitados. Depende de un módulo llamado Utils, que posiblemente se encarga de procesar las solicitudes y gestionar las respuestas.

Módulo Utils: Parece ser una capa intermedia que ayuda al HttpServer a procesar y responder a las solicitudes. Este módulo podría encargarse de:

* Manejo de rutas.
* Procesamiento de datos.
* Conversión de respuestas.
* Recursos: Representan servidores o bases de datos que el HttpServer consulta para obtener información y responder adecuadamente a las solicitudes.

* Comunicación HTTP: Indica que el HttpServer interactúa con servicios externos a través de HTTP, posiblemente para obtener datos adicionales.

* Flujo de trabajo:
El usuario accede al navegador y solicita una URL (http://<Server>:35000/index.html).
El navegador envía la petición al HttpServer.
* HttpServer procesa la solicitud con ayuda del módulo Utils:
Si es un archivo estático, lo busca y lo devuelve.
Si es una solicitud dinámica (/pi o /greeting), podría consultar recursos externos antes de generar la respuesta.
Si la solicitud requiere comunicación con otro servicio, HttpServer envía una petición HTTP a los Recursos y espera la respuesta.
Finalmente, HttpServer devuelve el contenido solicitado al navegador.

![image](https://github.com/user-attachments/assets/1c4560c7-ee88-4666-9ff4-5154bec0710d)

Este diagrama describe un servidor HTTP básico capaz de manejar solicitudes de archivos estáticos y procesar peticiones dinámicas con ayuda de un módulo intermedio (Utils). Además, puede comunicarse con servicios externos para obtener información adicional.

## Diagrama de Clase 📊

Este diagrama de clases representa la arquitectura de un microframework para servicios REST, dividiendo la funcionalidad en varias clases e interfaces.

Las clases principales (Request, Response, HttpServer) manejan las solicitudes, respuestas y la lógica del servidor, mientras que las interfaces (Route) definen cómo implementar rutas personalizadas.

![image](https://github.com/user-attachments/assets/3416f27c-f056-4eaf-b48e-11aa1c23078c)


## Comenzando 🚀

Las siguientes instrucciones le permitirán obtener una copia del proyecto en funcionamiento en su máquina local para fines de desarrollo y prueba.

### Tecnologías Utilizadas
## Backend
* NestJS 9: Framework Node.js con TypeScript
* TypeORM: ORM para gestión de base de datos
* PostgreSQL: Base de datos relacional
* Swagger: Documentación interactiva de API
* Jest: Testing unitario
## Frontend
* HTML5 / CSS3 / JavaScript: Interfaz responsiva
* Tablas profesionales: Visualización de datos
API REST: Comunicación con el backend
## DevOps
* Docker: Containerización de la aplicación
* Docker Compose: Orquestación de servicios (App + PostgreSQL)

### Instalación 📦

Realice los siguientes pasos para clonar el proyecto en su máquina local.

```
git clone https://github.com/Pau993/Taller03.git
cd Taller03
git checkout Taller03
mvn clean compile
```

### Ejecutando la aplicación ⚙️

Para ejecutar la aplicación, ejecute el siguiente comando:

```
# Instalación inicial
npm install --legacy-peer-deps

# Desarrollo (auto-reload)
npm run start:dev

# Producción
npm run build
npm run start

# Con Docker
docker-compose up --build

# Tests
npm run test

```
El anterior comando limpiará las contrucciones previas, compilará y empaquetará el código en un jar y luego ejecutará la aplicación.

## Ver la Aplicación: 💿

Diríjase a http://localhost:3000/ en su navegador para ver la aplicación en funcionamiento

## Ejecutando las pruebas ⚙️

Para ejecutar las pruebas, ejecute el siguiente comando:

Las pruebas realizadas en este proyecto se enfocan en la validación y verificación de requisitos relacionados con el proceso de gestión de solicitudes, asegurando su correcto funcionamiento y cumplimiento de especificaciones.

```
mvn test
```
![image](https://github.com/user-attachments/assets/acc5fdc4-897f-492d-96b2-7de303b742da)

## Tests Unitarios ✏️

Implementados con Jest:

✅ users.service.spec.ts: 3 casos de prueba
✅ users.controller.spec.ts: 3 casos de prueba

```
npm run test          # Ejecutar tests
npm run test:watch   # Modo watch
npm run test:cov     # Con cobertura
```

## Características principales: ⚙️

1. Interfaz moderna y responsiva: 💎

* Interfaz Moderna y Responsiva:
* Diseño minimalista con un esquema de colores sofisticado.
* Adaptable a diferentes dispositivos gracias a su diseño responsivo.
* Gestión de Archivos:
* Botones interactivos para abrir y visualizar archivos clave como JavaScript, CSS, HTML e imágenes.

2. Gestión de archivos: ⚙️

* Incluye botones interactivos que permiten abrir y visualizar archivos clave como:
* Archivos JavaScript (script.js).
* Hojas de estilo CSS (estilos.css).
* Documentos HTML (index.html).

# Muestra de la aplicación 🧩

https://github.com/user-attachments/assets/e10ee1d8-7a61-4e27-8904-e05577a7b7a7

## Autores ✒️

*Paula Natalia Paez Vega* - *Initial work* - [Paulinguis993](https://github.com/Paulinguis993)

## Licencia 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

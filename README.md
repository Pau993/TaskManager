# TASK MANAGER

En esta prueba se realizó la contrucción de un servidor Web


## Descripción de la aplicación 📖

Gestión de Usuarios y Tareas es una aplicación web full-stack para administrar usuarios y sus tareas asociadas. Incluye backend API REST con documentación Swagger, frontend responsivo, base de datos PostgreSQL, y está completamente dockerizada.

## Tecnologías Utilizadas
### Backend
* NestJS 9: Framework Node.js con TypeScript
* TypeORM: ORM para gestión de base de datos
* PostgreSQL: Base de datos relacional
* Swagger: Documentación interactiva de API
* Jest: Testing unitario
### Frontend
* HTML5 / CSS3 / JavaScript: Interfaz responsiva
* Tablas profesionales: Visualización de datos
API REST: Comunicación con el backend
### DevOps
* Docker: Containerización de la aplicación
* Docker Compose: Orquestación de servicios (App + PostgreSQL)

### Instalación 📦

Realice los siguientes pasos para clonar el proyecto en su máquina local.

```
git clone https://github.com/Pau993/TaskManager.git
cd TaskManager
git checkout TaskManager
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

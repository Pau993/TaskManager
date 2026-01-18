# TASK MANAGER

En este taller se realizó la contrucción de un servidor Web, tipo apache en java, el cual es capaz de entregar páginas HTML e imagenes tipo PNG.


## Descripción de la aplicación 📖

La aplicación es un microframework en Java que configura y ejecuta un servidor HTTP simple. Este microframework proporciona una forma sencilla de configurar y ejecutar un servidor HTTP con rutas básicas y soporte para archivos estáticos.

La aplicación es ideal para comprender los fundamentos del desarrollo de frameworks web para servicios REST, permitiendo manejar parámetros de consulta, definir servicios REST y gestionar archivos estáticos.

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

### Tecnologías usadas ⚙️

* [Maven](https://maven.apache.org/) : Gestor de dependencias y automatización de construcción para Java.
* [JavaScript](https://nodejs.org/) : Lenguaje de programación para interactividad en la web.
* [Java](https://www.java.com/es/) : Lenguaje de programación robusto para backend y aplicaciones empresariales.
* [html](https://developer.mozilla.org/es/docs/Web/HTML) : Lenguaje de programación que define la estructura de las páginas web

```
* Versión Maven: 3.9.9
* Versión Java: 21
```

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
mvn exec:java -Dexec.mainClass="com.example.HttpServer"

```
El anterior comando limpiará las contrucciones previas, compilará y empaquetará el código en un jar y luego ejecutará la aplicación.

## Ver la Aplicación: 💿

Diríjase a http://localhost:35000/ en su navegador para ver la aplicación en funcionamiento

## Ejecutando las pruebas ⚙️

Para ejecutar las pruebas, ejecute el siguiente comando:

Las pruebas realizadas en este proyecto se enfocan en la validación y verificación de requisitos relacionados con el proceso de gestión de solicitudes, asegurando su correcto funcionamiento y cumplimiento de especificaciones.

```
mvn test
```
![image](https://github.com/user-attachments/assets/acc5fdc4-897f-492d-96b2-7de303b742da)

## Descripción de las pruebas ✏️

* testHandleApiRequestSaludo 🛠️

Verifica que la solicitud a la ruta /api/saludo responde con HTTP 200 OK y contiene el mensaje JSON esperado.
* testHandleApiRequestFecha 📅

Valida que la solicitud a /api/fecha devuelve HTTP 200 OK y contiene una clave "fecha" en la respuesta.
* testHandleApiRequestNotFound ❌

Comprueba que una ruta inexistente, como /api/desconocido, devuelve HTTP 404 Not Found.
* testHandleApiPostRequest 📤

Evalúa que una solicitud POST a /api/enviar con un cuerpo JSON sea procesada correctamente y responda con HTTP 200 OK y el mensaje

* testHandleApiRequestHello ✏️

Esta prueba verifica que el servidor HTTP maneje correctamente una solicitud a la ruta "/api/hello".

* testHandleApiRequestPi ✏️

Esta prueba verifica que la solicitud al método greeting del controlador GreetingController con un parámetro name devuelve un saludo personalizado.

* testHandleApiRequestGreeting ✏️

Estas pruebas aseguran que los métodos del controlador GreetingController están devolviendo las respuestas correctas cuando se les pasa un parámetro específico.

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
* Imágenes (Chill.jpg).

# Muestra de la aplicación 🧩

https://github.com/user-attachments/assets/228f71e7-3696-413b-8d8a-b19b412c0104

## Autores ✒️

*Paula Natalia Paez Vega* - *Initial work* - [Paulinguis993](https://github.com/Paulinguis993)

## Licencia 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

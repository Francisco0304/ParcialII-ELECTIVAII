# Gestión de Equipos de Fútbol

## Descripción

Este repositorio contiene una aplicación web para gestionar equipos de fútbol. Permite realizar operaciones como agregar equipos, obtener información de equipos existentes por su ID, actualizar la información de equipos y eliminar equipos.

## Requisitos Previos

- Node.js instalado en el sistema.
- Express: El marco de aplicación web de Node.js.
- Body-parser: Un middleware que analiza los cuerpos de las solicitudes entrantes en una cadena de texto.
- Mongoose: Una biblioteca de modelado de objetos MongoDB para Node.js.
- MongoDB: Un sistema de base de datos NoSQL.

## Instalación

1. Clona este repositorio en su máquina local.
2. Abrir una terminal en la carpeta del proyecto.
3. Ejecuta el comando `npm install` para instalar las dependencias.

## Uso

1. Ejecuta el servidor con el comando `nodemon index.js`.
2. Utiliza los siguientes endpoints para interactuar con la API:
   - `GET /api/teams`: Obtiene todos los equipos.
   - `GET /api/teams/:id`: Obtiene un equipo por su ID.
   - `POST /api/teams`: Crea un nuevo equipo.
   - `PUT /api/teams/:id`: Actualiza un equipo existente.
   - `DELETE /api/teams/:id`: Elimina un equipo existente.

## Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript (Frontend y Backend)

## Licencia

Este proyecto está bajo la licencia del usuario, destinado para un parcial de la materia ELECTIVA II, UPTC Sogamoso.

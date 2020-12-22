#descargar e instalar nodejs
FROM node:12-alpine 
#define directorio de trabajo para el proyecto
WORKDIR /webpush
#copia los archivos que definen el proyecto
COPY package*.json /
#instala las dependencias
RUN npm install 
#copia los archivos fuentes al directorio de trabajo
COPY . .
#copia la aplicacion
#CMD ["npm","start"]


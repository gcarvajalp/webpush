# Webpush

Repositorio para notificaciones con el protocolo web push

## Table of contents

- [Description](#descripcion)
- [Getting Started](#getting-started)
- [Documentation](#documentation)
- [Configuration Params](#configuration-params)


## Descripcion

Aplicación back-end para el envio de notificaciones encriptadas utilizando nodejs para el back-end, docker como contenedor   

## Getting Started

Este repositorio puede iniciarse para el ambiente de desarrollo o producción de manera manual, además de, ejecutar con todas sus dependencias desde docker. 

### developer environment

Para el ambiente de desarrollo se puede iniciar el proceso el servidor, hacer los cambios en tiemmpo real y ver reflejado estos cambios sin la necesidad de reinicar el servidor, para esto ejecute los siguientes comandos

```sh
npm run dev
```

### production environment

para el ambiente de produccion sin la ejecución desde un contenedor, se puede iniciar el servidor con el siguiente comando.

```sh
npm start
```

### production environment with docker

Dockerfile command para construir la imagen del proyecto

```sh
docker build -t webserver-image:v1 .
```

Dockerfile command to deploy image

```sh
docker run -d -p 80:80 webserver-image:v1
```

Dockerfile command to delete image

```sh
```

## Documentation


## Configurations params

Puede cambiar los parametros de configuracion creando un archivo .env
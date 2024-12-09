# App 

## Requisitos del Sistema

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [Ionic CLI](https://ionicframework.com/docs/cli) (instalación: npm install -g @ionic/cli)
- [API Random Duck](https://random-d.uk/api): Acceso a internet e implementación para consumo usando proxy

## Instalación

1. Clona el repositorio:

   git clone https://github.com/belkyslopez/app-random-img.git
   cd app-random-img
   

2. Instala las dependencias:

   npm install

3. Implementación Proxy
Ejecutar los siguientes comando dentro de proxy/index.js

```
 nmp init -y
 npm install http-proxy
 node index 
```

## Ejecuta la Aplicación
ionic serve

Esto abrirá la aplicación en tu navegador predeterminado en http://localhost:8100.

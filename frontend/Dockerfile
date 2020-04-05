#Maintainer <Irving Sanchez> 
# Lo iniciamos con la imagen official de Node 8
FROM node:13
# Vamos a crear un directorio donde dejar la aplicación Angular
RUN mkdir -p /usr/front
# Nos cambiamos a ese directorio 
WORKDIR /usr/front
# Copiamos el paquete json para gestionar las dependencias
COPY frontend/package.json /usr/front
# Instalamos esas depndencias
RUN npm install
#instalamos angular
RUN npm i -g @angular/cli
# Copiamos el código que hemos generado en el punto anterior, al crear la aplicación angular-cli
COPY frontend/. /usr/front
# IMPORTANTE Copiamos el directorio angular-bootstrap-md para que levante sin errores nuestra aplicacion
COPY frontend/angular-bootstrap-md /usr/front/node_modules
# Exponemos el Puerto
EXPOSE 4200
# Arrancamos
CMD ["npm", "start"]

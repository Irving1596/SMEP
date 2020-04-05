# Lo iniciamos con la imagen oficial de Node 8
FROM node:13
# Vamos a crear un directorio donde dejar la aplicación
RUN mkdir -p /usr/back
# Nos cambiamos a ese directoria
WORKDIR /usr/back
# Copiamos el paquete json para gestionar las dependencias 
COPY backend/package.json /usr/back
# Instalamos esas depndencias
RUN npm install
# Copiamos el código que hemos generado en el punto anterior,
#al crear la aplicación express
COPY . /usr/back
# Exponemos el Puerto
EXPOSE 3200
# Arrancamos
CMD ["node","index.js"]

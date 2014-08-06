Tienda
======

tienda para vender productos por internet (muuuy beta xd)

Instalación de Tienda en localhost Debian

**1.    clonar el proyecto (el repositorio) en `/var/www/`.**

**2.	Instalación de Node.js y npm mongodb .**

**3.	crear archivo tienda.mk.**
* `cd /etc/apache2/sites-available/`
* `sudo cp default tienda.mk`
* `sudo nano tienda.mk`
* modificar para que quede de esta manera:

`<VirtualHost *:80>`

        `ServerAdmin webmaster@localhost`

        `ServerName tienda.mk`

        `ServerAlias tienda.mk`

        `DocumentRoot /var/www/tienda/public`


**4.	modificar hosts.**

* `sudo nano /etc/hosts`
* agregar `127.0.0.1  tienda.mk`
* correr `sudo a2ensite tienda.mk`
* reiniciar servidor apache `sudo service apache2 restart`

**5. instalar dependencias.**
* en `var/www/tienda/` correr `npm install`


**6. correr el servidor node localizado en `var/www/tienda/server/server.js` y Enjoy!.**
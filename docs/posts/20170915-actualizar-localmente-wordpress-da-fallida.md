---
title: Actualizar localmente wordpress da fallida
link: http://fideox.federicomazzei.com.ar/actualizar-localmente-wordpress-da-fallida/
author: Fideo
description: Cuando te da error al actualizar localmente wordpress
post_id: 1254
created: 2017/09/15 11:23:47
created_gmt: 2017/09/15 14:23:47
comment_status: open
name: 20170915-actualizar-localmente-wordpress-da-fallida
id: 20170915-actualizar-localmente-wordpress-da-fallida
status: publish
post_type: post
---

# Actualizar localmente wordpress da fallida la actualización

Tengo algunos clientes que usan WordPress como CMS de su sitio y para actualizarles los plugins o  a la versión mas reciente de este CMS prefiero hacerlo localmente (es decir en una máquina que no sea producción) para / por si hay errores que no impacten directamente al cliente que estaría visitando la página. 
También de esta forma logramos que no se pierda acceso al sitio. 
El error se presenta cuando lo quería actualizar, ya sea plugins o versión de wordpress, me encontraba con un error que dice conexión fallida. Esto se debe a que no está habilitado en el servidor php la extensión php_curl que permite por este medio descargar esas actualizaciones. 

Para esto lo que necesitamos es editar el php.ini que se encutra en la raiz de nuestro php en windows en mi caso es c:\php\php.ini

## Editar el php.ini

`;extension=php_curl.dll` y lo dejamos así `extension=php_curl.dll` 

Para los que usan *linux* el php.ini se encuentra en /etc/php/7.0/apache2/php.ini para los que usan Ubuntu como yo. Mismo caso que Windows para editar este archivo, buscamos `;extension=php_curl.dll` y lo dejamos así `extension=php_curl.dll` 

En ambos casos (Windows y Linux) una vez realizada esta modificación hay que reiniciar el servidor. Esto va a depender si tienen instalado Apache o nginx. 

**_Enjoy!!!_**

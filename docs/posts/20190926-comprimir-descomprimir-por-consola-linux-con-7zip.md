---
title: Comprimir y descomprimir archivos o directorios con 7zip
link: 
author: Fideo
description: Desde la consola se puede comprimir archivo o directorios con un simple comando
post_id: 1286
created: 2019/09/26 13:30:35
created_gmt: 2019/09/26 13:30:35
comment_status: open
name: 20190926-comprimir-descomprimir-por-consola-linux-con-7zip
id: 20190926-comprimir-descomprimir-por-consola-linux-con-7zip
status: publish
post_type: post
---

## Comprimir

Si se necesita comprimir una carpeta o un archivo lo que se necesita hacer es lo siguiente:

```bash
#!/bin/bash
7z a archivo_comprimido.7z /ruta/a/carpetas/ /ruta/a/archivos
````

A fines prácticos si se necesita realizar una compresión de un directorio o carpeta el comando sería el siguiente:

```bash
#!/bin/bash
7z a directorios_comprimidos.7z /ruta/a/carpetas/ 
````

si fuese un archivo solo el comando sería el siguiente

```bash
#!/bin/bash
7z a archivo_comprimido.7z /ruta/a/archivos 
````


---

## Extraer

Para poder extrar el contenido de un archivo zipeado ya sea con la extensión .zip o .7z

```bash
#!/bin/bash
7z e archivo_a_extraer_el_contenido.7z
````

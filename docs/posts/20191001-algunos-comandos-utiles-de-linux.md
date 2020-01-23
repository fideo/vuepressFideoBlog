---
image: /images/blog/20191001-algunos-comandos-utiles-de-linux/_main.jpg
title: Algunos comandos útiles de Linux
author: Fideo
description: Comandos que pueden ser útiles en el manejo diario de Linux
post_id: 1256
created: 2019/10/01 11:00:00
created_gmt: 2019/10/01 11:00:00
comment_status: open
name: 20191001-algunos-comandos-utiles-de-linux
id: 20191001-algunos-comandos-utiles-de-linux
status: publish
post_type: post
date: 01-10-19 (dd-mm-yy)
---


## ¿Que debo ejecutar para saber si mi linux es de 32 Bits o de 64 Bits?

Para ver que tipo de arquitectura es nuestro sistema operativo Linux que estoy usando; es decir, si es de 32 Bits o de 64 Bits; para eso se ejecuta en consola el siguiente comando

```bash
#!/bin/bash
uname -m
```

donde muestra i686 para los sistemas operativos de 32 Bits y x86_64 para los que son de 64 Bits.


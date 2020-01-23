---
title: Reaction Commerce en tu servidor
link: http://fideox.federicomazzei.com.ar/reaction-commerce-usando-propio-servidor/
author: Fideo
description: Utilizar el e-Commerce de ReactionCommerce en tu propio servidor
post_id: 1278
created: 2017/09/25 19:49:48
created_gmt: 2017/09/25 22:49:48
comment_status: open
name: 20170925-reaction-commerce-usando-propio-servidor
id: 20170925-reaction-commerce-usando-propio-servidor
status: publish
post_type: post
---

# Reaction Commerce usando propio servidor

Les comparto este video que le prometí a <a href="https://alexanderditzend.com/" target="_blank">Alexander Ditzend</a>, el cual muestra como subo al servidor de hosting (en mi caso por el momento DonWeb) la plataforma de Reaction Commerce.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/du7gkeJniu8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Estos son los dos comandos que utilicé en el video.

#### deployreaction.sh

```bash
#!/bin/sh
echo "Generando el deploy de Reaction"
echo "meteor build --server-only ../new_package/ && mv ../new_package/*.tar.gz ./reaction.tar.gz"
fecha=$(date +%d-%m-%Y)
fechahora=$(date +%Y%m%d%H%M%S)
meteor build --server-only ../new_package/ && mv ../new_package/*.tar.gz ./reaction_$fechahora.tar.gz
```

---

<p>&nbsp;</p>
<p>
Lo que hago es simplemente ejecutar el comando
[**meteor build**](https://guide.meteor.com/deployment.html#custom-deployment) pero con el agregado de que cuando termine, mueva el .tar.gz que genera en ../new_package/ a mi directorio de proyecto insertandole la fecha de deploy al nombre del archivo .tzr.gz Esto es para tener un versionado de los deploys.</p>

<p>Luego subo el .tar.gz generado al servidor ya sea por ftp, scp o algún otro método disponible para subirlo.
Una vez arriba el archivo ejecuto el segundo comando (deployUpdate.sh) que se encuentra en el mismo directorio que el .tar.gz </p>

#### deployUpdate.sh

```bash
#!/bin/bash
clear

proyecto='reaction'
usuario='fideo'

echo "Realizando el update del deploy de " $proyecto
echo "Descomprimo el archivo .tar.gz dejado en este mismo directorio"
tar vxzf *.tar.gz

echo "entrando al directorio /home/$usuario/proyectos/$proyecto/tmp/bundle/programs/server"
cd /home/$usuario/proyectos/$proyecto/tmp/bundle/programs/server

echo "npm install --production"
npm install --production

echo "npm prune --production"
npm prune --production directorio="/home/$usuario/proyectos/$proyecto/bundle.old"

# Controlo que exista el $DIRECTORY .
if [ -d "$directorio" ];
    then rm -Rf /home/$usuario/proyectos/$proyecto/bundle.old
fi
echo "cambio de nombre el bundle actual por bundle.old"
mv /home/$usuario/proyectos/$proyecto/bundle /home/fideo/proyectos/reaction/bundle.old

echo "Cambio el nuevo bundle generado en /tmp al directorio de produccion"
mv /home/$usuario/proyectos/$proyecto/tmp/bundle /home/fideo/proyectos/reaction/bundle

echo "reinicio passenger"
passenger-config restart-app /home/fideo/proyectos/reaction/bundle

```

Pueden ver mas funcionalidades sobre este e-Commerce en <a href="https://reactioncommerce.com/" target="_blank">Reaction Commerce</a> el sitio oficial.

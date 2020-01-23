---
title: Utilizar git para tus proyectos en tu servidor
link: http://fideox.federicomazzei.com.ar/crear-un-repositorio-git-en-servidor-propio/
author: Fideo
description: Tus proyectos en casa pero con todo el potencial de git
post_id: 1251
created: 2017/09/15
created_gmt: 2017/09/15 15:17:37
comment_status: open
name: 20170915-crear-un-repositorio-git-en-servidor-propio
id: 20170915-crear-un-repositorio-git-en-servidor-propio
status: publish
post_type: post
---

# Crear un repositorio git en servidor propio

Para crear un repositorio git en servidor propio hay que seguir algunos pasos muy simples, pero deben hacerse en esta secuencia sin alterar nada.

## Servidor

Primero entramos al _**servidor**_ de la forma que estés habituado, en mi caso uso <a href="https://www.putty.org/" target="_blank">putty</a> si es que estoy desde un escritorio remoto; una vez dentro ejecutamos lo siguiente:

```bash
cd ~
 mkdir repositorio.git
 cd repositorio.git
 git --bare init
 git config core.sharedRepository true
```

La primer linea cd ~ nos lleva a la home del usuario, es decir que si el usuario que está logueado es fideo la home sería /home/fideo/ para corroborar esto pueden ejecutar pwd y les mostrará donde están parados luego de ejecutar cd ~ La segunda linea crea un directorio llamado repositorio.git el cual tendrá la información que git necesita para llevar nuestro log de archivos. La tercer linea ingresa al directorio. La cuarta linea le decimos a git inicialize ese directorio como un repositorio git para realizar los pull y push de ese repositorio. La quinta y última linea de esta parte se configura en true la variable core.sharedRepository informandole a git que es un repositorio compartido.

## Local

Una vez terminado lo anterior vamos a la máquina _local_ donde tenemos el código a subir.

```bash
mkdir repositorio
 cd repositorio
 git init
 git add *
 git commit -m "Initial import"
 git remote add origin git+ssh://user@server/home/user/git/repositorio.git
 git push origin master
```

Para poder bajar / clonar con git ese ropositorio solo tenemos que ejecutar este comando

```bash
git clone git+ssh://user@server/home/user/git/repositorio.git
```

#### Algunas de las cositas que pueden servir para usar al crear un repositorio git en servidor propio.

```bash
git pull
 git status
 git log archivo
 git diff 84de2396c3f0fcdc9994028b5bf5f0005c763496 3c933adaf627bc8a58cfefb62ff0f2d5df640673 archivo
```

Eliminar archivos

```bash
git rm archivo
 git commit -m "borro archivo" archivo
 git push
```

Revertir cambios realizados en un archivo específico el cual no hayamos realizado commit

```bash
git checkout -- file
```

Deshacer el último commit no enviado con push `

```bash
git reset --hard HEAD~1
```

Revertir el último cambiado, al que se le ha hecho push

```bash
git push -f origin last_commit:branch
```

Cambiando de ramas Es posible que tengamos varias ramas por ejemplo production (prod) y master. Si estamos en master y queremos pasar los cambios a production se puede hacer lo siguiente:

```bash
git branch origin/prod # en caso de no tenerla se crea la rama origin/prod
 git branch -a # comprobar que realmente estamos en master
 git branch --track prod origin/prod # si no lo tenemos ya asocia prod a origin/prod
 git checkout prod # cambiamos a la rama prod
 git merge master # se merguean los cambios desde master a prod
 git push # se suben los cambios
```

## Mas documentación sobre git

[Documentación oficial](https://git-scm.com/documentation)

[GitHub](https://github.com/)

[Mas información sobre git en este sitio](/category/git/)

Copyright (C) 2017 Federico Mazzei Se permite copiar, distribuir y/o modificar este documento bajo los términos de la GNU Free Documentation License, Version 1.3 o cualquier versión publicada por la Free Software Foundation; sin Secciones Invariantes y sin Textos de Portada o Contraportada. Una copia de la licencia está incluida en [GNU Free Documentation License.](https://www.gnu.org/copyleft/fdl.html) !

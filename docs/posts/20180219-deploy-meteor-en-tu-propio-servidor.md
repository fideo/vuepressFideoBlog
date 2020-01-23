---
title: Deploy Meteor en tu propio servidor
link: 
author: Fideo
description: Describo paso a pasocomo publicar una app Meteor en tu servidor
post_id: 1284
created: 2018/02/19 11:28:42
created_gmt: 2018/02/19 14:28:42
comment_status: open
name: 20180219-deploy-meteor-en-tu-propio-servidor
id: 20180219-deploy-meteor-en-tu-propio-servidor
status: publish
post_type: post
---

# Deploy Meteor en tu propio servidor

Hoy voy a dejar en mi blog asentado como hice para hacer que una aplicación [Meteor](https://guide.meteor.com/deployment.html) esté corriendo en mi servidor / hosting. Por el momento yo tengo mis sites hosteados en [DonWeb](https://donweb.com/) con un servicio de Cloud Server. Accedo a este servicio a través de una consola y en ese server tengo instalado CentOS al momento de escribir esta nota.

```bash
cat /etc/redhat-release #devuelve CentOS Linux release 7.3.1611 (Core)
```

Primero hay que instalar [nginx](https://nginx.org/en/) , [mongodb](https://www.mongodb.com/es) , [meteor](https://www.meteor.com/) y [Passenger](https://www.phusionpassenger.com/) para esto pueden seguir las instrucciones de cada uno de las app en sus respectivos sitios o ver como lo hice yo en el video ;) 

<iframe width="100%" height="400" src="https://www.youtube.com/embed/5sbQyFfw3N8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Igualmente acá les dejo un resumen de los comando a utilizar para instalar cada uno de los servicios en CentOS 7

## Instalando nginx

```bash
1) sudo yum install epel-release

2) sudo yum install nginx 

2) sudo yum install nginx 

3) sudo systemctl start nginx
```

## Instalando MongoDB

```bash
1) sudo vi /etc/yum.repos.d/mongodb-org.repo

 [mongodb-org-3.4] name=MongoDB Repository baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.4/x86_64/ gpgcheck=1 enabled=1 gpgkey=https://www.mongodb.org/static/pgp/server-3.4.asc 
 
 2) sudo yum repolist 
 Salida . . . 
 repo id repo name base/7/x86_64 CentOS-7 - Base extras/7/x86_64 CentOS-7 - Extras mongodb-org-3.2/7/x86_64 MongoDB Repository updates/7/x86_64 CentOS-7 - Updates . . . 
 
 3) sudo yum install mongodb-org 
 
 4) sudo systemctl start mongod 
 
 5) sudo systemctl reload mongod
 ```

## Instalando Meteor

```bash
curl https://install.meteor.com/ | sh
```

## Instalando Node JS

```bash 

1) sudo yum install epel-release

2) sudo yum install nodejs 

3) node --version Salida v0.10.30 

4) sudo yum install npm

```

## Instalando Passenger

```bash
1) sudo yum install -y epel-release yum-utils 
2) sudo yum-config-manager --enable epel 
3) sudo yum clean all && sudo yum update -y 
4) sudo yum install -y pygpgme curl 
5) sudo curl --fail -sSLo /etc/yum.repos.d/passenger.repo https://oss-binaries.phusionpassenger.com/yum/definitions/el-passenger.repo 
6) sudo yum install -y nginx passenger || sudo yum-config-manager --enable cr && sudo yum install -y nginx passenger 
```
Una vez realizado todos estos pasos hay que editar el archivo passenger.conf ubicado /etc/nginx/conf.d/passenger.conf . 
Esto nos permitirá hacer un **deploy meteor en tu propio servidor**. 

```bash
#passenger_root /some-filename/locations.ini; 
#passenger_ruby /usr/bin/ruby; 
#passenger_instance_registry_dir /var/run/passenger-instreg;
``` 

Hay que sacarle el comentario ( # ) y grabarlo el archivo debería quedar así -->

```bash
passenger_root /some-filename/locations.ini; 
passenger_ruby /usr/bin/ruby; 
passenger_instance_registry_dir /var/run/passenger-instreg;
```

Luego se reinicia el servidor nginx 

```bash
sudo service nginx restart
```

Se puede chequear la instalación ejecutando esta linea 

```bash
sudo /usr/bin/passenger-config validate-install
```

y tiene que devolver algo similar a esto 

```bash
* Checking whether this Phusion Passenger install is in PATH... ? 
* Checking whether there are no other Phusion Passenger installations... ?
``` 

** Listo ya podés hacer un Deploy de Meteor en tu propio servidor. ** 

[En este link les muestro como realizo un deploy con reaction commerce corriendo en mi propio servidor.](/blog/20170925-reaction-commerce-usando-propio-servidor)

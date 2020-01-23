(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{213:function(e,a,s){"use strict";s.r(a);var t=s(0),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"reaction-commerce-usando-propio-servidor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reaction-commerce-usando-propio-servidor","aria-hidden":"true"}},[e._v("#")]),e._v(" Reaction Commerce usando propio servidor")]),e._v(" "),s("p",[e._v("Les comparto este video que le prometí a "),s("a",{attrs:{href:"https://alexanderditzend.com/",target:"_blank"}},[e._v("Alexander Ditzend")]),e._v(", el cual muestra como subo al servidor de hosting (en mi caso por el momento DonWeb) la plataforma de Reaction Commerce.")]),e._v(" "),s("iframe",{attrs:{width:"100%",height:"400",src:"https://www.youtube.com/embed/du7gkeJniu8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v(" "),s("h2",{attrs:{id:"estos-son-los-dos-comandos-que-utilice-en-el-video"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#estos-son-los-dos-comandos-que-utilice-en-el-video","aria-hidden":"true"}},[e._v("#")]),e._v(" Estos son los dos comandos que utilicé en el video.")]),e._v(" "),s("h4",{attrs:{id:"deployreaction-sh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployreaction-sh","aria-hidden":"true"}},[e._v("#")]),e._v(" deployreaction.sh")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/bin/sh")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Generando el deploy de Reaction"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"meteor build --server-only ../new_package/ && mv ../new_package/*.tar.gz ./reaction.tar.gz"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("fecha")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("date")]),e._v(" +%d-%m-%Y"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("fechahora")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("date")]),e._v(" +%Y%m%d%H%M%S"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\nmeteor build --server-only "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/new_package/ "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/new_package/*.tar.gz ./reaction_"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$fechahora")]),e._v(".tar.gz\n")])])]),s("hr"),e._v(" "),s("p",[e._v(" ")]),e._v(" "),s("p",[e._v("\nLo que hago es simplemente ejecutar el comando\n[**meteor build**](https://guide.meteor.com/deployment.html#custom-deployment) pero con el agregado de que cuando termine, mueva el .tar.gz que genera en ../new_package/ a mi directorio de proyecto insertandole la fecha de deploy al nombre del archivo .tzr.gz Esto es para tener un versionado de los deploys.")]),e._v(" "),s("p",[e._v("Luego subo el .tar.gz generado al servidor ya sea por ftp, scp o algún otro método disponible para subirlo.\nUna vez arriba el archivo ejecuto el segundo comando (deployUpdate.sh) que se encuentra en el mismo directorio que el .tar.gz ")]),e._v(" "),s("h4",{attrs:{id:"deployupdate-sh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployupdate-sh","aria-hidden":"true"}},[e._v("#")]),e._v(" deployUpdate.sh")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/bin/bash")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("clear")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("proyecto")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'reaction'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("usuario")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'fideo'")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Realizando el update del deploy de "')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$proyecto")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Descomprimo el archivo .tar.gz dejado en este mismo directorio"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" vxzf *.tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"entrando al directorio /home/'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$usuario")]),e._v("/proyectos/"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$proyecto")]),e._v('/tmp/bundle/programs/server"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /home/"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$usuario")]),e._v("/proyectos/"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$proyecto")]),e._v("/tmp/bundle/programs/server\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"npm install --production"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --production\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"npm prune --production"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" prune --production "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("directorio")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/home/'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$usuario")]),e._v("/proyectos/"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$proyecto")]),e._v('/bundle.old"')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Controlo que exista el $DIRECTORY .")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" -d "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$directorio")]),e._v('"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("then")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -Rf /home/"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$usuario")]),e._v("/proyectos/"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$proyecto")]),e._v("/bundle.old\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("fi")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cambio de nombre el bundle actual por bundle.old"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" /home/"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$usuario")]),e._v("/proyectos/"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$proyecto")]),e._v("/bundle /home/fideo/proyectos/reaction/bundle.old\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Cambio el nuevo bundle generado en /tmp al directorio de produccion"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" /home/"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$usuario")]),e._v("/proyectos/"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$proyecto")]),e._v("/tmp/bundle /home/fideo/proyectos/reaction/bundle\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"reinicio passenger"')]),e._v("\npassenger-config restart-app /home/fideo/proyectos/reaction/bundle\n\n")])])]),s("p",[e._v("Pueden ver mas funcionalidades sobre este e-Commerce en "),s("a",{attrs:{href:"https://reactioncommerce.com/",target:"_blank"}},[e._v("Reaction Commerce")]),e._v(" el sitio oficial.")])])}),[],!1,null,null,null);a.default=r.exports}}]);
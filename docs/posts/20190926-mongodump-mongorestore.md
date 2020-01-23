---
title: Realizar backup en mongo con mongodump y mongorestore
link: 
author: Fideo
description: Si necesitas hacer un backup de tu base de datos con mongo este artículo te puede ayudar
post_id: 1285
created: 2019/09/26 08:30:35
created_gmt: 2019/09/26 08:30:35
comment_status: open
name: 20190926-mongodump-mongorestore
id: 20190926-mongodump-mongorestore
status: publish
post_type: post
---

## Backup

mongodump --db gastosmensuales --out /home/fideo/dumps/

```bash
#!/bin/bash
clear

echo "Realizando backUp de gastosmensuales en /home/fideo/dumps/"
mongodump --db gastosmensuales --out /home/fideo/dumps/

echo "Termino con exito!!!"
```

## Restore
```bash
#!/bin/bash
mongorestore --port 3001 --host localhost --db meteor /path/a/donde/hayas/descomprimido/el/zip
```

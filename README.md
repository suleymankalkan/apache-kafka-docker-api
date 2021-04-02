# Kartaca Uygulama-Servis Geliştirme Görevi
Süleyman Kalkan

Özel Anahtar Kodu:
```bash
gAAAAABgUImSH93U9If0Ir4vcNIEGwiZijyj1PNu9Yy0XJKaqQy0BFiUX5KR_pbcAFWg9yn0z0VnOIqQiHsf3MJaJTUde8Z8HibbhynZPlwRm3r2DIVCRYCYwC2Z8pvjlUDZz2vYXcm74ZuKiUgel55z3h9VapVtmvXujpCgYv2VVQzHk7jQBn1HuIHJLrFRBaqf0iricLPm
```


## Kurulum

Aşağıdaki komut ile projeyi çalıştırabilirsiniz.

```bash
docker-compose up -d
```
## Canlı Dashboard

```bash
localhost:3000
```

## REST API 
|Metod|URL|
|---|---|
|GET|localhost:3000/restApi/get|
|POST|localhost:3000/restApi/post|
|PUT|localhost:3000/restApi/put|
|DELETE|localhost:3000/restApi/delete|

İstek göndermek için postman gibi bir tool yada aşağıdaki örnek curl komutlarını kullanabilirsiniz.
```bash
curl --request GET http://localhost:3000/restApi/get
curl --request POST http://localhost:3000/restApi/post
curl --request DELETE http://localhost:3000/restApi/delete
curl --request PUT http://localhost:3000/restApi/put
```


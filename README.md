# Apache Kafka & Docker & API Quest for Kartaca
Kartaca Çekirdekten Yetişenler Programı Görevi için yapılmıştır.
Süleyman Kalkan

Özel Anahtar Kodu:
```bash
gAAAAABgUImSH93U9If0Ir4vcNIEGwiZijyj1PNu9Yy0XJKaqQy0BFiUX5KR_pbcAFWg9yn0z0VnOIqQiHsf3MJaJTUde8Z8HibbhynZPlwRm3r2DIVCRYCYwC2Z8pvjlUDZz2vYXcm74ZuKiUgel55z3h9VapVtmvXujpCgYv2VVQzHk7jQBn1HuIHJLrFRBaqf0iricLPm
```

```bash
Tebrikler Süleyman Kalkan görev içeriğine ulaştın!
İşte beklediğimiz görevin gereksinimleri;

- Tercih ettiğiniz bir dil ile(tercihen Java/Go/Php/Python) yapılacak bir Rest API'da GET, POST,PUT ve DELETE isteklerini 
karşılayabilecek 4 farklı endpoint sunulmalıdır.
- POST ve PUT metotları, istekleri boş request body ile kabul edebilmelidir.
- Bu API'ye gelen her istek için random 0-3sn arasında başarılı bir yanıt dönmeli ve yanıt dönülmeden hemen önce "{metot tipi}, {istek 
cevaplama ms}, {time stamp}" gibi bir içerik ile log dosyasına isteğin ne kadar sürdüğü yazılmalıdır. Örn: log:"GET,1000,1614679220"
- Async bir job, log dosyasına anlık olarak yazılan satırları alıp Kafka'ya belirlenen bir formatta göndermelidir. 
- Bir consumer Kafka'ya gönderilen log bilgisini yakalayıp, uygun görülen bir veritabanına yazmalıdır (RD BMS veya NOSQL gibi).
- Son 1 saateki API isteklerinin ne kadar sürede tamamlandıkları bir dashboard ekranında grafik olarak gösterilmeli ve grafik canlı olarak güncellenmelidir.
- İstek tiplerine (PUT, DELETE gibi) göre ayrı renklendirme yapılmalıdır.

Örnek grafik ekran görüntüsü; https://kartaca.com/wp-content/uploads/2021/03/cekirdekten_yetisenler_usg_dashboard.png

Kod deposunu bize iletirken senden istediğimiz sana özel anahtar kodu: gAAAAABgUImSH93U9If0Ir4vcNIEGwiZijyj1PNu9Yy0XJKaqQy0BFiUX5KR_pbcAFWg9yn0z0VnOIqQiHsf3MJaJTUde8Z8HibbhynZPlwRm3r2DIVCRYCYwC2Z8pvjlUDZz2vYXcm74ZuKiUgel55z3h9VapVtmvXujpCgYv2VVQzHk7jQBn1HuIHJLrFRBaqf0iricLPm

Notlar;
	Uygulamanın ve ara yüzün Docker ile nasıl derlenip çalışır hale getirileceği README olarak yazılmışolmalıdır. Docker-compose
üzerinden tek bir komut ile çalışacak şekilde servis edilmedir. Veritabanı gibi bağımlılıklar da içerisinde yer almalıdır. README içerisinde
servid endpoint'lerine nasıl istek atılacağı, ara yüzün adresinin ne olduğu gibi projenin nasıl çalıştırılacağına dair bilgiler yer
almalıdır. 
*Yukarıda verilen sana özel anahtar kodu da README içerisine eklenmelidir.
*Görev içeriğine ulaşmak için kullanılan kod ve proje GitHub, GitLab, Bitbucket gibi erişime açık bir repoya gönderilerek, bağlantı
adresini insankaynakları@kartaca.com 'a iletilmelidir. Kod deposu üzerinden paylaşım sağlanmıyorsa indirilebilir dosyalara ulaşmamız 
için bir dosya/bağlantı iletilmelidir. 
Görevdeki tüm gereksinimleri yerine getiremediyseniz bile, moralinizi bozmayın ve tamamladığınız kadarını bizimle mutlaka paylaşın.
Kolay gelsin!
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


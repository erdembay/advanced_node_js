> - [Middleware Çeşitleri](#middleware-çeşitleri)
> - [Middleware Kullanım Senaryoları](#middleware-kullanım-senaryoları)

## **Middleware Çeşitleri**

- ***Global Middleware:*** Tüm rotalarda çalışan middleware'ler. `app.use()` ile tanımlanır. 
- ***Route-Spesific Middleware:*** Sadece belirli bir rotada çalışan middleware'ler.
```
app.get('/route', (req, res, next) => {
    console.log('Bu sadece /route için çalışır');
    next();
});
```
- ***Third-Party Middleware:*** Harici kütüphaneler tarafından sağlanan middleware'ler (`body-parser`, `cors`).
```
const bodyParser = require('body-parser');
app.use(bodyParser.json());
```
- ***Hata Yakalama Middleware:*** Hataları işlemek için kullanılan özel middleware'ler.
```
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Bir hata oluştu!');
});
```
## **Middleware Kullanım Senaryoları**

- ***Kimlik Doğrulama:*** Kullanıcının oturum açma durumunu kontrol etmek.
- ***Loglama:*** İsteklerin ve yanıtların kaydını tutmak.
- ***Hata Yönetimi:*** Beklenmeyen hataları işlemek.
- ***İstek Verilerini İşlemek:*** JSON veya URL-encoded verileri ayrıştırmak.

---
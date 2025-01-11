# advanced_node_js
# **NodeJS Gelişim DÖKÜMANI**

Bu doküman, nodejs derslerinde notlar alınması ve hatırlatmalar için yazılmaktadır.
<br/>

## **İÇİNDEKİLER**
- [NodeJS Hakkında Bilgi](#nodejs-hakkında-bilgi)
- [Middleware Nedir? Nasıl Çalışır?](#middleware-nedir-nasıl-çalışır)
---

## **NodeJS Hakkında Bilgi**

- `NodeJS projesi oluşturmak` için;
```
npm init
```
<br/>

- `3rd Parti Kütüphane Kurulumları` için;
```
npm i ${packageName}
```
> Örnek : `npm i express`
---

## **Middleware Nedir? Nasıl Çalışır?**
**Middleware Nedir?**
- Node.js'de middleware, bir uygulamanın istek-yanıt döngüsünde belirli bir işlevselliği yerine getiren bir fonksiyondur. Middleware, genellikle bir HTTP isteği geldiğinde, sunucunun bu isteği işlemesi ve istemciye bir yanıt göndermesi sırasında araya giren kod parçalarıdır.

**Middleware Yapısı**

Middleware bir fonksiyondur ve genellikle şu parametreleri alır:
- `req`: İstek (request) nesnesi.
- `res`: Yanıt (response) nesnesi.
- `next`: Bir sonraki middleware fonksiyonuna geçmek için kullanılan bir callback.

> Örnek
```
app.use((req, res, next) => {
    console.log('Middleware çalıştı');
    next(); // Bir sonraki middleware'e geç
});
```
> [Detaylar İçin => ](middleware.md)

---

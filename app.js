const http = require("http"); // http modülü eklendi
const express = require("express"); // express modülü eklendi
const app = express(); // express uygulaması oluşturuldu
const server = http.createServer(app); // http sunucusu oluşturuldu
app.use(express.json()); // express uygulamasına JSON veri türünü kullanacağını belirtildi
app.use((req, res, next) => {
  // middleware fonksiyonu tanımlandı
  console.log("Middleware çalıştı"); // middleware çalıştığında konsola yazı yazdırıldı
  next(); // bir sonraki middleware fonksiyonuna geçiş yapıldı
});
server.listen(3000, () => {
  // sunucu 3000 portunda dinlemeye başladı
  console.log("Server is running on port 3000"); // sunucu başlatıldığında konsola yazı yazdırıldı
  app.get("/", (req, res) => {
    // kök dizine gelen GET isteğine karşılık bir fonksiyon tanımlandı
    res.send({ message: "Helloworld" }); // isteğe karşılık "Hello World" yanıtı gönderildi
  });
});

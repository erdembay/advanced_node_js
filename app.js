const path = require("path"); // path modülü eklendi
const express = require("express"); // express modülü eklendi
const rootDir = require("./utils/path"); // rootDir modülü eklendi
const app = express(); // express uygulaması oluşturuldu
const adminRoutes = require("./routes/admin"); // adminRoutes modülü eklendi
const shopRoutes = require("./routes/shop"); // shopRoutes modülü eklendi
app.use(express.urlencoded({ extended: false })); // urlencoded veri alışverişi için kullanıldı
app.use(express.static(path.join(rootDir, "public"))); // public klasörüne erişim sağlandı
app.use("/admin", adminRoutes); // adminRoutes middleware olarak kullanıldı
app.use(shopRoutes); // shopRoutes middleware olarak kullanıldı
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html")); // 404 durum kodu ile h1 etiketi içeren bir yazı gönderildi
});
app.listen(3000); // 3000 portu dinlenmeye başlandı

const path = require("path"); // path modülü eklendi
const express = require("express"); // express modülü eklendi
const rootDir = require("./utils/path"); // rootDir modülü eklendi
const app = express(); // express uygulaması oluşturuldu
app.set("view engine", "ejs"); // view engine olarak ejs kullanıldı
app.set("views", "views"); // views klasörü belirtildi
const adminData = require("./routes/admin"); // adminRoutes modülü eklendi
const shopRoutes = require("./routes/shop"); // shopRoutes modülü eklendi
app.use(express.urlencoded({ extended: false })); // urlencoded veri alışverişi için kullanıldı
app.use(express.static(path.join(rootDir, "public"))); // public klasörüne erişim sağlandı
app.use("/admin", adminData.routes); // adminRoutes middleware olarak kullanıldı
app.use(shopRoutes); // shopRoutes middleware olarak kullanıldı
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" }); // 404 durum kodu ile 404.ejs sayfası gönderildi
});
app.listen(3000); // 3000 portu dinlenmeye başlandı

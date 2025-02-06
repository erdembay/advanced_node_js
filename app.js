const path = require("path"); // path modülü eklendi
const express = require("express"); // express modülü eklendi
const rootDir = require("./utils/path"); // rootDir modülü eklendi
const app = express(); // express uygulaması oluşturuldu
const errorController = require("./controllers/error"); // errorController modülü eklendi
const mongoConnect = require("./utils/database").mongoConnect; // db modülü eklendi
app.set("view engine", "ejs"); // view engine olarak ejs kullanıldı
app.set("views", "views"); // views klasörü belirtildi
const adminRoutes = require("./routes/admin"); // adminRoutes modülü eklendi
// const shopRoutes = require("./routes/shop"); // shopRoutes modülü eklendi
app.use(express.urlencoded({ extended: false })); // urlencoded veri alışverişi için kullanıldı
app.use(express.static(path.join(rootDir, "public"))); // public klasörüne erişim sağlandı
app.use((req, res, next) => {
  // User.findByPk(1)
  //   .then((user) => {
  //     req.user = user; // user request objesine eklendi
  //     next(); // sonraki middleware'e geçildi
  //   })
  //   .catch((err) => {
  //     console.log(err); // hata konsola yazdırıldı
  //   });
  next();
}); // middleware tanımlandı
app.use("/admin", adminRoutes); // adminRoutes middleware olarak kullanıldı
// app.use(shopRoutes); // shopRoutes middleware olarak kullanıldı
app.use(errorController.get404Page); // 404 hatası için errorController.get404 fonksiyonu kullanıldı
mongoConnect(() => {
  app.listen(3000); // 3000 portu dinlenmeye başlandı
}); // mongoConnect fonksiyonu çalıştırıldı

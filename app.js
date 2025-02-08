const path = require("path"); // path modülü eklendi
const express = require("express"); // express modülü eklendi
const rootDir = require("./utils/path"); // rootDir modülü eklendi
const app = express(); // express uygulaması oluşturuldu
const errorController = require("./controllers/error"); // errorController modülü eklendi
// const mongoConnect = require("./utils/database").mongoConnect; // db modülü eklendi
const mongoose = require("mongoose"); // mongoose modülü eklendi
const User = require("./models/user"); // User modeli eklendi
app.set("view engine", "ejs"); // view engine olarak ejs kullanıldı
app.set("views", "views"); // views klasörü belirtildi
const adminRoutes = require("./routes/admin"); // adminRoutes modülü eklendi
const shopRoutes = require("./routes/shop"); // shopRoutes modülü eklendi
app.use(express.urlencoded({ extended: false })); // urlencoded veri alışverişi için kullanıldı
app.use(express.static(path.join(rootDir, "public"))); // public klasörüne erişim sağlandı
app.use((req, res, next) => {
  User.findById("67a62ba54a6e0600e9dd52de")
    .then((user) => {
      req.user = new User(user.username, user.email, user.cart, user._id); // user request objesine eklendi
      next(); // sonraki middleware'e geçildi
    })
    .catch((err) => {
      console.log(err); // hata konsola yazdırıldı
    });
}); // middleware tanımlandı
app.use("/admin", adminRoutes); // adminRoutes middleware olarak kullanıldı
app.use(shopRoutes); // shopRoutes middleware olarak kullanıldı
app.use(errorController.get404Page); // 404 hatası için errorController.get404 fonksiyonu kullanıldı
// mongoConnect(() => {
//   app.listen(3000); // 3000 portu dinlenmeye başlandı
// }); // mongoConnect fonksiyonu çalıştırıldı
mongoose
  .connect("mongodb://localhost:27017/node-complete")
  .then((result) => {
    console.log("Connected to MongoDB");
    app.listen(3000); // 3000 portu dinlenmeye başlandı
  })
  .catch((err) => {
    console.log(err);
  });

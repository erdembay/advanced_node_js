const path = require("path"); // path modülü eklendi
const express = require("express"); // express modülü eklendi
const rootDir = require("./utils/path"); // rootDir modülü eklendi
const app = express(); // express uygulaması oluşturuldu
const errorController = require("./controllers/error"); // errorController modülü eklendi
const sequelize = require("./utils/database"); // db modülü eklendi
const Product = require("./models/product"); // Product modeli eklendi
const User = require("./models/user"); // User modeli eklendi
app.set("view engine", "ejs"); // view engine olarak ejs kullanıldı
app.set("views", "views"); // views klasörü belirtildi
const adminRoutes = require("./routes/admin"); // adminRoutes modülü eklendi
const shopRoutes = require("./routes/shop"); // shopRoutes modülü eklendi
app.use(express.urlencoded({ extended: false })); // urlencoded veri alışverişi için kullanıldı
app.use(express.static(path.join(rootDir, "public"))); // public klasörüne erişim sağlandı
app.use("/admin", adminRoutes); // adminRoutes middleware olarak kullanıldı
app.use(shopRoutes); // shopRoutes middleware olarak kullanıldı
app.use(errorController.get404Page); // 404 hatası için errorController.get404 fonksiyonu kullanıldı
Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" }); // Product modeli User modeline bağlandı
User.hasMany(Product); // User modeli Product modeline bağlandı
sequelize
  .sync(
    // sequelize ile sync fonksiyonu kullanıldı
    { force: true } // force true olarak ayarland
  )
  .then((result) => {
    // sequelize ile sync fonksiyonu kullanıldı
    // console.log(result); // sonuç konsola yazdırıldı
    User.findByPk(1)
      .then((user) => {
        if (!user) {
          return User.create({
            name: "Max",
            email: "m.erdembay@gmail.com",
          });
        }
        return user;
      })
      .then((user) => {
        app.listen(3000); // 3000 portu dinlenmeye başlandı
      });
  })
  .catch((err) => {
    console.log(err); // hata konsola yazdırıldı
  });

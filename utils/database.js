const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient; // MongoClient modülü eklendi Ne işe yarar? MongoDB veritabanına bağlanmamızı sağlar.
const mongoConnect = (callback) => {
  MongoClient.connect("mongodb://localhost:27017/node-complete")
    .then((result) => {
      console.log("Mongo Connected!"); // bağlantı başarılı konsola yazdırıldı
      callback(result); // callback fonksiyonu çalıştırıldı
    })
    .catch((err) => {
      console.log(err); // hata konsola yazdırıldı
    }); // MongoDB veritabanına bağlanıldı;
};
module.exports = mongoConnect; // mongoConnect fonksiyonu export edildi

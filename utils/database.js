const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient; // MongoClient modülü eklendi Ne işe yarar? MongoDB veritabanına bağlanmamızı sağlar.
let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb://localhost:27017/node-complete?retryWrites=true"
  )
    .then((result) => {
      console.log("Mongo Connected!"); // bağlantı başarılı konsola yazdırıldı
      _db = result.db(); // bağlantı sonucu dönen veritabanı objesi _db değişkenine atandı
      callback(); // callback fonksiyonu çalıştırıldı
    })
    .catch((err) => {
      console.log(err); // hata konsola yazdırıldı
      throw err; // hata fırlatıldı
    }); // MongoDB veritabanına bağlanıldı;
};
const getDb = () => {
  if (_db) {
    return _db; // _db değişkeni varsa döndürüldü
  }
  throw "No database found!"; // _db değişkeni yoksa hata fırlatıldı
};
exports.mongoConnect = mongoConnect; // mongoConnect fonksiyonu dışa aktarıldı
exports.getDb = getDb; // getDb fonksiyonu dışa aktarıldı

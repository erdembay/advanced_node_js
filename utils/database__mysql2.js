const mysql = require("mysql2");
const pool = mysql.createPool({
  // Türkçe : Pool oluştur. Açıklaması: Bu şekilde pool oluşturduğumuzda, bu pool'u dışarıya döndürdüğümüzde, dışarıda bu pool'u kullanan herkesin aynı pool'u kullanmasını garanti etmiş oluyoruz. Avantajı: Pool'u her seferinde yeniden oluşturmak zorunda kalmayız.
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "12345678",
});
module.exports = pool.promise(); // Türkçe : Promise döndür. Açıklaması: Bu şekilde dışarıya pool'u döndürdüğümüzde, dışarıda bu pool'u kullanan herkesin promise döndüğünü garanti etmiş oluyoruz.

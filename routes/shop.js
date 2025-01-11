const path = require("path"); // path modülü eklendi
const rootDir = require("../utils/path"); // rootDir modülü eklendi
const express = require("express"); // express modülü eklendi
const router = express.Router(); // express router oluşturuldu
router.get("/", (req, res, next) => {
  // kök dizine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  res.sendFile(path.join(rootDir, "views", "shop.html")); // isteğe karşılık h1 etiketi içeren bir yazı gönderildi
});
module.exports = router; // router dışarıya aktarıldı

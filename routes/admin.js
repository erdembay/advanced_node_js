const path = require("path"); // path modülü eklendi
const rootDir = require("../utils/path"); // rootDir modülü eklendi
const express = require("express"); // express modülü eklendi
const router = express.Router(); // express router oluşturuldu
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html")); // isteğe karşılık h1 etiketi içeren bir yazı gönderildi
});
router.post("/add-product", (req, res, next) => {
  console.log(req.body); // istek gövdesi konsola yazdırıldı
  res.redirect("/"); // yönlendirme yapıldı
});
module.exports = router; // router dışarıya aktarıldı

const express = require("express"); // express modülü eklendi
const router = express.Router(); // express router oluşturuldu
const productsController = require("../controllers/products");
router.get("/add-product", productsController.getAddProduct); // add-product sayfası get isteği için controller.getAddProduct fonksiyonu kullanıldı
router.post("/add-product", productsController.postAddProduct); // add-product sayfası post isteği için controller.postAddProduct fonksiyonu kullanıldı
module.exports = router; // router dışarıya aktarıldı

const express = require("express"); // express modülü eklendi
const router = express.Router(); // express router oluşturuldu
const adminController = require("../controllers/admin");
router.get("/products", adminController.getProducts); // products sayfası get isteği için controller.getProducts fonksiyonu kullanıldı
router.get("/add-product", adminController.getAddProduct); // add-product sayfası get isteği için controller.getAddProduct fonksiyonu kullanıldı
router.post("/add-product", adminController.postAddProduct); // add-product sayfası post isteği için controller.postAddProduct fonksiyonu kullanıldı
router.get("/edit-product/:productId", adminController.getEditProduct); //
router.post("/edit-product", adminController.postEditProduct); //
// router.post("/delete-product", adminController.deleteProduct); //
module.exports = router; // router dışarıya aktarıldı

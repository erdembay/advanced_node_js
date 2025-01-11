const express = require("express"); // express modülü eklendi
const router = express.Router(); // express router oluşturuldu
const productsController = require("../controllers/products"); // productsController modülü eklendi
router.get("/", productsController.getProducts);
module.exports = router; // router dışarıya aktarıldı

const express = require("express"); // express modülü eklendi
const router = express.Router(); // express router oluşturuldu
const shopController = require("../controllers/shop"); // productsController modülü eklendi
router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);
router.get("/cart", shopController.getCart);
router.get("/checkout", shopController.getCheckout);
module.exports = router; // router dışarıya aktarıldı

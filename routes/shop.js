const express = require("express"); // express modülü eklendi
const router = express.Router(); // express router oluşturuldu
const shopController = require("../controllers/shop"); // productsController modülü eklendi
router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);
router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postCart);
// router.post("/cart-delete-item", shopController.postCartDeleteProduct);
// router.get("/orders", shopController.getOrders);
// router.get("/checkout", shopController.getCheckout);
router.get("/products/:productId", shopController.getProduct);
// router.post("/create-order", shopController.postOrder);
module.exports = router; // router dışarıya aktarıldı

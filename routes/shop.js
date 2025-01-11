const express = require("express"); // express modülü eklendi
const router = express.Router(); // express router oluşturuldu
const adminData = require("./admin"); // adminRoutes modülü eklendi
router.get("/", (req, res, next) => {
  // kök dizine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  const products = adminData.products; // adminRoutes modülünden products dizisi alındı
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  }); // shop.ejs sayfası gönderildi
});
module.exports = router; // router dışarıya aktarıldı

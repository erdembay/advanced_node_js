const express = require("express"); // express modülü eklendi
const router = express.Router(); // express router oluşturuldu
const products = []; // products dizisi oluşturuldu
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  }); // add-product.ejs sayfası gönderildi
});
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title }); // products dizisine title anahtarı ile birlikte istekten gelen title değeri eklendi
  res.redirect("/"); // yönlendirme yapıldı
});
exports.routes = router; // router dışarıya aktarıldı
exports.products = products; // products dışarıya aktarıldı

const Product = require("../models/product"); // Product modeli import edildi
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title); // Product modelinden bir obje oluşturuldu
  product.save(); // save metodu çağrıldı
  res.redirect("/"); // yönlendirme yapıldı
};
exports.getProducts = (req, res, next) => {
  // kök dizine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  Product.fetchAll((products) => {
    // fetchAll metodu çağrıldı
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    }); // shop.ejs sayfası gönderildi
  });
};

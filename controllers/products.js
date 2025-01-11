const products = []; // products dizisi oluşturuldu
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
  products.push({ title: req.body.title }); // products dizisine title anahtarı ile birlikte istekten gelen title değeri eklendi
  res.redirect("/"); // yönlendirme yapıldı
};
exports.getProducts = (req, res, next) => {
  // kök dizine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  }); // shop.ejs sayfası gönderildi
};

const Product = require("../models/product"); // Product modeli import edildi
exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
exports.postAddProduct = (req, res, next) => {
  const title = req?.body?.title; // title değişkeni oluşturuldu
  const imageUrl = req?.body?.imageUrl; // imageUrl değişkeni oluşturuldu
  const price = req?.body?.price; // price değişkeni oluşturuldu
  const description = req?.body?.description; // description değişkeni oluşturuldu
  const product = new Product(title, imageUrl, description, price); // Product modelinden bir obje oluşturuldu
  product.save(); // save metodu çağrıldı
  res.redirect("/products"); // yönlendirme yapıldı
};
exports.getProducts = (req, res, next) => {
  // kök dizine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  Product.fetchAll((products) => {
    // fetchAll metodu çağrıldı
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
      hasProducts: products.length > 0,
    }); //
  });
};
exports.getAllProducts = (req, res, next) => {
  // kök dizine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  Product.fetchAll((products) => {
    // fetchAll metodu çağrıldı
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Products",
      path: "/products",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    }); // shop.ejs sayfası gönderildi
  });
};

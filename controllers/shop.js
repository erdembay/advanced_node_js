const Product = require("../models/product"); // Product modeli import edildi
const Cart = require("../models/cart"); // Cart modeli import edildi
exports.getProducts = (req, res, next) => {
  // kök dizine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  Product.fetchAll((products) => {
    // fetchAll metodu çağrıldı
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Shop",
      path: "/products",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    }); // shop.ejs sayfası gönderildi
  });
};
exports.getProduct = (req, res, next) => {
  // product dizinine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  const prodId = req?.params?.productId; // productId parametresi alındı
  Product.findById(prodId, (product) => {
    // findById metodu çağrıldı
    res.render("shop/product-detail", {
      product: product,
      pageTitle: product?.title,
      path: "/products",
    }); // product-detail.ejs sayfası gönderildi
  });
};
exports.getIndex = (req, res, next) => {
  // kök dizine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  Product.fetchAll((products) => {
    // fetchAll metodu çağrıldı
    res.render("shop/index", {
      prods: products,
      pageTitle: "Products",
      path: "/",
      hasProducts: products.length > 0,
    }); // shop.ejs sayfası gönderildi
  });
};
exports.getCart = (req, res, next) => {
  // cart dizinine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  res.render("shop/cart", {
    pageTitle: "Cart",
    path: "/cart",
  }); // cart.ejs sayfası gönderildi
};
exports.postCart = (req, res, next) => {
  // cart dizinine gelen POST isteğine karşılık bir fonksiyon tanımlandı
  const prodId = req.body.productId; // productId parametresi alındı
  Product.findById(prodId, (product) => { 
    // findById metodu çağrıldı
    Cart.addProduct(prodId, product.price); 
    // addProduct metodu çağrıldı
  }); // findById metodu çağrıldı
  res.redirect("/cart"); // cart sayfasına yönlendirme yapıldı
};
exports.getCheckout = (req, res, next) => {
  // checkout dizinine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  }); // checkout.ejs sayfası gönderildi
};
exports.getOrders = (req, res, next) => {
  // checkout dizinine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  res.render("shop/orders", {
    pageTitle: "My Orders",
    path: "/orders",
  }); // checkout.ejs sayfası gönderildi
};
exports.deleteProduct = (req, res, next) => {
  // product dizinine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  const prodId = req.body.productId; // productId parametresi alındı
};

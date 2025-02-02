const Product = require("../models/product"); // Product modeli import edildi
const Cart = require("../models/cart"); // Cart modeli import edildi
exports.getProducts = (req, res, next) => {
  // kök dizine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  Product.findAll()
    .then((product) => {
      // fetchAll metodu çağrıldı
      res.render("shop/product-list", {
        prods: product,
        pageTitle: "Shop",
        path: "/products",
        hasProducts: product.length > 0,
        activeShop: true,
        productCSS: true,
      }); // shop.ejs sayfası gönderildi
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getProduct = (req, res, next) => {
  // product dizinine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  const prodId = req?.params?.productId; // productId parametresi alındı
  Product.findByPk(prodId)
    .then((product) => {
      // findById metodu çağrıldı
      res.render("shop/product-detail", {
        product: product,
        pageTitle: product?.title,
        path: "/products",
      }); // product-detail.ejs sayfası gönderildi
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getIndex = (req, res, next) => {
  // kök dizine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  Product.findAll()
    .then((products) => {
      // fetchAll metodu çağrıldı
      res.render("shop/index", {
        prods: products,
        pageTitle: "Products",
        path: "/",
        hasProducts: products.length > 0,
      }); // shop.ejs sayfası gönderildi
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getCart = (req, res, next) => {
  // cart dizinine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  req.user
    .getCart()
    .then((cart) => {
      return cart
        .getProducts()
        .then((products) => {
          res.render("shop/cart", {
            pageTitle: "Cart",
            path: "/cart",
            products: products,
            total: 0,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
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
exports.postCartDeleteProduct = (req, res, next) => {
  // cart-delete-item dizinine gelen POST isteğine karşılık bir fonksiyon tanımlandı
  const prodId = req.body.productId; // productId parametresi alındı
  Product.findById(prodId, (product) => {
    // findById metodu çağrıldı
    Cart.deleteProduct(prodId, product.price);
    // deleteProduct metodu çağrıldı
    res.redirect("/cart"); // cart sayfasına yönlendirme yapıldı
  });
};

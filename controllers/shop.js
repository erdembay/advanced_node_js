const Product = require("../models/product"); // Product modeli import edildi
exports.getProducts = (req, res, next) => {
  // kök dizine gelen GET isteğine karşılık bir fonksiyon tanımlandı

  Product.fetchAll()
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
  Product.findById(prodId)
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
  Product.fetchAll()
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
      return res.render("shop/cart", {
        pageTitle: "Cart",
        path: "/cart",
        products: cart ?? [],
        total: 0,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postCart = (req, res, next) => {
  // cart dizinine gelen POST isteğine karşılık bir fonksiyon tanımlandı
  const prodId = req.body.productId; // productId parametresi alındı
  Product.findById(prodId)
    .then((product) => {
      return req.user.addToCart(product);
    })
    .then(() => {
      res.redirect("/cart");
    })
    .catch((err) => {
      console.log(err);
    }); // findById metodu çağrıldı
};
exports.getCheckout = (req, res, next) => {
  // checkout dizinine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  }); // checkout.ejs sayfası gönderildi
};
exports.postCartDeleteProduct = (req, res, next) => {
  // cart-delete-item dizinine gelen POST isteğine karşılık bir fonksiyon tanımlandı
  const prodId = req.body.productId; // productId parametresi alındı
  Product.findById(prodId)
    .then((product) => {
      return req.user.deleteItemFromCart(product);
    })
    .then((result) => {
      res.redirect("/cart");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postOrder = (req, res, next) => {
  let fetchedCart;
  req.user
    .addOrder()
    .then((result) => {
      res.redirect("/orders");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getOrders = (req, res, next) => {
  // checkout dizinine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  req.user
    .getOrders()
    .then((orders) => {
      res.render("shop/orders", {
        pageTitle: "My Orders",
        path: "/orders",
        orders: orders ?? [],
      }); // checkout.ejs sayfası gönderildi
    })
    .catch((err) => {
      console.log(err);
    });
};

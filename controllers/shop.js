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
  res.render("shop/cart", {
    pageTitle: "Cart",
    path: "/cart",
    products: req.user.cart.items ?? [],
    total: 0,
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
  req.user
    .getCart()
    .then((cart) => {
      return cart.getProducts({ where: { id: prodId } });
    })
    .then((products) => {
      const product = products[0];
      return product.cartItem.destroy();
    })
    .then(() => {
      res.redirect("/cart");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postOrder = (req, res, next) => {
  let fetchedCart;
  req.user
    .getCart()
    .then((cart) => {
      fetchedCart = cart;
      return cart.getProducts();
    })
    .then((products) => {
      return req.user
        .createOrder()
        .then((order) => {
          return order.addProducts(
            products.map((product) => {
              product.orderItem = { quantity: product.cartItem.quantity };
              return product;
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .then((result) => {
      return fetchedCart.setProducts(null);
    })
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
    .getOrders({ include: ["products"] })
    .then((orders) => {
      res.render("shop/orders", {
        pageTitle: "My Orders",
        path: "/orders",
        orders: orders,
      }); // checkout.ejs sayfası gönderildi
    })
    .catch((err) => {
      console.log(err);
    });
};

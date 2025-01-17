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
  Cart.getCart((cart) => {
    // getCart metodu çağrıldı
    Product.fetchAll((products) => {
      // fetchAll metodu çağrıldı
      const cartProducts = [];
      let total = 0;
      for (product of products) {
        const cartProductData = cart.products.find(
          (prod) => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
          total += product.price * cartProductData.qty;
        }
      }
      res.render("shop/cart", {
        pageTitle: "Cart",
        path: "/cart",
        products: cartProducts,
        total: total,
      }); // cart.ejs sayfası gönderildi
    });
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

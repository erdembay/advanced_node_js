const Product = require("../models/product"); // Product modeli import edildi
exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};
exports.getEditProduct = (req, res, next) => {
  // edit-product sayfasına yönlendirme yapılır
  const editMode = req.query.edit; // edit query parametresi alınır
  if (!editMode) {
    // edit parametresi yoksa
    return res.redirect("/"); // anasayfaya yönlendirme yapılır
  }
  const prodId = req.params.productId; // productId parametresi alınır
  Product.findById(prodId, (product) => {
    // findById metodu çağrılır
    if (!product) {
      // product yoksa
      return res.redirect("/"); // anasayfaya yönlendirme yapılır
    }
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      editing: editMode,
      product: product,
    });
  });
};
exports.postEditProduct = (req, res, next) => {
  // edit-product sayfasına yönlendirme yapılır
  const prodId = req.body.productId; // productId parametresi alınır
  const updatedTitle = req.body.title; // title parametresi alınır
  const updatedPrice = parseFloat(req.body.price); // price parametresi alınır
  const updatedImageUrl = req.body.imageUrl; // imageUrl parametresi alınır
  const updatedDesc = req.body.description; // description parametresi alınır
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
  ); // Product modelinden bir obje oluşturulur
  updatedProduct.save(); // save metodu çağrılır
  res.redirect("/admin/products"); // yönlendirme yapılır
};
exports.postAddProduct = (req, res, next) => {
  const title = req?.body?.title; // title değişkeni oluşturuldu
  const imageUrl = req?.body?.imageUrl; // imageUrl değişkeni oluşturuldu
  const price = parseFloat(req?.body?.price); // price değişkeni oluşturuldu
  const description = req?.body?.description; // description değişkeni oluşturuldu
  const product = new Product(null, title, imageUrl, description, price); // Product modelinden bir obje oluşturuldu
  product.save(); // save metodu çağrıldı
  res.redirect("/products"); // yönlendirme yapıldı
};
exports.getProducts = (req, res, next) => {
  // kök dizine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      // fetchAll metodu çağrıldı
      res.render("admin/products", {
        prods: rows,
        pageTitle: "Admin Products",
        path: "/admin/products",
        hasProducts: rows.length > 0,
      }); //
    })
    .catch((err) => console.log(err));
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
exports.deleteProduct = (req, res, next) => {
  const prodId = req.body.productId; // productId parametresi alındı
  Product.deleteById(prodId)
    .then(([product]) => {
      res.redirect("/admin/products"); // yönlendirme yapıldı
    })
    .catch((err) => {
      console.log(err);
    }); // deleteById metodu çağrıldı
};

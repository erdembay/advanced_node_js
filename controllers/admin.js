const Product = require("../models/product"); // Product modeli import edildi
const { ObjectId } = require("mongodb");
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
  Product.findById(prodId)
    .then((product) => {
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
    })
    .catch((err) => {
      console.log(err);
    }); // findById metodu çağrılır
};
exports.postEditProduct = (req, res, next) => {
  // edit-product sayfasına yönlendirme yapılır
  const prodId = req.body.productId; // productId parametresi alınır
  const updatedTitle = req.body.title; // title parametresi alınır
  const updatedPrice = parseFloat(req.body.price); // price parametresi alınır
  const updatedImageUrl = req.body.imageUrl; // imageUrl parametresi alınır
  const updatedDesc = req.body.description; // description parametresi alınır
  Product.findByIdAndUpdate(prodId, {
    title: updatedTitle,
    price: updatedPrice,
    imageUrl: updatedImageUrl,
    description: updatedDesc,
  })
    .then((result) => {
      console.log("UPDATED PRODUCT!");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postAddProduct = (req, res, next) => {
  const title = req?.body?.title; // title değişkeni oluşturuldu
  const imageUrl = req?.body?.imageUrl; // imageUrl değişkeni oluşturuldu
  const price = parseFloat(req?.body?.price); // price değişkeni oluşturuldu
  const description = req?.body?.description; // description değişkeni oluşturuldu
  const userId = req?.user?._id; // user id alındı
  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description,
    userId: userId,
  })
    .then((result) => {
      console.log(result);
      res.redirect("/admin/products"); // yönlendirme yapıldı
    })
    .catch((err) => {
      console.log(err?.message);
    }); // create metodu çağrıldı
};
exports.getProducts = (req, res, next) => {
  // kök dizine gelen GET isteğine karşılık bir fonksiyon tanımlandı
  // Product.findAll()
  Product.find()
    .then((products) => {
      // fetchAll metodu çağrıldı
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
        hasProducts: products.length > 0,
      }); //
    })
    .catch((err) => console.log(err));
};
exports.deleteProduct = (req, res, next) => {
  const prodId = req.body.productId; // productId parametresi alındı
  Product.findByIdAndDelete(prodId)
    .then((result) => {
      console.log("PRODUCT DESTROYED");
      res.redirect("/admin/products"); // yönlendirme yapıldı
    })
    .catch((err) => {
      console.log(err);
    }); // deleteBy metodu çağrıldı
};

const getDb = require("../utils/database").getDb;
const mongodb = require("mongodb");
const collection = "products";
class Product {
  constructor(title, price, imageUrl, description) {
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }
  save() {
    const db = getDb();
    return db
      .collection(collection)
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static fetchAll() {
    const db = getDb();
    return db
      .collection(collection)
      .find()
      .toArray()
      .then((products) => {
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findById(prodId) {
    const db = getDb();
    return db
      .collection(collection)
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next() // find metodu ile dönen cursor nesnesinden next metodu ile bir sonraki elemana geçildi
      .then((product) => {
        return product;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
module.exports = Product;

const getDb = require("../utils/database").getDb;
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const collection = "users";
class User {
  constructor(username, email, cart, id) {
    this.username = username;
    this.email = email;
    this.cart = cart; // {items: []}
    this._id = id;
  }
  save() {
    // save the user to the database
    return getDb().collection(collection).insertOne(this);
  }
  addToCart(product) {
    // add the product to the cart
    // const cartProduct = this.cart.items.findIndex((cp) => {
    //   return cp._id === product._id;
    // });

    const updatedCart = { items: [{ ...product, quantity: 1 }] };
    return getDb()
      .collection(collection)
      .updateOne({ _id: this._id }, { $set: { cart: updatedCart } });
  }
  static findById(userId) {
    // find the user by id
    return getDb()
      .collection(collection)
      .findOne({ _id: new ObjectId(userId) });
  }
}
module.exports = User;

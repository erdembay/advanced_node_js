const getDb = require("../utils/database").getDb;
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const collection = "users";
class User {
  constructor(username, email, cart, id) {
    this.username = username;
    this.email = email;
    this.cart = cart ?? { items: [] }; // {items: []}
    this._id = id;
  }
  save() {
    // save the user to the database
    return getDb().collection(collection).insertOne(this);
  }
  addToCart(product) {
    // add the product to the cart
    const cartProduct = this.cart.items.findIndex((cp) => {
      return cp.productId.equals(new ObjectId(product._id));
    });
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];
    if (cartProduct >= 0) {
      newQuantity = this.cart.items[cartProduct].quantity + 1;
      updatedCartItems[cartProduct].quantity = newQuantity;
    } else {
      updatedCartItems.push({
        productId: new ObjectId(product._id),
        quantity: newQuantity,
      });
    }
    const updatedCart = {
      items: updatedCartItems,
    };
    return getDb()
      .collection(collection)
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }
  static findById(userId) {
    // find the user by id
    return getDb()
      .collection(collection)
      .findOne({ _id: new ObjectId(userId) });
  }
}
module.exports = User;

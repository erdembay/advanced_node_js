const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    cart: {
      items: [
        {
          productId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
          },
          quantity: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true, versionKey: false }
);
// const getDb = require("../utils/database").getDb;
// const mongodb = require("mongodb");
// const ObjectId = mongodb.ObjectId;
// const collection = "users";
// class User {
//   constructor(username, email, cart, id) {
//     this.username = username;
//     this.email = email;
//     this.cart = cart ?? { items: [] }; // {items: []}
//     this._id = id;
//   }
//   save() {
//     // save the user to the database
//     return getDb().collection(collection).insertOne(this);
//   }
//   addToCart(product) {
//     // add the product to the cart
//     const cartProduct = this.cart.items.findIndex((cp) => {
//       return cp.productId.equals(new ObjectId(product._id));
//     });
//     let newQuantity = 1;
//     const updatedCartItems = [...this.cart.items];
//     if (cartProduct >= 0) {
//       newQuantity = this.cart.items[cartProduct].quantity + 1;
//       updatedCartItems[cartProduct].quantity = newQuantity;
//     } else {
//       updatedCartItems.push({
//         productId: new ObjectId(product._id),
//         quantity: newQuantity,
//       });
//     }
//     const updatedCart = {
//       items: updatedCartItems,
//     };
//     return getDb()
//       .collection(collection)
//       .updateOne(
//         { _id: new ObjectId(this._id) },
//         { $set: { cart: updatedCart } }
//       );
//   }
//   getCart() {
//     // get the cart of the user
//     const productIds = this.cart.items.map((i) => {
//       return i.productId;
//     });
//     return getDb()
//       .collection("products")
//       .find({ _id: { $in: productIds } })
//       .toArray()
//       .then((products) => {
//         return products.map((p) => {
//           return {
//             ...p,
//             quantity: this.cart.items.find((i) => {
//               return i.productId.equals(p._id);
//             }).quantity,
//           };
//         });
//       });
//   }
//   deleteItemFromCart(product) {
//     const findIndex = this.cart.items.findIndex((cp) => {
//       return cp.productId.equals(product._id);
//     });
//     const updatedCartItems = [...this.cart.items];
//     // delete updatedCartItems[findIndex]; // Kullanılamıyor Çünkü boş bir eleman bırakıyor...
//     updatedCartItems.splice(findIndex, 1); // remove the product from the cart Kullanılabiliyor çünkü elemanı siliyor
//     return getDb()
//       .collection(collection)
//       .updateOne(
//         { _id: new ObjectId(this._id) },
//         { $set: { cart: { items: updatedCartItems } } }
//       );
//   }
//   static findById(userId) {
//     // find the user by id
//     return getDb()
//       .collection(collection)
//       .findOne({ _id: new ObjectId(userId) });
//   }
//   addOrder() {
//     const db = getDb();
//     return this.getCart()
//       .then((products) => {
//         const order = {
//           items: products,
//           user: {
//             _id: new ObjectId(this._id),
//             username: this.username,
//           },
//         };
//         return db.collection("orders").insertOne(order);
//       })
//       .then((result) => {
//         this.cart = { items: [] };
//         return db
//           .collection(collection)
//           .updateOne(
//             { _id: new ObjectId(this._id) },
//             { $set: { cart: this.cart } }
//           );
//       });
//   }
//   getOrders() {
//     const db = getDb();
//     return db.collection("orders").find({ "user._id": this._id }).toArray();
//   }
// }
// module.exports = User;

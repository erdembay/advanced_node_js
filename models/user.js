const getDb = require("../utils/database").getDb;
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const collection = "users";
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  save() {
    // save the user to the database
    return getDb().collection(collection).insertOne(this);
  }
  static findById(userId) {
    // find the user by id
    return getDb()
      .collection(collection)
      .findOne({ _id: new ObjectId(userId) });
  }
}
module.exports = User;

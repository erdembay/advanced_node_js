const fs = require("fs");
const path = require("path");
const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);
const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};
module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    // title is the title of the product
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    // Code to save the product to the database
    // products.push(this); // this refers to the object that is created based on the class
    getProductsFromFile((products) => {
      // Türkçe : getProductsFromFile fonksiyonu çağrıldı
      if (this.id) {
        const existingProdcutIndex = products.findIndex(
          (p) => p.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProdcutIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
          // Türkçe : updatedProducts dizisi JSON formatına çevrildi ve dosyaya yazılması sağlandı
          if (err) console.log(err);
        });
      } else {
        this.id = Math.random().toString(); // Türkçe : id değeri rastgele bir sayıya çevrildi
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          // Türkçe : products dizisi JSON formatına çevrildi ve dosyaya yazılması sağlandı
          if (err) console.log(err);
        });
      }
    });
  }
  static fetchAll(cb) {
    // static method can be called on the class itself, not on an instance of the class => Türkçe : statik metotlar sınıfın kendisine ait olur ve sınıf üzerinden çağrılır.
    return getProductsFromFile(cb);
  }
  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};

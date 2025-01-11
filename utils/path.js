const path = require("path"); // path modülü eklendi
module.exports = path.dirname(process.mainModule.filename); // ana modülün dizin adı dışarıya aktarıldı

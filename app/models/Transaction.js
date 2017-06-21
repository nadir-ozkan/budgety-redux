const moment = require('moment');

module.exports = function Transaction(trType, description, value, id) {
  return {
    id : id, // null bir değer olarak geçirilebilir.
    createdAt : moment().unix(),
    type : trType,
    value : value,
    description : description
  }
}

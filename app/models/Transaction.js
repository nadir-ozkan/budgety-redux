const uuid = require('node-uuid');
const moment = require('moment');

module.exports = function Transaction(trType, description, value, id) {
  return {
    id : id == undefined ? uuid() : id; // null bir değer olarak geçirilebilir.
    time : moment().unix(),
    trType : trType,
    value : value,
    description : description
  }
}

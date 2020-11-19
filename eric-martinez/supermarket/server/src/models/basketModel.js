const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const basketSchema = new Schema({
  'product-name': { type: String },
  'product-image-url': { type: String },
  'header-top-right-text': { type: String },
  'header-top-left-text': { type: String },
  'product-url': { type: String },
  'header-top-right-url': { type: String },
  price: { type: Number },
  id: { type: Number },
});

module.exports = model('basket', basketSchema);

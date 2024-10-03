const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  // id: {
  //   type: String,
  //   required: true,
  //   unique: true 
  // },
  Title: {
    type: String
  },
  Img: {
    type: String
  },
  Price: {
    type: Number
  },
  quantity: {
    type: Number
  }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;

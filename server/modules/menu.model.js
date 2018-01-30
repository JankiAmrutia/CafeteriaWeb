import mongoose from 'mongoose';

const { Schema } = mongoose;

cont menuSchema = new Schema({
  itemId: {
    type: String,
    required:true
  },
  itemName: {
    type: String,
    required: true
  },
  itemPrice: {
    type: Number,
    required: true
  },
  itemCounter: {
    type: String,
    required: true
  },
  vendorName: {
    type: String,
    required: true
  },
  vendorId: {
    type: String,
    required: true
  },
  itemAvailability: {
    type:Boolean,
    required:true,
    default:'true'
  },
  veg: {
    type:boolean,
    required:true,
    default:'true'
  },
  readyToEat:{
    type:boolean,
    required:true,
    default:'false'
  },
})

module.exports = mongoose.model('Menu',menuSchema);

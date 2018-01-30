import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderSchema= ({
    orderId :{
      type: String,
      required: true
    },
    orderDate :{
      type: Date,
      required: true
    },
    orderAmount :{
      type: Number,
      required: true
    },
    orderStatus :{
      type: String,
      required: true,
      default:'Open'
    },
    itemId :{
      type: String,
      required: true
    },
    userId :{
      type: String,
      required: true
    }
})

module.exports = mongoose.model('Order',orderSchema)

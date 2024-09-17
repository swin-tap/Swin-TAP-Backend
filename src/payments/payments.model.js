// import mongoose
const mongoose = require('mongoose');
// declare model name
const model_name = 'payment';

// create schema
const schema = new mongoose.Schema(
  {
    amount: {
      type: String,
      trim: true,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    inspection_report: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'inspection_report',
    },
    payment_email: {
      type: String,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

// create modal
const model = mongoose.model(model_name, schema);
module.exports = model;

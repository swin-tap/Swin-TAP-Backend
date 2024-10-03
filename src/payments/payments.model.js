// import mongoose
const mongoose = require("mongoose");
// declare model name
const model_name = "payment";
// import payment status
const { paid, pending } = require("../../config/paymentConfig").status;

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
      ref: "inspection_report",
    },
    payment_email: {
      type: String,
    },
    additional_requests: [
      {
        name: {
          type: String,
          required: false,
        },
        price: {
          type: String,
          required: false,
        },
      },
    ],
    status: {
      type: String,
      trim: true,
      default: pending,
      enum: [paid, pending],
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

// create modal
const model = mongoose.model(model_name, schema);
module.exports = model;

// import mongoose
const mongoose = require('mongoose');
// declare model name
const model_name = 'inspection_report';
// status
const { not_assign } = require('../../config/inspectionReportConfig').status;

// create schema
const schema = new mongoose.Schema(
  {
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'vehicle',
    },
    mechanic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    additional_note: {
      type: String,
      trim: true,
    },
    images: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'file',
      },
    ],
    status: {
      type: String,
      trim: true,
      default: not_assign,
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

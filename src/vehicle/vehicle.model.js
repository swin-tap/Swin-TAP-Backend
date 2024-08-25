// import mongoose
const mongoose = require('mongoose');
// declare model name
const model_name = 'vehicle';
// import from vehicle config
const {
  condition,
  transmission,
  fuel_type,
  inspection_status,
  located_state,
} = require('../../config/vehicleConfig');

// create schema
const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    yom: {
      type: Number,
      required: true,
      trim: true,
    },
    condition: {
      type: String,
      required: true,
      enum: [condition.new, condition.used], // Only these values are allowed
    },
    transmission: {
      type: String,
      required: true,
      enum: [transmission.auto, transmission.manual, transmission.triptonic], // Only these values are allowed
    },
    body_type: {
      type: String,
      required: true,
    },
    fuel_type: {
      type: String,
      required: true,
      enum: [
        fuel_type.petrol,
        fuel_type.diesel,
        fuel_type.gas,
        fuel_type.hybrid,
        fuel_type.electric,
      ], // Only these values are allowed
    },
    mileage: {
      type: Number,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    seller_id: {
      type: mongoose.Schema.Types.ObjectId, // ObjectId for referencing other documents
      required: true,
      ref: 'user', // seller_id references a users
    },
    files: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'file',
      },
    ],
    inspection_status: {
      type: String,
      required: true,
      enum: [
        inspection_status.not_requested,
        inspection_status.requested,
        inspection_status.accepted,
        inspection_status.completed,
      ], // Only these values are allowed
    },
    inspection_report_id: {
      type: mongoose.Schema.Types.ObjectId, // ObjectId for referencing other documents
      ref: 'inspection_report',
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      enum: [
        located_state.ACT,
        located_state.NSW,
        located_state.NT,
        located_state.QLD,
        located_state.SA,
        located_state.TAS,
        located_state.VIC,
        located_state.WA,
      ], // Only these values are allowed
    },
    postal_code: {
      type: Number,
      required: true,
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

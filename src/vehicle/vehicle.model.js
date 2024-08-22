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
} = require('../../config/vehicleConfig');

// create schema
const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
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
    files: {
      type: [Object],
      required: true,
    },
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
    inspection_id: {
      type: String,
      required: false,
    },
    /* inspection_id: {
      type: mongoose.Schema.Types.ObjectId, // Use ObjectId for inspection reference
      required: false,
      ref: 'inspection', // Assuming inspection_id references an Inspection model
    }, */
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

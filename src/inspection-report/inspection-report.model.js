// import mongoose
const mongoose = require("mongoose");
// declare model name
const model_name = "inspection_report";
// status
const {
  not_requested,
  requested,
  assigned,
  completed,
} = require("../../config/inspectionReportConfig").status;

// create schema
const schema = new mongoose.Schema(
  {
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "vehicle",
      required: true,
    },
    inspection_time: {
      type: String,
      trim: true,
    },
    mechanic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    additional_note: {
      type: String,
      trim: true,
    },
    images: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "file",
      },
    ],
    vehicle_rego: {
      type: String,
      trim: true,
    },
    postal_code: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
      default: requested,
      enum: [not_requested, requested, assigned, completed],
    },
    additional_requests: {
      type: [String],
    },
    checklist: {
      type: Map,
      of: String,
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

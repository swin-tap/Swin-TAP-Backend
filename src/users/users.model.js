// import mongoose
const mongoose = require("mongoose");
// declare model name
const model_name = "user";

// import user status
const {
  mechanicVerification,
  userRoles,
} = require("../../config/permissionConfig");

// create schema
const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      default: userRoles.seller,
      trim: true,
      enum: [userRoles.admin, userRoles.mechanic, userRoles.seller],
    },
    identity_verification_documents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "file",
      },
    ],
    skill_verification_documents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "file",
      },
    ],
    image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "file",
    },
    mechanic_verification: {
      type: String,
      default: mechanicVerification.not_verified,
      trim: true,
      enum: [mechanicVerification.not_verified, mechanicVerification.verified],
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

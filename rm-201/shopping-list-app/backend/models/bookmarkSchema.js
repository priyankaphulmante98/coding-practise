const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true },
    title: { type: String, required: true },
    quantity: { type: Number, required: true },
    priority: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const BookmarkModel = mongoose.model("bookmark", bookmarkSchema);

module.exports = BookmarkModel;

const { Router } = require("express");
const BookmarkModel = require("../models/bookmarkSchema");
const ProductModel = require("../models/productSchema");

const BookmarkRouter = Router();

BookmarkRouter.get("/", async (req, res) => {
  const bookmarkData = await BookmarkModel.find();
  res.send({ msg: "Hellow Bookmark Product", bookmarkData });
});
BookmarkRouter.post("/create/:id", async (req, res) => {
  const productId = req.params.id;
  const { title, description, priority, quantity } = await ProductModel.findOne(
    { _id: productId }
  );
  const bookmarkproduct = await BookmarkModel.findOne({ productId: productId });
  if (bookmarkproduct) {
    return res.send("Product is Already Added");
  } else {
    const newBookmark = new BookmarkModel({
      title,
      description,
      priority,
      quantity,
      productId,
    });
    await newBookmark.save();
    console.log(newBookmark);
    return res.send({
      msg: " Bookmark Product Added Successfully",
      newBookmark,
    });
  }
});
BookmarkRouter.delete("/delete/:id", (req, res) => {
  res.send("Hellow Bookmark");
});

module.exports = BookmarkRouter;

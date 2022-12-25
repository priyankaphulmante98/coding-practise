const { Router } = require("express");
const ProductModel = require("../models/productSchema");

const productRouter = Router();

productRouter.get("/", async (req, res) => {
  const query = req.query;
  console.log(query.q);
  if (query) {
    if (query.q == "asc") {
      const result = await ProductModel.find().sort({ createdAt: 1 });
      return res.send({ msg: "Welcome Product Home Page", product: result });
    } else {
      const result = await ProductModel.find().sort({ createdAt: -1 });
      return res.send({ msg: "Welcome Product Home Page", product: result });
    }
  }
  const product = await ProductModel.find();
  res.send({ msg: "Welcome Product Home Page", product });
});

productRouter.post("/create", async (req, res) => {
  const { title, quantity, priority, description } = req.body;
  try {
    const newProduct = await new ProductModel({
      title,
      quantity,
      priority,
      description,
    });
    await newProduct.save();
    res.send({ msg: "Producct Added Successfully", newProduct });
  } catch (err) {
    console.log(err);
    res.send({ err: "Something went wrong" });
  }
});

// Product EDIT CRUD
productRouter.patch("/edit/:id", async (req, res) => {
  const id = req.params.id;
  // console.log(id)
  const payload = req.body;
  const updateProduct = await ProductModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  await updateProduct.save();
  res.send({ msg: "Data Update Successfully", updateProduct });
});

// Product DELETE CRUD
productRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await ProductModel.findByIdAndDelete({ _id: id });
  res.send({ msg: "Product Deleted Successfully" });
});

//

module.exports = productRouter;

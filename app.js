const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful."))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const Product = new mongoose.model("Product", productSchema);

// Create product
app.post("/api/v1/product/new", async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    success: true,
    product,
  });
});

// Read Product
app.get("/api/v1/products", async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({
    success: true,
    products,
  });
});

// Update Product
app.put("/api/v1/product/:id", async (req, res) => {
  let product = await Product.findById(req.params.id);
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
    runValidators: true,
  });

  res.status(200).json({ success: true, product });
});

// Delete Product
app.delete("/api/v1/product/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    res
      .status(500)
      .json({ success: false, product, message: "Product not found." });
  await product.remove();
  res
    .status(200)
    .json({ success: true, message: "Product is deleted successfully." });
});

app.listen(process.env.PORT, () => {
  console.log("Server running at http://localhost:5000/");
});

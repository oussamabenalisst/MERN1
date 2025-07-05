import express, { Request, Response } from "express";
import mongoose, { Schema, Document } from "mongoose";
const Product = require("./src/models/products");
const app = express();
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/shop")
  .then(() => {
    console.log("Connection To Mongo");
  })
  .catch(() => {
    console.log("Error DB Connection");
  });
const port = 5000;

app.get("/product/", async (req: Request, res: Response) => {
  try {
    const prd = await Product.find();
    res.json(prd);
  } catch (err) {
    res.send(err);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

import express from "express";
import {
  SearchProductController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  relatedProductController,
  updateProductController,
  productCategoryController,
//  braintreeTokenController,
 // brainTreePaymentController,
} from "../controller/productController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get('/search/:keyword', SearchProductController);

//similar products
router.get('/related-product/:pid/:cid',relatedProductController);

//category route
router.get("/product-category/:slug", productCategoryController);

//payments routes
//tokens
//router.get('/braintree/token',braintreeTokenController)
//payments 
// router.post('/braintree/payments',requireSignIn,brainTreePaymentController);
export default router;
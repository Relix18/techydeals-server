// import { product } from "../../techydeals/src/redux/api/product.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Category, Product } from "../models/productModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import Features from "../utils/features.js";
import cloudinary from "cloudinary";

// create product --Admin
export const createProduct = catchAsyncError(async (req, res) => {
  let images = [];

  let myCloud = await cloudinary.v2.uploader.upload(req.body.thumbnail, {
    folder: "products",
  });

  const thumbnail = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };

  req.body.thumbnail = thumbnail;

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "products",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  req.body.user = req.user.id;

  const newArrivalExpire = Date.now() + 7 * 24 * 60 * 60 * 1000;

  const newProduct = req.body;

  const product = await Product.create({ ...newProduct, newArrivalExpire });

  res.status(201).json({
    success: true,
    product,
  });
});

// get all product
export const getAllProducts = catchAsyncError(async (req, res) => {
  const resultPerPage = 10;
  const productCount = await Product.countDocuments();

  const apiFeature = new Features(Product.find(), req.query)
    .search()
    .filter()
    .new();
  // .sort();
  let products = await apiFeature.query.exec();

  let filteredProductsCount = products.length;

  apiFeature.pagination(resultPerPage);

  products = await apiFeature.query.clone();

  res.status(200).json({
    success: true,
    products,
    productCount,
    resultPerPage,
    filteredProductsCount,
  });
});

// get new Arrivals
export const getNewArrivals = catchAsyncError(async (req, res) => {
  await Product.updateMany(
    { newArrivalExpire: { $lte: Date.now() } },
    { $set: { newArrival: false } }
  );

  const newArrivals = await Product.find({ newArrival: true });

  await res.status(200).json({
    success: true,
    newArrivals,
  });
});

// get all product --Admin
export const getAdminProducts = catchAsyncError(async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
});

//get product details

export const getProductDetails = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  let product = await Product.findById(id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 500));
  }

  return res.status(200).json({
    success: true,
    product,
  });
});

// Update Product --Admin
export const updateProduct = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  let product = await Product.findById(id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 500));
  }

  // Update product details if thumbnail or images are not provided
  if (req.body.thumbnail === "" || req.body.images.length === 0) {
    const { name, description, category, stock, price, discountPercentage } =
      req.body;
    const data = {
      name,
      description,
      category,
      stock,
      price,
      discountPercentage,
    };

    product = await Product.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    return res.status(200).json({
      success: true,
      product,
    });
  } else {
    // Update thumbnail
    if (req.body.thumbnail !== "") {
      await cloudinary.v2.uploader.destroy(product.thumbnail.public_id);

      const myCloud = await cloudinary.v2.uploader.upload(req.body.thumbnail, {
        folder: "products",
      });
      const thumbnail = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
      req.body.thumbnail = thumbnail;
    }

    // Update images
    if (req.body.images.length !== 0) {
      let images = [];

      if (typeof req.body.images === "string") {
        images.push(req.body.images);
      } else {
        images = req.body.images;
      }

      // Deleting Images From Cloudinary
      for (let i = 0; i < product.images.length; i++) {
        await cloudinary.v2.uploader.destroy(product.images[i].public_id);
      }

      const imagesLinks = [];

      for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
          folder: "products",
        });

        imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }

      req.body.images = imagesLinks;
    }

    product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    return res.status(200).json({
      success: true,
      product,
    });
  }
});

// delete product --Admin

export const deleteProduct = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  let product = await Product.findById(id);

  if (!product) {
    return next(new ErrorHandler(500, "Product Not Found"));
  }

  await cloudinary.v2.uploader.destroy(product.thumbnail.public_id);

  for (let i = 0; i < product.images.length; i++) {
    await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product Deleted Succesfully",
  });
});

//Create New Review or Update the review

export const createReview = catchAsyncError(async (req, res, next) => {
  const { rating, productId, comment } = req.body;

  if (!rating || !comment) {
    return next(new ErrorHandler("Please Enter Rating and Comment", 400));
  }
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const products = await Product.findById(productId);

  const isReviewed = products.review.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    products.review.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    products.review.push(review);
    products.numOfReview = products.review.length;
  }
  let avg = 0;

  products.review.forEach((rev) => {
    avg += rev.rating;
  });

  products.ratings = avg / products.review.length;

  await products.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    review,
  });
});

// Get All Reviews of a product
export const getProductReviews = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.review,
  });
});

//Delete Review

export const deleteReview = catchAsyncError(async (req, res, next) => {
  const products = await Product.findById(req.query.productId);

  if (!products) {
    return next(new ErrorHandler("Product not found", 404));
  }

  const review = products.review.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  review.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (review.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / review.length;
  }

  const numOfReview = review.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      review,
      ratings,
      numOfReview,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});

// fetch Product Category

export const getProductCategory = catchAsyncError(async (req, res, next) => {
  const categories = await Category.find();
  res.status(200).json({
    success: true,
    categories,
  });
});

// create Product Category
export const createProductCategory = catchAsyncError(async (req, res, next) => {
  const { label } = req.body;

  if (!label) {
    return next(new ErrorHandler("Please Enter the value and label", 500));
  }

  const value = label.toLowerCase().split(" ").join("_");

  const categories = await Category.create({ value, label });

  res.status(200).json({
    success: true,
    categories,
  });
});

//delete Product Category
export const deleteProductCategory = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const category = await Category.findById(id);

  if (!category) {
    return next(new ErrorHandler("Category not found."));
  }

  await category.deleteOne();

  res.status(200).json({
    success: true,
  });
});

// fetch Product Brand
// export const getProductBrand = catchAsyncError(async (req, res, next) => {
//   const brands = await Brand.find();

//   res.status(200).json({
//     success: true,
//     brands,
//   });
// });

// Create Product Brand
// export const createProductBrand = catchAsyncError(async (req, res, next) => {
//   const { label } = req.body;

//   if (!label) {
//     return next(new ErrorHandler("Please Enter the value and label", 500));
//   }

//   const value = label.toLowerCase().split(" ").join("_");

//   const brands = await Brand.create({ value, label });

//   res.status(200).json({
//     success: true,
//     brands,
//   });
// });

// // upload banner --Admin
// export const uploadBanner = catchAsyncError(async (req, res, next) => {
//   const myCloud = await cloudinary.v2.uploader.upload(req.body.banner, {
//     folder: "banners",
//   });

//   const banner = {
//     public_id: myCloud.public_id,
//     url: myCloud.secure_url,
//   };

//   const banners = await Banner.create(banner);

//   res.status(200).json({
//     success: true,
//     banners,
//   });
// });

// // get banners
// export const getBanner = catchAsyncError(async (req, res, next) => {
//   const banners = await Banner.find();

//   res.status(200).json({
//     success: true,
//     banners,
//   });
// });

// // delete banner
// export const deleteBanner = catchAsyncError(async (req, res, next) => {
//   const banner = await Banner.findById(req.params.id);

//   if (!banner) {
//     return next(
//       new ErrorHandler(`Banner does not exist with Id: ${req.params.id}`, 400)
//     );
//   }

//   await cloudinary.v2.uploader.destroy(banner.public_id);

//   await banner.deleteOne();

//   res.status(200).json({
//     success: true,
//   });
// });

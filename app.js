import express from "express";
import dotenv from "dotenv";
import product from "./routes/productRoute.js";
import user from "./routes/userRoute.js";
import cart from "./routes/cartRoute.js";
import order from "./routes/orderRoute.js";
import errorMiddleware from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const app = express();

dotenv.config({ path: "data/.env" });

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
//middlewares
// app.use(express.static(path.resolve(__dirname, "dist")));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Routes
app.use("/api/v1/product", product);
app.use("/api/v1", user);
app.use("/api/v1", cart);
app.use("/api/v1", order);

//error middleware
app.use(errorMiddleware);

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "dist", "index.html"));
// });

app.get("/", (req, res) => {
  res.send("hello");
});

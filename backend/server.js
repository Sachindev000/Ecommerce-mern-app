import express from "express";
import cors from "cors";
// import dotenv from "dotenv";
import 'dotenv/config'; 
import connectDb from "./config/Db.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//App Config
// dotenv.config()
const app = express();

const PORT = process.env.PORT || 4000;

connectDb()
connectCloudinary()

// Middelwares

app.use(express.json());
app.use(cors());

//Api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get("/", (req, res) => {
  res.send("Api Working");
});

app.listen(PORT, () => console.log(`Server Started On PORT ${PORT}`));

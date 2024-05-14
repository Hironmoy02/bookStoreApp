import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import bookRoute from "../Backend/route/book.route.js"
import cors from "cors"
import userRoute from "./route/user.route.js";
import User from "./modal/user.model.js";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI=process.env.MongoDBURI;
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("connected to mongoDB");
} catch (error) {
    console.log("error",error);
}


app.use("/book",bookRoute);
app.use("/user",userRoute);



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
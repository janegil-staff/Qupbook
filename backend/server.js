import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("DOTENV", process.env.DATABASE_URL)
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting to mongodb", err));

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}..`);
});

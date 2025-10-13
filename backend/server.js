import app from "./app.js";
import mongoose from "mongoose";

//database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting to mongodb", err));

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}..`);
});

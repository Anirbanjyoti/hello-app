const mongoose = require("mongoose");
mongoose
  .connect(
    // `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ov3k2vn.mongodb.net/?retryWrites=true&w=majority/mongooseTest`,
    process.env.MONGO_CONNECTION_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`Mongodb Connected Successfully`);
  })
  .catch((err) => {
    console.log("DB NOT Connected");
  });
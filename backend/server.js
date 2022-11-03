const express = require("express");
require("dotenv").config();
const notRoute = require("./routes/notlar");
const mongoose = require("mongoose");
const cors = require("cors");
const kullaniciRoute = require("./routes/kullanici");

const port = process.env.PORT || 4444;

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());

app.use(cors()); //reactta localhost serverda ondan dolayı bu paketi kullanmalıyız

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Veritabanı Bağlandı");

    app.listen(port, () => {
      console.log(port + ". port dinleniyor");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/notlar", notRoute);
app.use("/api/kullanici", kullaniciRoute);

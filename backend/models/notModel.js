const mongoose = require("mongoose");

const sema = mongoose.Schema;

const notSema = sema(
  {
    baslik: {
      type: String,
      required: [true, "Başlık zorunlu olarak girilmelidir"],
    },
    aciklama: { type: String },
    kullanici_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Not", notSema);

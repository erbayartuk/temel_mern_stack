const express = require("express");
const authKontroller = require("../middlewares/authKontrol");
const {
  notOlustur,
  notlarGetir,
  notGetir,
  notSil,
  notGuncelle,
} = require("../controllers/notController");
const router = express.Router();

router.use(authKontroller);

router.get("/", notlarGetir);

//listele
router.get("/:id", notGetir);

//ekle
router.post("/", notOlustur);

//sil
router.delete("/:id", notSil);

//güncelle
router.patch("/:id", notGuncelle);

module.exports = router;

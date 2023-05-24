const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

//middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

//Controller Modüllerini Çağırıyoruz
const kategori_controller = require("../controllers/kategoriController");
const kitap_controller = require("../controllers/kitapController");
const kutuphane_controller = require("../controllers/kutuphaneController");
const uye_controller = require("../controllers/uyeController");
const yayinevi_controller = require("../controllers/yayineviController");
const yazar_controller = require("../controllers/yazarController");
const emanet_controller = require("../controllers/emanetController");

//KATEGORI
router.get("/kategoriler", kategori_controller.kategoriler);
router.get("/kategori", kategori_controller.kategori);
router.post("/kategori", kategori_controller.kategori_ekle);
router.put("/kategori", kategori_controller.kategori_duzenle);
router.delete("/kategori", kategori_controller.kategori_sil);

//KITAP
router.get("/kitaplar", kitap_controller.kitaplar);
router.get("/kitap", kitap_controller.kitap);
router.post("/kitap", kitap_controller.kitap_ekle);
router.put("/kitap", kitap_controller.kitap_duzenle);
router.delete("/kitap", kitap_controller.kitap_sil);

//KUTUPHANE
router.get("/kutuphaneler", kutuphane_controller.kutuphaneler);
router.get("/kutuphane", kutuphane_controller.kutuphane);
router.post("/kutuphane", kutuphane_controller.kutuphane_ekle);
router.put("/kutuphane", kutuphane_controller.kutuphane_duzenle);
router.delete("/kutuphane", kutuphane_controller.kutuphane_sil);

//UYE
router.get("/uyeler", uye_controller.uyeler);
router.get("/uye", uye_controller.uye);
router.post("/uye", uye_controller.uye_ekle);
router.put("/uye", uye_controller.uye_duzenle);
router.delete("/uye", uye_controller.uye_sil);

//YAYINEVI
router.get("/yayinevler", yayinevi_controller.yayinevler);
router.get("/yayinevi", yayinevi_controller.yayinevi);
router.post("/yayinevi", yayinevi_controller.yayinevi_ekle);
router.put("/yayinevi", yayinevi_controller.yayinevi_duzenle);
router.delete("/yayinevi", yayinevi_controller.yayinevi_sil);

//YAZAR
router.get("/yazarlar", yazar_controller.yazarlar);
router.get("/yazar", yazar_controller.yazar);
router.post("/yazar", yazar_controller.yazar_ekle);
router.put("/yazar", yazar_controller.yazar_duzenle);
router.delete("/yazar", yazar_controller.yazar_sil);

//EMANET
router.get("/emanetler", yazar_controller.emanetler);
router.get("/emanet", yazar_controller.emanet);
router.post("/emanet", yazar_controller.emanet_ekle);

module.exports = router;
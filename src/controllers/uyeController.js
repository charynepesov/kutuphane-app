const connection = require('../db');
const uye = require('../models/uye');


// GET -> /uyeler -> butun uyeleri getir
exports.uyeler = async (req, res) => {
    try {
        const uyeler = await connection.query("SELECT * FROM uyeler");
        res.json(uyeler.rows);
    } catch (err) {
        console.log(err.message);
    }
};

// GET -> /uye -> id ile uye getir
exports.uye = async (req, res) => {
    try {
        const id = req.body.id;
        const uye = await connection.query("SELECT * FROM uyeler WHERE id = $1", [id]);
        res.json(uye.rows);
    } catch (err) {
        console.log(err.message);
    }
};

// POST -> /uye
exports.uye_ekle = async (req, res) => {
    try {
        let ad = req.body.ad;
        let soyad = req.body.soyad;
        let cinsiyet = req.body.cinsiyet;
        let eposta = req.body.eposta;
        let telefon = req.body.telefon;
        let il = req.body.il;
        let ilce = req.body.ilce;
        let mahalle = req.body.mahalle;
        let cadde = req.body.cadde;
        let sokak = req.body.sokak;
        let bina_no = req.body.bina_no;
        let kat = req.body.kat;
        let posta_kodu = req.body.posta_kodu;

        const adresEkle = await connection.query("INSERT INTO adresler (il, ilce, mahalle, cadde, sokak, bina_no, kat, posta_kodu) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [il, ilce, mahalle, cadde, sokak, bina_no, kat, posta_kodu]);
        const uyeEkle = await connection.query("INSERT INTO uyeler (ad, soyad, cinsiyet, eposta, telefon, fk_adres) VALUES ($1, $2, $3, $4, $5, (SELECT MAX(id) FROM adresler))", [ad, soyad, cinsiyet, eposta, telefon]);

        res.json("Üye ekleme başarılı.");
    } catch (err) {
        console.log(err.message);
    }
};
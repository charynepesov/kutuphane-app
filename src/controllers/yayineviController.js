const connection = require('../db');
const yayinevi = require('../models/yayinevi');


// GET -> /yayinevler -> butun yayinevleri getir
exports.yayinevler = async (req, res) => {
    try {
        const yayinevler = await connection.query("SELECT * FROM yayinevler");
        res.json(yayinevler.rows);
    } catch (err) {
        console.log(err.message);
    }
};

// GET -> /yayinevi -> id ile yayinevi getir
exports.yayinevi = async (req, res) => {
    try {
        const id = req.body.id;
        const yayinevi = await connection.query("SELECT * FROM yayinevler WHERE id = $1", [id]);
        res.json(yayinevi.rows);
    } catch (err) {
        console.log(err.message);
    }
};

// POST -> /yayinevi
exports.yayinevi_ekle = async (req, res) => {
    try {
        let ad = req.body.ad;
        let il = req.body.il;
        let ilce = req.body.ilce;
        let mahalle = req.body.mahalle;
        let cadde = req.body.cadde;
        let sokak = req.body.sokak;
        let bina_no = req.body.bina_no;
        let kat = req.body.kat;
        let posta_kodu = req.body.posta_kodu;

        const adresEkle = await connection.query("INSERT INTO adresler (il, ilce, mahalle, cadde, sokak, bina_no, kat, posta_kodu) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [il, ilce, mahalle, cadde, sokak, bina_no, kat, posta_kodu]);
        const yayineviEkle = await connection.query("INSERT INTO yayinevler (ad, fk_adres) VALUES ($1, (SELECT MAX(id) FROM adresler))", [ad]);

        res.json("Yayinevi ekleme başarılı.");
    } catch (err) {
        console.log(err.message);
    }
};

// PUT -> /yayinevi
exports.yayinevi_duzenle= async (req, res) => {
    try {
        let id = req.body.id;
        let ad = req.body.ad;
        let adres_id = req.body.adres_id;
        let il = req.body.il;
        let ilce = req.body.ilce;
        let mahalle = req.body.mahalle;
        let cadde = req.body.cadde;
        let sokak = req.body.sokak;
        let bina_no = req.body.bina_no;
        let kat = req.body.kat;
        let posta_kodu = req.body.posta_kodu;

        const adresGuncelle = await connection.query("UPDATE adresler SET il=$1, ilce=$2, mahalle=$3, cadde=$4, sokak=$5, bina_no=$6, kat=$7, posta_kodu=$8 WHERE id=$9", [il, ilce, mahalle, cadde, sokak, bina_no, kat, posta_kodu, adres_id]);

        const yayineviGuncelle = await connection.query("UPDATE yayinevler SET ad=$1 WHERE id=$2", [ad,  id]);

        res.json("yayinevi ve adres düzenleme başarılı.");
    } catch (err) {
        console.log(err.message);
    }
};


// DELETE -> /yayinevi
exports.yayinevi_sil = async (req, res) => {
    try {
        const id = req.body.id;
        const adres_id = req.body.adres_id;

        const yayineviSil = await connection.query("DELETE FROM yayinevler WHERE id = $1", [id]);

        const adresSil = await connection.query("DELETE FROM adresler WHERE id=$1", [adres_id]);

        res.json("yayinevi ve adres silme başarılı.");
    } catch (err) {
        console.log(err.message);
    }
};
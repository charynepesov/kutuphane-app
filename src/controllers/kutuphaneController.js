const connection = require('../db');
const kutuphane = require('../models/kutuphane');


// GET -> /kutuphaneler -> butun kutuphaneleri getir
exports.kutuphaneler = async (req, res) => {
    try {
        const kutuphaneler = await connection.query("SELECT * FROM kutuphaneler");
        res.json(kutuphaneler.rows);
    } catch (err) {
        console.log(err.message);
    }
};

// GET -> /kutuphane -> id ile kutuphane getir
exports.kutuphane = async (req, res) => {
    try {
        const id = req.body.id;
        const kutuphane = await connection.query("SELECT * FROM kutuphaneler WHERE id = $1", [id]);
        res.json(kutuphane.rows);
    } catch (err) {
        console.log(err.message);
    }
};

// POST -> /kutuphane
exports.kutuphane_ekle = async (req, res) => {
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
        const kutuphaneEkle = await connection.query("INSERT INTO kutuphaneler (ad, fk_adres) VALUES ($1, (SELECT MAX(id) FROM adresler))", [ad]);

        res.json("Kütüphane ekleme başarılı.");
    } catch (err) {
        console.log(err.message);
    }
};

// PUT -> /kutuphane
exports.kutuphane_duzenle= async (req, res) => {
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

        const kutuphaneGuncelle = await connection.query("UPDATE kutuphaneler SET ad=$1 WHERE id=$2", [ad,  id]);

        res.json("Kutuphane ve adres düzenleme başarılı.");
    } catch (err) {
        console.log(err.message);
    }
};


// DELETE -> /kutuphane
exports.kutuphane_sil = async (req, res) => {
    try {
        const id = req.body.id;
        const adres_id = req.body.adres_id;

        const kutuphaneSil = await connection.query("DELETE FROM kutuphaneler WHERE id = $1", [id]);

        const adresSil = await connection.query("DELETE FROM adresler WHERE id=$1", [adres_id]);

        res.json("Kutuphane ve adres silme başarılı.");
    } catch (err) {
        console.log(err.message);
    }
};
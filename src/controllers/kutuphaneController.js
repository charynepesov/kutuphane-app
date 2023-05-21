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
        //const adresId = await connection.query("SELECT id FROM adresler WHERE id = (SELECT MAX(id) FROM adresler)");
        //console.log(adresId);
        const kutuphaneEkle = await connection.query("INSERT INTO kutuphaneler (ad, fk_adres) VALUES ($1, (SELECT MAX(id) FROM adresler))", [ad]);

        res.json("Kütüphane ekleme başarılı.");
    } catch (err) {
        console.log(err.message);
    }
};
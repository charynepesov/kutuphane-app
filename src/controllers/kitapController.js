const connection = require('../db');
const kitap = require('../models/kitap');

// GET -> /kitaplar -> butun kitaplari getir
exports.kitaplar = async (req, res) => {
    try {
        const kitaplar = await connection.query("SELECT * FROM kitaplar");
        res.json(kitaplar.rows);
    } catch (err) {
        console.log(err.message);
    }
};

// GET -> /kitap -> id ile kitap getir
exports.kitap = async (req, res) => {
    try {
        const id = req.body.id;
        const kitap = await connection.query("SELECT * FROM kitaplar WHERE id = $1", [id]);
        res.json(kitap.rows);
    } catch (err) {
        console.log(err.message);
    }
};

// POST -> /kitap
exports.kitap_ekle = async (req, res) => {
    try {
        let ad = req.body.ad;
        let isbn = req.body.isbn;
        let sayfa_sayisi = req.body.sayfa_sayisi;
        let yayin_tarihi = req.body.yayin_tarihi;
        let yayin_id = req.body.yayin_id;

        const kitapEkle = await connection.query("INSERT INTO kitaplar (ad, isbn, sayfa_sayisi, yayin_tarihi, fk_yayin) VALUES ($1, $2, $3, $4, $5)", [ad, isbn, sayfa_sayisi, yayin_tarihi, yayin_id]);

        res.json("Kitap ekleme başarılı.");
    } catch (err) {
        console.log(err.message);
    }
};


// PUT -> /kitap/duzenle
exports.kitap_duzenle= async (req, res) => {
    try {
        const guncelKitap = new kitap(req.body.id, req.body.ad, req.body.isbn, req.body.sayfa_sayisi, req.body.yayin_tarihi, req.body.yayin_id);

        const kitapDuzenle = await connection.query("UPDATE kitaplar SET ad = $1, isbn = $2, sayfa_sayisi = $3, yayin_tarihi = $4, yayin_id = $5 WHERE id = $6", [guncelKitap.ad, guncelKitap.isbn, guncelKitap.sayfa_sayisi, guncelKitap.yayin_tarihi, guncelKitap.yayin_id, guncelKitap.id]);

        res.json("Kitap düzenleme başarılı.");
    } catch (err) {
        console.log(err.message);
    }
};


// DELETE -> /kitap/sil
exports.kitap_sil = async (req, res) => {
    try {
        const id = req.body.id;
        const kitapSil = await connection.query("DELETE FROM kitaplar WHERE id = $1", [id]);

        res.json("Kitap silme başarılı.");
    } catch (err) {
        console.log(err.message);
    }
};
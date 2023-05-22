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
        let yazarlar = req.body.yazarlar;
        let kategoriler = req.body.kategoriler;
        let yayin_id = req.body.yayin_id;
        let kutuphane_id = req.body.kutuphane_id;
        let adet = req.body.adet;

        const kitapEkle = await connection.query("INSERT INTO kitaplar (ad, isbn, sayfa_sayisi, yayin_tarihi, fk_yayin) VALUES ($1, $2, $3, $4, $5)", [ad, isbn, sayfa_sayisi, yayin_tarihi, yayin_id]);

        yazarlar.forEach(async yazar => {
            let adSoyad = yazar.split(" ");
            // console.log(adSoyad);

            const yazarEkle = await connection.query("INSERT INTO yazarlar (ad, soyad) VALUES ($1, $2)", [adSoyad[0], adSoyad[1]]);

            const kitap_yazar = await connection.query("INSERT INTO kitap_yazar (fk_kitap, fk_yazar) VALUES ((SELECT MAX(id) FROM kitaplar), (SELECT MAX(id) FROM yazarlar))");
        });

        kategoriler.forEach(async kategori => {
            // console.log(kategori);

            const kategoriEkle = await connection.query("INSERT INTO kategoriler (ad) VALUES ($1)", [kategori]);

            const kitap_kategori = await connection.query("INSERT INTO kitap_kategori (fk_kitap, fk_kategori) VALUES ((SELECT MAX(id) FROM kitaplar), (SELECT MAX(id) FROM kategoriler))");
        });        

        const kitapKutuphane = await connection.query("INSERT INTO kitap_kutuphane (fk_kitap, fk_kutuphane, adet) VALUES ((SELECT MAX(id) FROM kitaplar), $1, $2)", [kutuphane_id, adet]);

        res.json("Kitap ekleme başarılı.");
    } catch (err) {
        console.log(err.message);
    }
};


// PUT -> /kitap
exports.kitap_duzenle= async (req, res) => {
    try {
        let id = req.body.id;
        let ad = req.body.ad;
        let isbn = req.body.isbn;
        let sayfa_sayisi = req.body.sayfa_sayisi;
        let yayin_tarihi = req.body.yayin_tarihi;
        let yazarlar = req.body.yazarlar;
        let kategoriler = req.body.kategoriler;
        let yayin_id = req.body.yayin_id;
        let kutuphane_id = req.body.kutuphane_id;
        let adet = req.body.adet;
        
        const kitapDuzenle = await connection.query("UPDATE kitaplar SET ad = $1, isbn = $2, sayfa_sayisi = $3, yayin_tarihi = $4, fk_yayin = $5 WHERE id = $6", [ad, isbn, sayfa_sayisi, yayin_tarihi, yayin_id, id]);

        res.json("Kitap düzenleme başarılı.");
    } catch (err) {
        console.log(err.message);
    }
};


// DELETE -> /kitap
exports.kitap_sil = async (req, res) => {
    try {
        const id = req.body.id;

        const kitap_yazar = await connection.query("DELETE FROM kitap_yazar WHERE fk_kitap=$1", [id]);

        const kitap_kutuphane = await connection.query("DELETE FROM kitap_kutuphane WHERE fk_kitap=$1", [id]);

        const kitap_kategori = await connection.query("DELETE FROM kitap_kategori WHERE fk_kitap=$1", [id]);

        const kitapSil = await connection.query("DELETE FROM kitaplar WHERE id = $1", [id]);        

        res.json("Kitap silme başarılı.");
    } catch (err) {
        console.log(err.message);
    }
};
const connection = require('../db');

// GET -> /yazarlar
exports.yazarlar = async (req, res) => {
    try {
        const yazarlar = await connection.query("SELECT * FROM yazarlar");
        res.json(yazarlar.rows);
    } catch (err) {
        console.log(err.message);
    }
};

// GET -> /yazar
exports.yazar = async (req, res) => {
    try {
        const id = req.body.id;
        const yazar = await connection.query("SELECT * FROM yazarlar WHERE id = $1", [id]);
        res.json(yazar.rows);
    } catch (err) {
        console.log(err.message);
    }
};

// POST -> /yazar
exports.yazar_ekle = async (req, res) => {
    try {
        let ad = req.body.ad;
        let soyad = req.body.soyad;

        const yazarEkle = await connection.query("INSERT INTO yazarlar (ad, soyad) VALUES ($1, $2)", [ad, soyad]);
        res.json("Yazar ekleme başarılı");
    } catch (err) {
        console.log(err.message);
    }
};

// PUT -> /yazar
exports.yazar_duzenle = async (req, res) => {
    try {
        let id = req.body.id;
        let ad = req.body.ad;
        let soyad = req.body.soyad;

        const yazarGuncelle = await connection.query("UPDATE yazarlar SET ad=$1, soyad=$2 WHERE id = $3", [ad, soyad, id]);

        res.json("yazar düzenleme başarılı");
    } catch (err) {
        console.log(err.message);
    }
};

// DELETE -> /yazar
exports.yazar_sil = async (req, res) => {
    try {
        const id = req.body.id;

        const yazarSil = await connection.query("DELETE FROM yazarlar WHERE id = $1", [id]);
        
        res.json("yazar silme başarılı");
    } catch (err) {
        console.log(err.message);
    }
};
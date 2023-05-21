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
        const isim = req.body.isim;
        const email = req.body.email;
        const biyo = req.body.biyo;
        const yazarEkle = await connection.query("INSERT INTO yazarlar (isim, email, biyo) VALUES ($1, $2, $3)", [isim, email, biyo]);
        res.json("Yazar ekleme başarılı");
    } catch (err) {
        console.log(err.message);
    }
};
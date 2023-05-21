const connection = require('../db');
const kategori = require('../models/kategori');

// GET -> /kategoriler
exports.kategoriler = async (req, res) => {
    try {
        const kategoriler = await connection.query("SELECT * FROM kategoriler");
        res.json(kategoriler.rows);
    } catch (err) {
        console.log(err.message);
    }
};

// GET -> /kategori
exports.kategori = async (req, res) => {
    try {
        const id = req.body.id;
        const kategori = await connection.query("SELECT * FROM kategoriler WHERE id = $1", [id]);
        res.json(kategori.rows);
    } catch (err) {
        console.log(err.message);
    }
};

// POST -> /kategori
exports.kategori_ekle = async (req, res) => {
    try {
        const yeniKategori = new kategori(0, req.body.ad);
        const kategoriEkle = await connection.query("INSERT INTO kategoriler (ad) VALUES ($1)", [yeniKategori.ad]);
        console.log(yeniKategori);
        res.json("Kategori ekleme başarılı");
    } catch (err) {
        console.log(err.message);
    }
};

// PUT -> /kategori
exports.kategori_duzenle = async (req, res) => {
    try {
        const guncelKategori = new kategori(req.body.id, req.body.ad);
        const kategoriDuzenle = await connection.query("UPDATE kategoriler SET ad = $1 WHERE id = $2", [guncelKategori.ad, guncelKategori.id]);
        console.log(guncelKategori);
        res.json("Kategori düzenleme başarılı");
    } catch (err) {
        console.log(err.message);
    }
};

// DELETE -> /kategori
exports.kategori_sil = async (req, res) => {
    try {
        const id = req.body.id;
        const kategoriSil = await connection.query("DELETE FROM kategoriler WHERE id = $1", [id]);
        console.log(id);
        res.json("Kategori silme başarılı");
    } catch (err) {
        console.log(err.message);
    }
};
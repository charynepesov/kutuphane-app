const connection = require('../db');

// GET -> /emanetler
exports.emanetler = async (req, res) => {
    try {
        const emanetler = await connection.query("SELECT * FROM emanet");
        res.json(emanetler.rows);
    } catch (err) {
        console.log(err.message);
    }
};

// GET -> /emanet
exports.emanet = async (req, res) => {
    try {
        const id = req.body.id;
        const emanet = await connection.query("SELECT * FROM emanet WHERE id = $1", [id]);
        res.json(emanet.rows);
    } catch (err) {
        console.log(err.message);
    }
};

// POST -> /emanet
exports.emanet_ekle = async (req, res) => {
    try {
        kitap_id = req.body.kitap_id;
        uye_id = req.body.uye_id;
        emanet_tarihi = req.body.emanet_tarihi;
        teslim_tarihi = req.body.teslim_tarihi;

        const emanetEkle = await connection.query("INSERT INTO emanet (fk_kitap, fk_uye, emanet_tarihi, teslim_tarihi) VALUES ($1, $2, $3, $4)", [kitap_id, uye_id, emanet_tarihi, teslim_tarihi]);

        res.json("Emanet ekleme başarılı");
    } catch (err) {
        console.log(err.message);
    }
};
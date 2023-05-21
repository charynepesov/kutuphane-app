class Emanet {
    id;
    emanet_tarihi;
    teslim_tarihi;
    kitap_id;
    kutuphane_id;
    uye_id;

    constructor(id, emanet_tarihi, teslim_tarihi, kitap_id, kutuphane_id, uye_id) {
        this.id = id;
        this.emanet_tarihi = emanet_tarihi;
        this.teslim_tarihi = teslim_tarihi;
        this.kitap_id = kitap_id;
        this.kutuphane_id = kutuphane_id;
        this.uye_id = uye_id;
    }
}

module.exports = Emanet;
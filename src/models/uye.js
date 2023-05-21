class Uye {
    id;
    ad;
    soyad;
    eposta;
    cinsiyet;
    telefon;
    adres_id;

    constructor(id, ad, soyad, eposta, cinsiyet, telefon, adres_id) {
        this.id = id;
        this.ad = ad;
        this.soyad = soyad;
        this.eposta = eposta;
        this.cinsiyet = cinsiyet;
        this.telefon = telefon;
        this.adres_id = adres_id;
    }
}

module.exports = Uye;
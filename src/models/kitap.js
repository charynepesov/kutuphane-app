class Kitap {
    id;
    ad;
    isbn;
    sayfa_sayisi;
    yayin_tarihi;
    yayin_id;

    constructor(id, ad, isbn, sayfa_sayisi, yayin_tarihi, yayin_id) {
        this.id = id;
        this.ad = ad;
        this.isbn = isbn;
        this.sayfa_sayisi = sayfa_sayisi;
        this.yayin_tarihi = yayin_tarihi;
        this.yayin_id = yayin_id;
    }
}

module.exports = Kitap;
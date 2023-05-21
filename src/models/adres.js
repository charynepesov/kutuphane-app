class Adres {
    id;
    il;
    ilce;
    mahalle;
    cadde;
    sokak;
    bina_no;
    kat;
    posta_kodu;

    constructor(id, il, ilce, mahalle, cadde, sokak, bina_no, kat, posta_kodu) {
        this.id = id;
        this.il = il;
        this.ilce = ilce;
        this.mahalle = mahalle;
        this.cadde = cadde;
        this.sokak = sokak;
        this.bina_no = bina_no;
        this.kat = kat;
        this.posta_kodu = posta_kodu;
    }
}

module.exports = Adres;
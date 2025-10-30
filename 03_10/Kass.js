const Kass = class {
    constructor(
        nimi,
        vanus,
        kaal
    ) {
        this.nimi = nimi;
        this.vanus = vanus;
        this.kaal = kaal;
    }
    muuda_kaal(uus_kaal) {
        this.kaal = uus_kaal;
    }
}

export default Kass;

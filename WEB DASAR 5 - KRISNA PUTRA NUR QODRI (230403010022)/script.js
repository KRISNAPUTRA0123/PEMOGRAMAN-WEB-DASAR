// FUNGSI VOLUME KUBUS
function VKubus() {
    var sisi = document.getElementById("sisi").value;
    var sisiparsed = parseInt(sisi)
    var HasilVKubus = sisiparsed ** 3
    var hasilVolumeKubus = document.getElementById("hasilVolumeKubus");
    hasilVolumeKubus.innerHTML = "Volume Kubus dengan sisi kubus sebesar " + sisiparsed + " cm adalah = " + HasilVKubus + " cm^3";
};

// FUNGSI VOLUME BALOK
function VBalok() {
    var panjang = document.getElementById("panjang").value;
    var lebar = document.getElementById("lebar").value;
    var tinggi = document.getElementById("tinggi").value;
    var panjangparsed = parseInt(panjang)
    var lebarparsed = parseInt(lebar)
    var tinggiparsed = parseInt(tinggi)
    var HasilVBalok = panjangparsed * lebarparsed * tinggiparsed
    var hasilVolumeBalok = document.getElementById("hasilVolumeBalok");
    hasilVolumeBalok.innerHTML = "Volume Balok dengan panjang " + panjangparsed + " cm, lebar " + lebarparsed + " cm, tinggi " + tinggiparsed + " cm " + "adalah = " + HasilVBalok + " cm^3";
};

// FUNGSI VOLUME PRISMA SEGITIGA
function VPrismaSegitiga() {
    var alas = document.getElementById("alas").value;
    var tSegitiga = document.getElementById("tSegitiga").value;
    var tPrisma = document.getElementById("tPrisma").value;
    var alasparsed = parseInt(alas)
    var tSegitigaparsed = parseInt(tSegitiga)
    var tPrismaparsed = parseInt(tPrisma)
    var HasilVPrismaSegitiga = (0.5 * alasparsed * tSegitigaparsed) * tPrismaparsed
    var hasilVolumePrismaSegitiga = document.getElementById("hasilVolumePrismaSegitiga");
    hasilVolumePrismaSegitiga.innerHTML = "Volume Balok dengan alas segitiga " + alasparsed + " cm, tinggi segitiga " + tSegitigaparsed + " cm, tinggi prisma " + tPrismaparsed + " cm " + "adalah = " + HasilVPrismaSegitiga + " cm^3";
};
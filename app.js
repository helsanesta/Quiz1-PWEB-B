function validasi() {
    var nama = document.getElementById("nama").value;
    var tempat = document.getElementById("tempat").value;
    var tanggal = document.getElementById("tanggal").value;
    var utusan = document.getElementById("utusan").value;
    var kelurahan = document.getElementById("kelurahan").value;
    var kecamatan = document.getElementById("kecamatan").value;
    var telepon = document.getElementById("telepon").value;
    if (nama != "" && tempat!="" && tanggal !="" && utusan != "" && kelurahan!="" && kecamatan !="" && telepon !="") {
        alert('Terima kasih telah mengisi formulir ini');
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}
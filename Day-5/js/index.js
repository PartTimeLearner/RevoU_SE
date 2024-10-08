function peringatan(){
    let namaDepan = document.getElementById("nama-depan").value;
    let namaBelakang = document.getElementById("nama-belakang").value;
    let angkaPertama = document.getElementById("angka1").value;
    let angkaKedua = document.getElementById("angka2").value;
    let hasil = parseInt(angkaPertama) + parseInt(angkaKedua);
    console.log("Nama : " + namaDepan + " " + namaBelakang );
    console.log("Hasil: " + hasil);
    document.write("Hasil: "+ hasil)
}
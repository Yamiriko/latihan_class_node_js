class Mahasiswa{
  constructor(nim,nama,jk,alamat){
    this.nim = nim;
    this.nama = nama;
    this.jk = jk;
    this.alamat = alamat;
  }
}

const mhs = new Mahasiswa('21010502','Ade Putra','Laki-Laki','Jalan');
const tampil = mhs.nim + ',' + mhs.nama + ',' + mhs.jk + ',' + mhs.alamat;
console.log(tampil);
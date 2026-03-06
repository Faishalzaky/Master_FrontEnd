// Ambil element dari HTML
const namaBarang = document.getElementById("namaBarang");
const hargaBarang = document.getElementById("hargaBarang");
const jumlahBarang = document.getElementById("jumlahBarang");
const tambahBtn = document.getElementById("tambahBtn");

const listBarang = document.getElementById("listBarang");

const totalHarga = document.getElementById("totalHarga");
const diskonText = document.getElementById("diskon");
const totalBayar = document.getElementById("totalBayar");

// array untuk menyimpan barang
let keranjang = [];

// event tombol tambah
tambahBtn.addEventListener("click", function () {

  let nama = namaBarang.value;
  let harga = Number(hargaBarang.value);
  let jumlah = Number(jumlahBarang.value);

  let total = harga * jumlah;

  let barang = {
    nama: nama,
    harga: harga,
    jumlah: jumlah,
    total: total
  };

  keranjang.push(barang);

  tampilkanBarang();
  hitungTotal();

});


// menampilkan barang ke tabel
function tampilkanBarang() {

  listBarang.innerHTML = "";

  keranjang.forEach(function (item) {

    let row = `
    <tr>
      <td>${item.nama}</td>
      <td>${item.harga}</td>
      <td>${item.jumlah}</td>
      <td>${item.total}</td>
    </tr>
    `;

    listBarang.innerHTML += row;

  });

}


// menghitung total belanja
function hitungTotal() {

  let total = 0;

  keranjang.forEach(function (item) {
    total += item.total;
  });

  let diskon = 0;

  if (total >= 100000) {
    diskon = total * 0.1;
  }

  let bayar = total - diskon;

  totalHarga.innerText = total;
  diskonText.innerText = diskon;
  totalBayar.innerText = bayar;

}
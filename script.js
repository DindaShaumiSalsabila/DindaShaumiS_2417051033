//Event Handler
//const tombol = document.getElementById('tombol');
//tombol.onclick = function() {
//    alert('Tombol telah diklik!');
//}

//const form = document.querySelector('form');
//form.addEventListener('submit', function(event) {
//    event.preventDefault();
//    const nama = document.querySelector('input[placeholder="Masukkan nama"]').value;
//    alert('Nama yang dimasukkan: ' + nama);
//});


//Manupulasi HTML
// function ubah(){
//     document.getElementById('judul').textContent = 'Judul telah diubah!';

//     document.getElementById('paragraf').innerHTML = 
//     'Paragraf telah diubah menggunakan <strong>Ini teks tebal.</strong>';
// }

// function ubahStyle(){
//     const element = document.getElementById('judul');
//     element.style.color = 'red';
//     element.style.fontSize = '24px';
// }

//Validasi Form
function cekAngka(){
    let x = document.getElementById('angka').value;
    let hasil;

    if(isNaN(x) || x < 1 || x > 10){
        hasil = 'Input tidak valid';
    }   else {      
        hasil = 'Input valid';
    }
    document.getElementById('hasil').textContent = hasil;
}
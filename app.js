// ===========Javascript Dasar=============

let firstName = 'Gingin';
let lastName = 'Ginanjar';
let fullName = firstName + ' ' + lastName;
document.writeln(fullName);
console.log(fullName);

let firstResult = 1 + 2;
console.log('1 + 2 = ' + firstResult);
secondResult = firstResult * 2;
console.log(firstResult + ' x 2 = ' + secondResult);

// ==========Augmented Assigment==========
secondResult += 10;
console.log(secondResult);

// Increment
secondResult++;
console.log(secondResult);
// Decrement
secondResult--;
console.log(secondResult);

// Operator Perbandingan
let banding = 10 === '10';
console.log(banding); //false

let banding2 = 10 === 10;
console.log(banding2); //true

let banding3 = 10 !== 10;
console.log(banding3); //false

let banding4 = 10 !== '10';
console.log(banding4); //true

// operator logika
const nilaiUjian = 76;
const nilaiAbsensi = 76;

const luluUjian = nilaiUjian > 75;
const lulusAbsensi = nilaiAbsensi > 75;

const remidi = luluUjian || lulusAbsensi;
const lulus = luluUjian && lulusAbsensi;

console.log('Remidi? ' + remidi);
console.log('Lulus? ' + lulus);

// Console Method
console.debug('Ini Debug');
console.info('Ini Info');
console.warn('Ini Peringatan');
console.error('Ini Error');

// String Template
const template = `Nama : ${fullName}
Lulus : ${lulus}`;
console.log(template);

// Konversi String Number
const value1 = parseInt('1');
const value2 = 1;
const sum = value1 + value2;
console.log(`Hasil konversi to number = ${sum}`);

console.log(`parseInt ${parseInt('1.9gin')}`);
console.log(`parseFloat ${parseFloat('1.9gin')}`);
console.log(`Number ${Number('1.9')}`);

console.log(`toString ${value1 + value2.toString()}`);

// Cek NaN
console.log(`Apakah firstName NaN ? ${isNaN(firstName)}`);
console.log(`Apakah '1' NaN ? ${isNaN('1')}`);
console.log(`Apakah NaN NaN ? ${isNaN(NaN)}`);

// ========Array============
const siswa = [];
siswa.push('Gingin');
siswa.push('Ginanjar', 'Zafira', 'Tiara', 'Syania');
console.table(siswa);
console.log(siswa.length);
console.log(siswa[0]);
console.log(siswa[1]);
// MUltidimensional Array
siswa.push(['Ai', 'Fikhri']);

siswa[0] = 'Igin';
console.table(siswa);

delete siswa[1];
console.table(siswa);

// ==========Tipe Data Object===== Index = Attributes/Properties
const person = {};
person['nama'] = 'Gingin';
person['alamat'] = 'Karangpaningal';
person['umur'] = 27;
console.table(person);
console.info(`Nama : ${person.nama}`);
console.info(`Alamat : ${person.alamat}`);
console.info(`Umur : ${person.umur}`);

// ========If Expression=====Jika (True) apa Jika tidak(false) apa
const examValue = 60;

if (examValue > 80) {
  console.log('Good Job');
} else {
  console.log('Try Again');
}

// jika kondisi banyak
if (examValue >= 80) {
  console.log('Good Job : A');
} else if (examValue >= 70) {
  console.log('Good Job : B');
} else if (examValue >= 60) {
  console.log('Good Job : C');
} else {
  console.log('Try Again');
}

// =====Popup======= Alert, Prompt, Confirm
// alert("Hello Word !");
// const name =prompt ("Siapa Kamu?");
// alert(`Hello ${name}`);

// const masuk = confirm('Mau Login ?');
// if (masuk) {
//   const name = prompt('Siapa Kamu?');
//   alert(`Hello ${name}`);
// } else {
//   alert('Bye');
// }

// ===========Tipe Data Undefined belum ditambahkan value=========
if (siswa[7] === undefined) {
  console.log('UNDIFINED');
} else {
  console.log('DEFIND');
}

// ========Tipe Data Null sudah ditambahkan value tapi Null==========
let namaku = null;

// =========Switch Statement sama dengan If tapi lebih mudah dibaca=====
const nilai = 'D';

switch (nilai) {
  case 'A':
    console.log('Anda Lulus Dengan Baik');
    break;
  case 'B':
  case 'C':
    console.log('Anda Lulus');
    break;
  case 'D':
    console.log('Anda Tidak Lulus');
    break;
  default:
    console.log('Mungkin Anda Salah Jurusan');
}

// ===============Operator typeof===============
let data = NaN;

const typeData = typeof data;
console.log(typeData);

// =======In Operator (selama indexnya ada maka hasilnya tetap true)=====
if ('nama' in person) {
  console.log(`Hallo ${person.nama}`);
} else {
  console.log('Kamu Siapa ?');
}

const result = 'nama' in person;
console.log(`Index ke 0 dari data adalah = ${result}`);

// =======Ternary Operator (?)============
// apabila pakai if
const Nilai = 90;
let ucapan;

if (Nilai >= 75) {
  ucapan = 'Selamat anda Lulus';
} else {
  ucapan = 'Silahkan coba lagi';
}
console.log(ucapan);

// pakai Ternary Operator(?)
const ucapan2 = Nilai >= 75 ? 'Selamat anda Lulus' : 'Silahkan coba lagi';
console.log(ucapan2);

// =====Nullish Coalescing Operator (??)========
// Apabila pakai if
let parameter;

let dataNullish = parameter;
if (dataNullish === undefined || dataNullish === null) {
  dataNullish = 'Nilai Default';
}
console.log(dataNullish);

// Pakai Nullish Coalescing Operator (??)
dataNullish = parameter ?? 'Nilai Default';
console.log(dataNullish);

// ========Optional Chaining============
const persons = {};

let country; //tidak ada data

// console.log(`Data ${country}`);
// console.log("Sukses");

//===== Pengecekan
// if (persons.address !== undefined && persons.address !== null){
//   country = persons.address.country;
// };
// console.log(`Data ${country}`);

//====== cara singkat (optional chaining)
let countrys = persons?.adress?.country;
console.log(`Data ${country}`);

// ==========Fa;sy dan Truthy=============
const datas = 'false';
if (datas) {
  console.log('TRUTHY');
} else {
  console.log('FALSY');
}

// ============Operator logika di Non Boolean============
// or(||)= mengambil yg pertama yg truthy
console.log('Hello Truthy' || '');
console.log('' || []);
console.log('0' || 'NOL'); //diambil yg pertama
console.log(0 || 'NOL');
console.log(null || 'NULL');
console.log(undefined || 'UNDEFINED');
console.log(0 || false); //kalau keduanya falsy yg diambil falsy yg terakhir

const orang = {
  firstNames: '',
  lastNames: 'Ginanjar',
};
const names = orang.firstNames || orang.lastNames;
console.log(names);

// and(&&)= mengambil yg pertama yg falsy
console.log('Hello falsy' && '');
console.log('' && []);
console.log('0' && 'NOL'); //diambil yg terakhir
console.log(0 && 'NOL');
console.log(null && 'NULL');
console.log(undefined && 'UNDEFINED');
console.log(0 && false); //kalau keduanya falsy yg diambil yg pertama

// ============For Loop=============
// cara 1
let counter = 1;
for (; counter <= 5; ) {
  console.log(`Perulangan ke ${counter}`);
  counter++;
}

// cara 2
for (let counter2 = 1; counter2 <= 5; counter2++) {
  console.log(`Perulangan ke ${counter2}`);
}

// ===============While Loop===========
let counter3 = 1; //kalau diganti 100 tidak akan muncul
while (counter3 <= 5) {
  console.log(`Perulangan While ke ${counter3}`);
  counter3++;
}

// ==========Do While Loop=============
let counter4 = 1; //kalau diganti 100 akan muncul "Do While ke 100"
do {
  console.log(`Do While ke ${counter4}`);
  counter4++;
} while (counter4 <= 5);

// ============Break & Continue=========
// Break
let counter5 = 1;

while (true) {
  console.log(`Break ${counter5}`);
  counter5++;

  if (counter5 > 5) {
    break; //apabila kondisi lebih dari true maka break (berhenti total)
  }
}

// Continue
for (counter6 = 1; counter6 <= 10; counter6++) {
  if (counter6 % 2 === 1) {
    continue; //Kondisinya dilewat atau tidak di tampilkan
  }
  console.log(`Angka Genap ${counter6}`);
}

// Label
loopi: for (let i = 1; i < 5; i++) {
  //Loop i
  loopj: for (let j = 1; j <= 10; j++) {
    //Loop j
    if (j > 10) {
      //apabila j lebih besar dari 10 maka
      continue loopi; //lakukan loop i
    }
    console.log(`${i} - ${j}`);
  }
}

// ==============For In (direkomendasikan untuk object)=============
//dari object
const warga = {
  firstName: 'Gingin',
  lastName: 'Ginanjar',
};

for (const property in warga) {
  // Iterasi terhadap property atau index
  document.writeln(`<p>${property} : ${warga[property]}</p>`);
}

//dari array
const warga2 = ['Agus', 'Zafira', 'Syania'];
for (const indek in warga2) {
  document.writeln(`<p>${indek} : ${warga2[indek]}</p>`);
}

// =============For Of (hanya untuk array)=============
const warga3 = ['Gingin', 'Ginanjar', 'Tiara'];
for (const index of warga3) {
  document.writeln(`<p>${index}</p>`);
}

const spell = 'TIARA';
for (const indexx of spell) {
  document.writeln(`<p>${indexx}</p>`);
}

//coba dari object
// const ofObject = {
//   nama : "Gingin",
//   alamat : "Karangpaningal"
// };

// for (const coba of ofObject){
//   document.writeln(`<p>${coba}</p>`)
// };  //==========Error Guys karena tidak Itterable=======

// ==========With Statement (tidak direkomendasikan karana ambigu)=============
//cara biasa
const pelanggan = {
  nama: 'Asep',
  alamat: 'Cikadal',
};

console.log(pelanggan.nama);
console.log(pelanggan.alamat);

//pakai with statement

with (pelanggan) {
  console.log(nama);
  console.log(alamat);
}

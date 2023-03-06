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

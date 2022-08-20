//1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

const data = "NEGIE1";

function reserseString(s) {
    return s.split("").reverse().join("");
}
const dataReserse = reserseString(data);
console.log(`Kalimat sebelumnya ${data} sesudah di reverse alphabet ${dataReserse.substring(1,6)}${dataReserse.substring(0,1)} `);

// 2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu


function findLongestWord(data) {
    let t = 0;
    let ts = data.split(' ');
    for (let i = 0; i < ts.length; i++) {
        if (ts[i].length > t) {
            data = ts[i];
            t = ts[i].length;
        }
    }
    return data;
}
const sentence = 'Saya sangat senang mengerjakan soal algoritma';
const d = findLongestWord(sentence);
console.log(`Kalimat Terpanjang : ${d}, dengan jumlah ${d.length} character`);


// 3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
const input = ['xc', 'dz', 'bbb', 'dz'];
const query = ['bbb', 'ac', 'dz'];
const list = [];
query.forEach((s) => {
    let a = 0;
    input.forEach((s2) => {
        if (s2 == (s)) {
            a++;
        }
    })
    list.push(a);
})
console.log(list);


// 4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:
const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
]
let diagonalPertama = [];
let diagonalKedua = [];

matrix.forEach((matrixArray, ai) => {

    matrixArray.forEach((matrixSatu, i) => {
        if (matrixArray[ai]) {
            if (i == ai) {
                diagonalPertama.push(matrixSatu);
            }

        }

    })


})

matrix.forEach((matrixArray, ai = 2) => {
    --ai
    matrixArray.forEach((matrixSatu, i) => {
        if (matrixArray[ai]) {
            if (i == ai) {
                diagonalKedua.push(matrixSatu);
            }

        }

    })


})

console.log(`diagonal pertama = ${diagonalPertama.reduce((acc, curr) => acc + curr)}`);
console.log(`diagonal kedua = ${diagonalKedua.reduce((acc, curr) => acc + curr)}`);
const hasil = diagonalPertama.reduce((acc, curr) => acc + curr) + diagonalKedua.reduce((acc, curr) => acc + curr);
console.log(`${hasil}`);
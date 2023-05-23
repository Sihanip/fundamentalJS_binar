
function getAngkaTerbesarKedua(dataAngka){
    //cek input user
    if(dataAngka == null){
        return 'Error : Data Kosong';
    } 
    else if(dataAngka == 0){
        return 'Error : Salah Parameter';
    }
    //Process
    else{
        return dataAngka.sort()[dataAngka.length-2];
    }
}
const dataAngka = [9,4,7,7,4,3,2,2,8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());

// CARA KEDUA
// function getAngkaTerbesarKedua(dataAngka) {
//     // check the input
//     if (dataAngka === undefined) return "Error: function membutuhkan parameter array";
//     if (!Array.isArray(dataAngka)) return "Error: Invalid data type";
//     if (dataAngka.length < 2) return "Error: Panjang array harus 2 atau lebih";
  
//     // start the process
//     let first = Number.MIN_SAFE_INTEGER;
//     let second = Number.MIN_SAFE_INTEGER;
//     let isContaintMinVal = false;

//     dataAngka.forEach((number) => {
//       if (number > first) {
//         first = number;
//       } else if (number !== first && number > second) {
//         second = number;
//       } else if (number === Number.MIN_SAFE_INTEGER) {
//         isContaintMinVal = true;
//       }
//     });
  
//     if (second !== Number.MIN_SAFE_INTEGER || isContaintMinVal) return second;
//     else return "tidak ada jumlah terbesar kedua";
//   }
  
//   const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
//   console.log(getAngkaTerbesarKedua(dataAngka));
//   console.log(getAngkaTerbesarKedua(0));
//   console.log(getAngkaTerbesarKedua());
  
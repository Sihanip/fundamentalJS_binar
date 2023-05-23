function isValidPassword (email) {
    // check input user
    if (typeof email == "undefined") {
        return "Error : Password belum di inputkan"; 
    } else if (typeof email != "string") {
        return "Error : Password tidak berupa string";
    } else if ( email.length < 8){
        return "Error : Password kurang dari 8";
    } else if ( !/[A-Z]/.test(email)){
        return "Error : Password tidak memiliki huruf besar";
    } else if ( !/[a-z]/.test(email)){
        return "Error : Password tidak memiliki huruf kecil";
    } else if ( !/[0-9]/.test(email)){
        return "Error : Password tidak memiliki angka";
    } else {
        return "Password sesuai";
    }
}

// CARA 2
// function isValidPassword(password) {
//     //check input
//     if (password === undefined) {
//       console.log("Error: there is no password");
//       return false;
//     }
//     if (typeof password !== "string") {
//       console.log("Error: A password should be in string type");
//       return false;
//     }
//     const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w\W]{8,}$/.test(password);
//     return isValid;
//   }
  

console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@meong'));
console.log(isValidPassword('@Meong2'));
console.log(isValidPassword('0'));
console.log(isValidPassword());

function checkEmail(email) {
    //Check Input User
    if (email === undefined) {
      return "Error: Email tidak ditemukan";
    } else if (typeof email !== "string") {
      return "Error: Email harus berupa String";
    } else if (!/[@]/.test(email)) {
      return "Error: Email harus berisi karakter '@'";
    }
    
    //Process
    if  (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      return "VALID";
    } else {
      return "INVALID";
    }
  }
  
// REGEX 2
// (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))


console.log(checkEmail('apranata@binar.co.id'))
console.log(checkEmail('apranata@gmail.com'))
console.log(checkEmail('apranata@binar'))
console.log(checkEmail('apranata'))
// console.log(checkTypeNumber(3322))

console.log(checkEmail());


function checkTypeNumber(givenNumber) {
    if (givenNumber === undefined) {
        return "Error : invalid parameter";
    } else if (typeof givenNumber != "number") {
        return "Error : invalid tipe data";
    } else return givenNumber % 2 === 0 ? "Genap" : "Ganjil";
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
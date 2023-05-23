function getSplitName (personName) {
    // cek input user
        if (typeof personName !== "string") return "Error: invalid data type";
    
    // process
        let result = personName.split(" ");
        if (result.length == 3) {
            return `firstName = ${result[0]},  middleName = ${result[1]}, lastName = ${result[2]}`  
        } else if (result.length == 2) {
            return `firstName = ${result[0]},  middleName = null, lastName = ${result[1]}`
        } else if (result.length == 1) {
            return `firstName = ${result[0]},  middleName = null, lastName = null`
        } else {
            return "function ini khusus untuk 3 karakter nama";
        }
    
        // early return statement
        // if (result.length == 3) {
        //     return `firstName = ${result[0]},  middleName = ${result[1]}, lastName = ${result[2]}`  
        // }
            // if (result.length == 2) {
        //     return `firstName = ${result[0]},  middleName = null, lastName = ${result[1]}`
        // } 
            // if (result.length == 1) {
        //     return `firstName = ${result[0]},  middleName = null, lastName = null`
        // } 
        //     return "function ini khusus untuk 3 karakter nama";
    }
    
    console.log (getSplitName("Aldi Danella Pranata"));
    console.log (getSplitName("Dwi Kuncoro"));
    console.log (getSplitName("Aurora"));
    console.log (getSplitName("Aurora Aurellia Sukma Dharma"));
    
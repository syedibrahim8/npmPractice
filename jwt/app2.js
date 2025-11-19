import readline from "readline-sync";
import jwt from "jsonwebtoken";

function verify(){
    try {
        const encrypt = readline.question("Enter encrypted code:");
        const key = readline.question("Enter secret key :");
        const decrypt = jwt.verify(encrypt,key)
        console.log('\nDecrypted data :', decrypt);
    } catch (error) {
        console.log(error);
    }
}
verify();
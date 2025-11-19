import jwt from "jsonwebtoken";
import readline from "readline-sync";

function encrypt(){
    try {
        const pname = readline.question("What is your name:");
        const pAge = readline.questionInt("What is your age:");
        const mail = readline.questionEMail("Enter your email address:");
        let gender = readline.question("Enter your gender[M/F/O]:")
        if(gender == "M"||gender == "m"){
            gender = "Male";
        }else if(gender == "F"|| gender == "f"){
            gender = "Female";
        }else{
            gender = "LGBTQ";
        }
        const key = readline.question("\nAdd secret key for encrypting above data:")
        const details = {
            fname:pname,
            age:pAge,
            email : mail,
            sex : gender
        }
        const encryption = jwt.sign(details,key,{
            expiresIn: "1h"
        })
        console.log("\nEncrypted code:",encryption);
        console.log(`\nNOTE : Above encrypted code is valid for next 1hr`)
    } catch (error) {
        console.log(error);
    }
}
encrypt();
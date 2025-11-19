import bcrypt from "bcrypt";
import readline from "readline-sync";
import dotenv from "dotenv";
dotenv.config();

async function verifyHash(){
    try {
        const userInput = readline.question("Enter your password:");
        const hashing = process.env.HASHING;
        const verify = await bcrypt.compare(userInput,hashing);
        if(verify){
            console.log('Login successfull');
        }else{
            console.log("Incorrect credentials, login failed!")
        }
    } catch (error) {
        console.log(error);
    }
}
verifyHash();
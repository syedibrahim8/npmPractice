import bcrypt from "bcrypt";
import readline from "readline-sync";

async function hash(){
    try {
      let userPass = readline.question("Enter password for hashing:")
      let hashing = await bcrypt.hash(userPass,10)
      console.log(`Hashing of your password is: ${hashing}`);   
    } catch (error) {
        console.log(error);
    }
}
hash()
import twilio from "twilio";
import readline from "readline-sync";
import dotenv from "dotenv";
dotenv.config();

// async function sms(number,msg){ // parameters
async function sms(){
    try {
        const accountSid = process.env.SID;
        const accountToken = process.env.TOKEN;
        const phone = process.env.PHONE;
        const sender = twilio(accountSid,accountToken);
        let toPhn = readline.question("Enter verified receiver Phone number:");
        let msg = readline.question("Enter message:");
        let message = await sender.messages.create({
            from:phone,
            to:toPhn,
            body:msg
        })
        console.log("Message sent successfully", message.sid);
    } catch (error) {
        console.log(error);
    }
}
sms();
// sms("+919618211626","hi") // args
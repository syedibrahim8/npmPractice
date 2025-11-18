import mailer from "nodemailer";
import readline from "readline-sync";
import chalk from "chalk";
console.clear();

async function send(){
    try {
        console.log(chalk.hex('#0419fcff')('======================================'));
        console.log(chalk.hex('#f904d8')('\tEMAIL SENDER CLI TOOL'));
        console.log(chalk.hex('#0419fcff')('======================================'));
    let userMail = readline.questionEMail(chalk.hex('#05f739ef')("Enter your Email address:"));
    let appPass = readline.question(chalk.hex('#05f739ef')("Enter google app password:"), {hideEchoBack:true});
    console.clear();
    const userDetails = mailer.createTransport({
        service:"gmail",
        auth:{
            user : userMail,
            pass : appPass
        }
    })
    console.log(chalk.hex('#0419fcff')('======================================'));
    console.log(chalk.hex('#f904d8')('\tEMAIL SENDER CLI TOOL'));
    console.log(chalk.hex('#0419fcff')('======================================'));
    console.log(chalk.hex('#ff4e08ff')("\nlogged in as:"),userMail);
    let n = readline.questionInt(chalk.hex('#fd04bff9')("\nEnter receivers [1-50]?:"))
    let receivers = Array(0)
    if(n>=1 && n<=50){
        for(let i=1;i<=n;i++){ 
        let recEmail = readline.questionEMail(chalk.hex('#f1f904ff')(`\nReceiver email ${i}:`));
        receivers.push(recEmail);
    }
    }else{
        console.log(chalk.hex('#e60707ff')('\nlimit not in range'));
    }
    let sub = readline.question(chalk.hex('#fc8803ff')("\nEnter subject:"));
    let body = readline.question(chalk.hex('#04fa73ff')("Enter Message:"))
    console.log(chalk.hex('#3dfe03f6')("\nEmail sending ..."));
        const sender = await userDetails.sendMail({
        from: userMail,
        to:receivers,
        subject:sub,
        text:body
    })
    console.log(chalk.hex('#07fc28f3')('\nEmail sent successfully!\nMessageId:'),sender.messageId, "utf-8");
    } catch (error) {
        console.log(error.message);
    }
}
send(); 
const nodemailer = require('nodemailer');
const cron = require('node-cron');
require('dotenv').config();

const mailOptions = {
    from: process.env.from ,
    to: process.env.to ,
    subject: "Email from nodeJs NodeMailer App",
    text: "HELLO FROM NODE USING DOTENV"
};


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.from,
        pass: process.env.pass
    }
});
// cron.schedule('* * * * * * ', () =>{
//     console.log("hello bro")
// });

//send email
cron.schedule(' * * * * * *', () => {
    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error)
        }
        else{
    
            console.log("Email Send " + info.response)
        }
    });
});

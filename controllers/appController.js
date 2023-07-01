const nodemailer = require('nodemailer');

const signup = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    let message = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Successfully Register with us.", // plain text body
        html: "<b>Successfully Register with us.</b>", // html body
    }

    transporter.sendMail(message).then((info)=>{
        return res.status(201).json({
            msg: `msg send successfully`,
            info : info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        });
    }).catch(error =>{
        res.status(500).json({error});
    })
}
const getbill = async (req, res) => {
    res.status(201).json("Hello Spider");
}
module.exports = { signup, getbill };
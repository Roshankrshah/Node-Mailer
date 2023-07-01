require('dotenv').config();
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

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

    transporter.sendMail(message).then((info) => {
        return res.status(201).json({
            msg: `msg send successfully`,
            info: info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        });
    }).catch(error => {
        res.status(500).json({ error });
    })
}


const getbill = async (req, res) => {

    const { userEmail } = req.body;
    let config = {
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    var Mailgen = require('mailgen');

    // Configure mailgen by setting a theme and your product info
    var mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            // Appears in header & footer of e-mails
            name: 'Bonami Software',
            link: 'https://mailgen.js/',
            // Optional product logo
            //logo: 'https://mailgen.js/img/logo.png'
        }
    });

    var email = {
        body: {
            name: 'John Appleseed',
            intro: 'Welcome to Mailgen! We\'re very excited to have you on board.',
            action: {
                instructions: 'To get started with Mailgen, please click here:',
                button: {
                    color: '#22BC66', // Optional action button color
                    text: 'Confirm your account',
                    link: 'https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010'
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    };

    var emailBody = mailGenerator.generate(email);
    //var emailText = mailGenerator.generatePlaintext(email);
    let message = {
        from: process.env.EMAIL,
        to: userEmail,
        subject: "Placement Update",
        html: emailBody
    }

    transporter.sendMail(message).then((info) => {
        return res.status(201).json({
            msg: `msg send successfully`
        });
    }).catch(error => {
        res.status(500).json({ error });
    })
    //console.log(userEmail);

}
module.exports = { signup, getbill };
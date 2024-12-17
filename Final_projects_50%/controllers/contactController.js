const nodemailer = require("nodemailer");

exports.sendContactEmail = async (req, res) => {
    const { name, email, phone, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: '',
            pass: ''
        }
    });

    let mailOptions = {
        from: email,
        to: 'fesalboncloyd09@gmail.com',
        subject: 'Contact Form Submission',
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
};

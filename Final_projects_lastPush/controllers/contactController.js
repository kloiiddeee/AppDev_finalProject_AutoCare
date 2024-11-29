const nodemailer = require("nodemailer");

exports.sendContactEmail = async (req, res) => {
    const { name, email, phone, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'fesalboncloyd09@gmail.com',
            pass: 'oluq aptv tdli tcly'
        }
    });

    let mailOptions = {
        from: email,
        to: 'fesalboncloyd09@gmail.com',
        subject: 'AutoCare Feedbacks',
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.redirect('/contacts'); // Redirect to "contacts" page on success
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
};

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
    const {flightNumber, flightDate, departureCity, arrivalCity, email } = req.body;

try {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });
    const htmlBody = `
        <h1>Heyy Flyer, we'are glad to have you on board</h1>
        <p><i>Here are your flight details:</i></p>
        <h1>Flight Details</h1>
        <p><strong>Flight Number:</strong> ${flightNumber}</p>
        <p><strong>Flight Date:</strong> ${flightDate}</p>
        <p><strong>Departure City:</strong> ${departureCity}</p>
        <p><strong>Arrival City:</strong> ${arrivalCity}</p>
        <br><br>
        <p>***Email sent for testing & demonstrating Nodemailer functionality using React and Express by Arnav Deore</p>
    `;
    await transporter.sendMail({
        from:process.env.EMAIL,
        to: email,
        subject: 'Flight Details mail delivered using React & Express',
        html: htmlBody,
    });
    res.status(200).json({ message: 'Email sent successfully' });
} catch (e) {{
    console.log(e);
}
};
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


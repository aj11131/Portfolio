const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config({path: 'backend/.env'});
const app = express();
const PORT = process.env.PORT || "3000";

app.use(bodyParser.json());


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.post('/email', async (req, res, next) => {
  console.log(req.body);
  console.log(process.env.EMAIL);
  console.log(process.env.PASSWORD);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  })

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "*FROM YOUR WEBSITE* " + req.body.subject,
    html: '<p>' + req.body.message + '<p>'
  }
  res.end('It worked');

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {

    } else {
    }
  });
});

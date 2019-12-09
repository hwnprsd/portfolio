var app = require('express')();
var server = require('http').Server(app);
var nodemailer = require('nodemailer');
var credentials = require('./email-credentials');

server.listen(3001);
// WARNING: app.listen(80) will NOT work here!

// Default message if you visit the API URL
app.get('/', function(req, res) {
  res.send('Water you doing here?');
});

// Nodemailer
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(
  'smtps://' + credentials.EMAIL + ':' + credentials.PASS + '@smtp.gmail.com'
);

console.log(credentials);

// setup e-mail data with unicode symbols
var mailOptions = {
  from: '"Fred Foo ?" <foo@blurdybloop.com>', // sender address
  to: 'ashwinxprasad@gmail.com', // list of receivers
  subject: 'MESSAGE FROM PORTFOLIO SITE!', // Subject line
  text: 'Hello world ?', // plaintext body
  html: '<b>Hello world ?</b>' // html body
};

// Handling Socket Connections/Requests
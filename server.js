'use strict';

var express = require('express');

// The website uses sendgrid for sending me emails
// when a user signs up for the website.

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey("YOURAPIKEYHERE");

var server = express();

server.get('/subscribe', function(req,res){
	if(req.query.email != 'undefined'){
		sgMail.send({
		  to: 'hello@yourwebsite.com',
		  from: 'hello@yourwebsite.com',
		  subject: 'New Subscriber',
		  text: 'New subscriber: ' + req.query.email
		});
		res.json({
			'message': 'Thank you for subscribing!'
		});

		sgMail.send({
		  to: 'req.query.email',
		  from: 'hello@yourwebsite.org',
		  subject: 'Subscribed to Ahimsa Mala',
		  text: 'Thank you for subscribing! ' + req.query.email
		});
	}
	else {
		res.json({
			'message': 'Retype! We did not recieve your email'
		});
	}

	
});

server.get('/shop', function(req, res) {
	res.sendFile(__dirname + '/shop.html');
});


server.use('/', express.static(__dirname + '/'));

server.listen(process.env.PORT || 4500);

const nodemailer = require('nodemailer');
var router = require('express').Router();
var bodyParser = require('body-parser');
var cors = require('cors');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(cors());
module.exports = router;

router.post('/', function(req, res) {
	try {
		let transport = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			auth: {
				user: 'projetoreconsidere@gmail.com',
				pass: 'reconsidere#paz'
			}
		});

		var message = {
			from: req.body.email,
			to: 'vinicius_bauer@hotmail.com',
			subject: req.body.title,
			text: req.body.message
		};

		transport.sendMail(message, function(err, info) {
			if (err) {
                res.send(404);
			} else {
				res.send('OK');
			}
		});
	} catch (error) {
		res.send(404);
	}
});
module.exports = router;

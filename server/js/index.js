var firebaseClient = require("./firebaseClient");
var firebaseServer = require("./firebaseServer");
var express = require("express");
var app = express();

var port = process.env.PORT || 3000;
app.listen(port);

app.get('/login', function (req, res) {
	try {
		if(req.query.email && req.query.pass) {
			firebaseClient.Login(req.query.email, req.query.pass, res);
		} else {
			res.send("-1");
		}
	} catch(error) {
		res.send("-Error during login process");
	}
});

app.get('/reset', function(req, res) {
	try {
		if(req.query.email) {
			firebaseServer.ResetPassword(req.query.email, res);
		} else {
			res.send("-1");
		}
	} catch(error) {
		res.send("-1");
	}
});

app.get('/register', function(req, res) {
	try {
		if(req.query.email && req.query.pass) {
			firebaseServer.RegisterUser(req.query.email, req.query.pass, res);
		} else {
			res.send("-1");
		}
	} catch(error) {
		res.send("-1");
	}
});

app.get('/get', function(req, res) {
	try {
		if(req.query.uid) {
			firebaseServer.GetSettings(req.query.uid, res);
		} else {
			res.send("{}");
		}
	} catch(error) {
		res.send("{}");
	}
});

app.get('/set', function(req, res) {
	try {
		if(req.query.uid && req.query.claims) {
			firebaseServer.SetSettings(req.query.uid, req.query.claims, res);
		} else {
			res.send("-1");
		}
	} catch(error) {
		res.send("-1");
	}
});

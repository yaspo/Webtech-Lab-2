const express = require('express')
const router = express.Router();

router.get('/kweeni', function(req, res) {
	res.render('kweeni');
});

module.exports = router;
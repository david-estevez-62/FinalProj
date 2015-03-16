var indexController = {
	index: function(req, res) {
		console.log(req.user)
		res.render('index');
	}
};

module.exports = indexController;
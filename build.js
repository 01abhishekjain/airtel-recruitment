var minifier = require('minifier');
var input = ['public/app.js', 'public/controllers/mainCtrl.js', 'public/directives/addUser.js', 'public/directives/searchUser.js', 'public/directives/tableHead.js', 'public/providers/dataFactory.js'];

minifier.on('error', function(err) {
	// handle any potential error
});

for (var i = 0; i < input.length; i++) {
	minifier.minify(input[i], {
		output: input[i]
	});
}

var stylus = require("stylus");
var path = require("path");

module.exports = {
	input_extensions: [".styl"],

	compile: function(input, filename, callback){
		var options = { "filename": filename, "paths": [ path.dirname(filename) ] };
		stylus.render(input, options, function (err, output) {
			return callback(err, output);
		});
	}

};

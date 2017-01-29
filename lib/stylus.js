var stylus = require("stylus");
var path = require("path");
var nib = require("nib");
var autoprefixer = require('autoprefixer-stylus');

module.exports = {
	input_extensions: [".styl"],
		force_compile: true,

	compile: function(input, filename, callback){
		var s = stylus(input)

		s.set("filename", filename);
		s.set("paths", [ path.dirname(filename) ]);

		try {
			s.use(nib());
			s.use(autoprefixer());
		} catch (e) {}

		s.render(function (err, output) {
			return callback(err, output);
		});
	}

};

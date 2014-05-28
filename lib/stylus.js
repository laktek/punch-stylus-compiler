var stylus = require("stylus");
var path = require("path");
var nib = require("nib");

module.exports = {
	input_extensions: [".styl"],

	compile: function(input, filename, callback){
    var s = stylus(input)

    s.set("filename", filename);
    s.set("paths", [ path.dirname(filename) ]);

    try {
      s.use(nib());
    } catch (e) {}

		s.render(function (err, output) {
			return callback(err, output);
		});
	}

};

var stylus = require("stylus");
var stylus_compiler = require("../lib/stylus");

describe("calling compile", function() {

	it("pass the filename and path to stylus compiler", function() {
		spyOn(stylus, "render");

		var spyCallback = jasmine.createSpy();
		stylus_compiler.compile("test", "sample/css/main.styl", spyCallback);

		expect(stylus.render).toHaveBeenCalledWith("test", { "filename": "sample/css/main.styl", "paths": [ "sample/css" ] }, jasmine.any(Function));
	});

	it("calls the callback with the result", function(){
		spyOn(stylus, "render").andCallFake(function(input, options, callback){
			return callback(null, "rendered file");
		});

		var spyCallback = jasmine.createSpy();
		stylus_compiler.compile("test", "sample.styl", spyCallback);

		expect(spyCallback).toHaveBeenCalledWith(null, "rendered file");
	});

});

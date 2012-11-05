# Stylus Compiler for Punch 

Use [Stylus](http://learnboost.github.com/stylus/) for CSS generation in your Punch projects. 

### How to Use 

* Install the package
	
		npm install punch-stylus-compiler

* Open your Punch project's configurations (`config.json`) and add the following:

		"plugins": {

			"compilers": {
				".css": "punch-stylus-compiler" 
			}

		}

* Now you can use Stylus stylesheets in your project. 

	Make sure you **save the stylesheets with `.styl` extension**.

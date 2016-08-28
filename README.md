# RequireJS template

Simple solution to make js modules load based on a list passed to data attributes rather then loading them using script tags.

Data attributes can have one or more module listed which must be separated by comma (,) or any other character.

# Config
Inside config.js you can modify basic settings such as separator character or data attribute selector:
* REQUIREJS_MODULES = 'data-module';
* MODULES_SEPARATOR = ',';

## Run demo
To run demo simply run following commands
* npm install
* npm run start

In your browser window navigate to localhost:8000 and open devtools to see logs showing an order in which modules where loaded.

Additionally 'allLoadedCheck()' will check if all the modules are loaded. If so it will set allModulesLoaded to true. This is very handy especially when it's required to have loading spinner in place etc. Enjoy!

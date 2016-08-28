requirejs.config({
  baseUrl: '/scripts',
  waitSeconds: 0,
  paths: {
    // Libs
    jquery: '../node_modules/jquery/dist/jquery',

    // Utils
    utilOne: 'utils/util-one',
    utilTwo: 'utils/util-two',
    utilThree: 'utils/util-three',
    utilFour: 'utils/util-four',

    // Modules
    moduleOne: 'modules/module-one',
    moduleTwo: 'modules/module-two',
    moduleThree: 'modules/module-three',
    moduleFour: 'modules/module-four'
  }
});

require(['jquery'], function ($) {
  var uniqueModules = {};
  var loadedCounter = 0;
  var allModulesLoaded = false;
  var REQUIREJS_MODULES = 'data-module';
  var MODULES_SEPARATOR = ',';

  console.info('are all modules loaded? ' + allModulesLoaded);

  function allLoadedCheck(){
    if(loadedCounter == Object.keys(uniqueModules).length){
      allModulesLoaded = true;
      console.info('are all modules loaded? ' + allModulesLoaded);
    }
    return allLoadedCheck;
  }

  function loadScripts(selector){
    if(!selector){
      return;
    }
    var $dataModule = $('[' + selector + ']');
    $dataModule.each(
      function(){
        getModules($(this).attr(selector));
      }
    );
    for(var moduleToload in uniqueModules){
      require([moduleToload], function(module) {
        loadedCounter++;
        allLoadedCheck();
      });
    }
  }

  function getModules(requestedScripts){
    if(requestedScripts == null || requestedScripts.length == 0){
      return;
    }
    var modules = requestedScripts.split(' ').join('').split(MODULES_SEPARATOR);
    for(var i = 0; i < modules.length; i++){
      uniqueModules[modules[i]] = true;
    }
    return uniqueModules;

  }

  // load modules after document.ready
  $(document).ready(function () {
    loadScripts(REQUIREJS_MODULES);
  });

});

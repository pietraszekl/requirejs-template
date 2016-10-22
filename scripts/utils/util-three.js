define(['jquery'], function ($) {

  console.log('util three defined');

  function clickHeaders() {
    console.log('clickHeaders');
    var header = 'h2';

    $(header).on('click', function () {
      console.log('clicked');
      $(this).hide();
    })
  }

  function bindEvents() {
    console.log('bindEvents')
    clickHeaders();
  }

  function init() {
    bindEvents();
  }

  return {
    load: init()
  };
})

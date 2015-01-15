'use strict';

angular.module('angularjsMarkdownDemo', ['ngSanitize', 'ui.router', 'hc.marked', 'emoji'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
  .config(['markedProvider', function(markedProvider) {
    markedProvider.setOptions({
      gfm: true,
      tables: true,
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
  }])
;

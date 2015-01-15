'use strict';

angular.module('angularjsMarkdownDemo')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.raw_body = "";

    $http.get('https://qiita.com/api/v1/items/9c8b265b0cf88d69a539').success(function(item) {
      $scope.raw_body = item.raw_body;
    });

  });

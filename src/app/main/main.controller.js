'use strict';

angular.module('angularjsMarkdownDemo')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.raw_body = "";

    $http.get('https://qiita.com/api/v1/items/f77211edf0f4ab7561ca').success(function(item) {
      $scope.raw_body = item.raw_body;
    });

  });

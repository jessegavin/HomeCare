(function() {
  'use strict';

  var module = angular.module('HomeCare.directives', []);

  module.directive('navbar', function() {
    return {
      restrict: "E",
      replace: true,
      controller: 'NavbarCtrl',
      templateUrl: 'partials/navbar.html'
    };
  });

  module.directive('home', function() {
    return {
      restrict: "E",
      replace: true,
      controller: 'HomeCtrl',
      templateUrl: 'partials/home.html'
    };
  });

  module.directive('currentTime', ['$interval', function($interval) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {

        function updateTime() {
          element.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }

        $interval(updateTime);
      }
    };
  }]);

})();
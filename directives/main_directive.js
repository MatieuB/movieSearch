angular.module('MovieSearch')
  .directive('navBar',['$log',function($log) {
    return {
      restrict:'E',
      templateUrl: './partials/nav.html'
    }
}])

angular.module('MovieSearch')
  .directive('navBar',['$log',function($log) {
    return {
      restrict:'E',
      templateUrl: './partials/nav.html'
    }
  }])

  .directive('moviePost',['$log', function($log) {
    return{
      restrict: 'E',
      templateUrl: './partials/movie_post.html'

    }
  }])

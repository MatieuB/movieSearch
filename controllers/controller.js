angular.module('MovieSearch')
  .controller('Ctrl',['$scope','$log','mainService', function($scope, $log, mainService) {
    $scope.vm = {}
    $scope.test = mainService.test
    $scope.vm.movies = mainService.movies
      

    // $scope.getMovies = mainService.getMovies()
    // $scope.movieTitle = mainService.title
}])

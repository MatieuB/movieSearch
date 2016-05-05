angular.module('MovieSearch')
  .service('mainService',['$http','$log',function($http,$log) {

    this.title='hello';
    // this.getMovies = function() {
    //   $http.get('http://www.omdbapi.com/?t=' + this.title)
    // }.then(function(data){
    //   $log.info(data)
    //   return data
    // })

  }])

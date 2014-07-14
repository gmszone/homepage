 var blogposts = angular.module('blogposts', ['ngRoute']);
  


  blogposts.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'blogslist.html',
      controller: 'postlistCtrl'
    }).
    when('/blog/:slug', {
      templateUrl: 'blogsdetails.html',
      controller: 'blogController'
    });
    // $locationProvider.html5Mode(true);
   });
  
  blogposts.controller('postlistCtrl', function($scope, $http, $sce, $route, $routeParams) {
      $http.get('http://api.phodal.net/blog/page/1').success(function(data) {
          $scope.posts = data;
      });
      // $scope.randomcolors = function() {
      //   return ["post-category-design","post-category-pure","post-category-yui","post-category-js"][Math.round(Math.random() * 3)];
      // };
  });
  blogposts.controller('blogController', function($scope, $http, $sce, $routeParams) {
      $scope.name = "blogController";
      $scope.params = $routeParams;
      $http.get('http://api.phodal.net/blog/'+$routeParams.slug).success(function(data) {
          $scope.post1 = data[0];
          $scope.deliberatelyTrustDangerousSnippet = function() {
            return $sce.trustAsHtml(data[0].content);
          };
      });
  });

var myApp = angular.module('blog', []);
myApp.controller('Rest', ['$scope', '$http', function ($scope, $http){
  console.log('RestController!');
  $http.get('https://api-fake-blog.onrender.com/postagens').
      success(function(data) {
          $scope.publicacoes = data;
      }
  );
}]);

myApp.controller('DetailsController', ['$scope', '$http', function ($scope, $http){
  var url = window.location.href;
  console.log(url);
  var id = url.split('?')[1];
  id = parseInt(url.split('=')[1]);
  $http.get('https://api-fake-blog.onrender.com/postagem/' + id).
      success(function(data) {
          $scope.publicacao = data;
      }
  );
}]);